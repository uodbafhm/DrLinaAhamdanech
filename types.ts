
export type Language = 'FR' | 'AR' | 'EN' | 'ES';

export interface ServiceStrings {
  title: string;
  description: string;
}

export interface Translation {
  // Nav
  navHome: string;
  navAbout: string;
  navContact: string;
  // Hero
  heroBadge: string;
  heroTitle: string;
  heroSub: string;
  heroSat: string;
  // Status
  statusOpen: string;
  statusClosed: string;
  bookBtn: string;
  // Sections
  servicesTitle: string;
  servicesSubtitle: string;
  reviewsTitle: string;
  reviewsSubtitle: string;
  reviewsViewAll: string;
  addressTitle: string;
  addressSubtitle: string;
  // About Page
  aboutHeader: string;
  aboutTitle: string;
  aboutDoctorSub: string;
  aboutP1: string;
  aboutP2: string;
  aboutExp: string;
  aboutFormation: string;
  aboutMissions: string;
  // Contact Page
  contactSub: string;
  contactCall: string;
  contactLocationLabel: string;
  contactMapLink: string;
  contactWaitMsg: string;
  // Form
  formName: string;
  formEmail: string;
  formPhone: string;
  formDate: string;
  formMsg: string;
  formSubmit: string;
  formSent: string;
  // Footer
  footerDesc: string;
  footerContactTitle: string;
  footerHoursTitle: string;
  footerMonFri: string;
  footerSat: string;
  footerSun: string;
  footerSunClosed: string;
  footerRights: string;
  footerPrivacy: string;
  footerLegal: string;
  // WhatsApp
  whatsappTemplate: string;
  // Services
  sBlanchiment: ServiceStrings;
  sImplants: ServiceStrings;
  sOrthodontie: ServiceStrings;
  sSoins: ServiceStrings;
  sDetartrage: ServiceStrings;
  sExtraction: ServiceStrings;
}

export interface Service {
  id: string;
  icon: string;
  image: string;
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
  date: string;
}
