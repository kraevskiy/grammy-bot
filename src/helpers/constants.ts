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
    `https://w8shipping.com/tracking/?lot=&vin=${vin}&searchAuto=Search+%C2%BB`,
  tablesSelector: "td.details-cell",
  photosSelector: ".photos__gallery .gallery__link",
  errorSelector: ".indent .message span",
  photosDownloadSelector: ".photos-controls .photos-controls__btn",
};

export const MENUS_ID = {
  COMMAND_MENU: "my-command-menu",
  LANGUAGE_MENU: "my-language-menu",
  SELECT_PHOTOS_MENU: "my-select-photos-menu"
};

export const ERROR_TEXT_IN_DOM_TO_KEY_TRANSLATE = {
  "Vehicle Not found": "vehicle_not_found",
};

export const TEXT_IN_DOM_TO_KEY_TRANSLATE = {
  "Vehicle details": "text_vehicle_details",
  "Description": "text_description",
  "Color": "text_color",
  "VIN number": "text_vin_number",
  "Keys": "text_keys",
  "Auction": "text_auction",
  "City": "text_city",
  "LOT": "text_lot",
  "Delivered to warehouse": "text_delivered_to_warehouse",
  "Buyer number": "text_buyer_number",
  "Date": "text_date",
  "Promised to be picked up": "text_promised_to_be_picked_up",
  "Promised to be delivered": "text_promised_to_be_delivered",
  "Container details": "text_container_details",
  "Point of loading": "text_point_of_loading",
  "Container number": "text_container_number",
  "Booking number": "text_booking_number",
  "Destination port": "text_destination_port",
  "Loading date": "text_loading_date",
  "Expected Arrival Date": "text_expected_arrival_date",
  "Arrival Date": "text_arrival_date",
  "Unloading date": "text_unloading_date",
};


