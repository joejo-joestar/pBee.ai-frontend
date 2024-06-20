export interface ProfileModel {
  data: ProfileItem;
}

export interface ProfileItem {
  email: string;
  countryCode: string | null;
  phoneCode: number | null;
  phoneExt: number;
  phoneNo: string | null;
  profileId: string;
  firstName: string;
  lastName: string | null;
  profilePhoto: string | null;
  userName: string;
  userId: number;
  channelId: string | null;
  communityId: string | null;
}

export interface GeoInfo {
  city: "Abu Dhabi";
  continent_code: "AS";
  country: "AE";
  country_area: 82880;
  country_calling_code: "+971";
  country_capital: "Abu Dhabi";
  country_code: "AE";
  country_code_iso3: "ARE";
  country_name: "United Arab Emirates";
  country_population: 9630959;
  country_tld: ".ae";
  currency: "AED";
  currency_name: "Dirham";
}

export interface ValidateUserTokenRequestBody {
  token: string;
}

export interface ValidateUserTokenResponceData {
  tokenType: boolean;
  accessToken: string;
  accountFlag: boolean;
}
