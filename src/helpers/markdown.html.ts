import { IParseSuccess, MyContext } from "src/types";
import { TEXT_IN_DOM_TO_KEY_TRANSLATE } from "./constants";

export const markdownHtml = (data: IParseSuccess, ctx: MyContext): string => {

  const getName = (t: string) => ctx.t(TEXT_IN_DOM_TO_KEY_TRANSLATE[t])

  const mark = `<b>VIN: </b>${data.vin}${data.data.tables.map(table => `

<u><b>${getName(table.title)}:</b></u> ${table.content.map(tr => `
${getName(tr.name)}: <i>${tr.value}</i>`)}`)}`
  return mark;
};
