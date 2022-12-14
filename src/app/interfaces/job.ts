import { Assesment } from './assesment';
export class Job {
  id: number;
  is_applied?: boolean;
  title: string;
  salary: string;
  description: string;
  qualifications?: string;
  views?: number;
  benefits: any;
  nbrOpen: number;
  status: number;
  createdAt: Date;
  updatedAt?: Date;
  expiredAt: Date;
  cityName: string;
  stateName: string;
  expiredDays: number;
  levelName: string;
  levelId: number;
  categoryName: string;
  categoryId: number;
  listAssessment: Array<Assesment>;
  companyName?: string;
  companyLogo?: string;
  employer_profile_picture?: string;
  urlSeo: string;
  urlCompanySeo: string;
  employerId: number;
  employerDescription?: string;
  employerSizeMin: number;
  employerSizeMax: number;
  totalApplicants: number;
  totalView: number;
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
  startHotJob: Date;
  endHotJob: Date;
  addUrgentHiringBadge: number;
  privateApplicants: number;
  isPrivate: number;
  scheduleJob: any;
  specificPercentTravel: number;
  percentTravel: number;
  isSpecificPercentTravel: number;
  jobFallUnder: string;
  bonus: any;
  salaryType: number;
  salaryMin: number;
  salaryMax: number;
  statusCheckTemplate: boolean;
  address?: string;
  employmentType: number;
  isPercentTravel: number;
  proposedConpensation: number;
  employmentTypeText?: string;
  jobTravel?: string;
  isDuplicateAssessment?: boolean;
  stage: number;
  scheduleTime: Date;
  group_id?: number;
  can_rate_stars?: number;
  employerFirstName?: string;
  employerLastName?: string;
  company_city_name?: string;
  company_state_name?: string;
  employerUserResponsive?: number;
  isInvited: number;
  isApplied: number;
  selectedInviteJob? : boolean
  is_make_featured: number;
  is_crawl?: number;
  is_crawl_text_status?: number;
  cityJob?: string;
  stateJob?: string;
}
export class CitiWithLatLon {
  name: string; // city, state
  loc: number[];
}

export interface FollowCompany {
  company_image?: string;
  company_name: string;
  created_at: Date;
  employer_id: number;
  id: number;
  job_seeker_id: number;
  status: number;
  updated_at: Date;
  isSelected: boolean;
}