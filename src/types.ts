import { I18nFlavor } from "@grammyjs/i18n";
import { Context, SessionFlavor } from "grammy";

export type IParseTypeTableContent = {
  name: string;
  value: string;
};

export type IParseTypeTable = {
  title: string;
  content: IParseTypeTableContent[];
};

export type TParseData = {
  tables: IParseTypeTable[];
  photos: string[];
  allPhotos: string | null;
};

export interface TParseAnswer {
  vin: string;
}

export interface IParseError extends TParseAnswer {
  error: string;
}

export interface IParseSuccess extends TParseAnswer {
  data: TParseData;
}

export interface SessionData {
  __language_code?: string;
}

export type MyContext = Context & SessionFlavor<SessionData> & I18nFlavor;
