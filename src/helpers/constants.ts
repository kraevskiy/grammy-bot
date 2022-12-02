type TConstants = {
  url: (vin: string) => string;
  tablesSelector: string;
  photosSelector: string;
  errorSelector: string;
  photosDownloadSelector: string;
};

export const ERROR_TEXT_IN_DOM = "Vehicle Not found";

export const constants: TConstants = {
  url: (vin) =>
    `https://w8shippingua.com/tracking/?lot=&vin=${vin}&searchAuto=Search+%C2%BB`,
  tablesSelector: "td.details-cell",
  photosSelector: ".photos__gallery .gallery__link",
  errorSelector: ".indent .message span",
  photosDownloadSelector: ".photos-controls .photos-controls__btn",
};

export const SUPPORT_CHAT_ID = "-728174226";

export const MENUS_ID = {
  COMMAND_MENU: "my-command-menu",
  LANGUAGE_MENU: "my-language-menu",
};

export const ERROR_TEXT_IN_DOM_TO_KEY_TRANSLATE = {
  "Vehicle Not found": "vehicle_not_found",
};
