import { MyContext } from "../types";

export const markdownLink = (url: string, ctx: MyContext) => `
  <a href="${url}">${ctx.t("downloadAllPhotos")}</a>
`;
