export interface UserInfo {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  chat_group_id: number;
  accountType: number;
  signUpStep: number;
  phone: string;
  region_code: string;
  avatar?: string;
  address?: string;
  companyName?: string;
  salary?: number;
  cityName?: string;
  stateName?: string;
  benefits?: string;
  description?: string;
  companyMaxSize?: number;
  companyMinSize?: number;
  industry?: string;
  revenueSizeMin?: number;
  revenueSizeMax?: number;
  yearFounded?: number;
  companyPhoto?: string;
  ceoPicture?: string;
  ceoName?: string;
  companyWebsite?: string;
  companyFacebook?: string;
  twitterPage?: string;
  companyVideo?: string;
  referLink?: string;
  isUserDeleted: number;
  isDeleted: number;
  employerId: number;
  permissions: Array<number>;
  employerInfo: UserInfo;
  acc_type: number;
  company_name: string;
  employer_title: string;
  employer_id: number;
  userResponsive: number;
  converge_ssl_token?: string;
  nbrCredits?: number;
  nbrFreeCredits?: number;
  zip_code?: number;
  company_profile_picture: string;
  email_verified?: number;
  enable_show_avatar: number;
  askingSalaryType: number;
  billingInfo: any;
  is_subscribe: number;
  user_potentials_categories: any;
  is_user_potentials: boolean;
  company_id: number;
}
export interface UserPropetyAnalytic {
  user_id?: number,
  user_account_type?: string,
  user_full_name: string,
  user_company_name: string,
  user_company_id: string,
}