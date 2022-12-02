import {
  IParseError,
  IParseSuccess,
  IParseTypeTable,
  IParseTypeTableContent,
  TParseData,
} from "../types";
import { Context } from "grammy";
import { en } from "../translation";
import fetch from "node-fetch-commonjs";
import constants, { ERROR_TEXT_IN_DOM } from "../commands/help/constants";
import { JSDOM } from "jsdom";

const getWebsiteContent = async (vin: string): Promise<string> => {
  const content = await fetch(constants.url(vin));
  return content.text();
};

const parseDom = (stringToGenDom: string): TParseData | string => {
  const dom = new JSDOM(stringToGenDom);
  const document = dom.window.document;
  const isError = document.querySelector(constants.errorSelector);
  if (isError && isError.innerHTML === ERROR_TEXT_IN_DOM) {
    return ERROR_TEXT_IN_DOM;
  } else {
    const tablesDOM = [...document.querySelectorAll(constants.tablesSelector)];
    const result: TParseData = {
      tables: [],
      photos: [],
      allPhotos: null,
    };

    tablesDOM.forEach((dom) => {
      const tableData: IParseTypeTable = {
        title: "",
        content: [],
      };
      const titleDom = dom.querySelector("h2");
      if (titleDom) {
        tableData.title = titleDom.innerHTML;
      }

      const trDom = [...dom.querySelectorAll("table tr")];
      trDom.forEach((tr) => {
        const trRes: IParseTypeTableContent = {
          name: "",
          value: "",
        };
        const tdDom = [...tr.querySelectorAll("td")];
        if (tdDom.length === 2) {
          trRes.name = tdDom[0].innerHTML;
          trRes.value = tdDom[1].innerHTML;
        }
        tableData.content.push(trRes);
      });
      result.tables.push(tableData);
    });

    const photosDOM = [
      ...document.querySelectorAll(constants.photosSelector),
    ] as HTMLAnchorElement[];
    photosDOM.forEach((photo) => {
      result.photos.push(photo.href);
    });

    const linkPhotosAll = document.querySelector(
      constants.photosDownloadSelector
    ) as HTMLAnchorElement;
    if (linkPhotosAll) {
      result.allPhotos = linkPhotosAll.href;
    }
    return result;
  }
};

export const parseInfo = async (
  vin: string,
  ctx: Context
): Promise<IParseSuccess | IParseError | null> => {
  const content = await getWebsiteContent(vin);
  const domParsed = parseDom(content);
  if (domParsed) {
    if (typeof domParsed === "string") {
      return { vin, error: domParsed };
    } else {
      return { vin, data: domParsed };
    }
  } else {
    await ctx.reply(en.error);
    return null;
  }
};
