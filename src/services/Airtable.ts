import Airtable, { FieldSet, Table } from 'airtable';

export const apiKey = process.env.AIRTABLE_API_KEY;
// Authenticate
Airtable.configure({
  apiKey,
});

export const baseConfig = {
  Site_Content: {
    BASE_ID: "appGL8ZL9dK3g8hPh",
    BASE_NAME: "Site Content",
  },
  Methodology_Level: {
    BASE_ID: "appGL8ZL9dK3g8hPh",
    BASE_NAME: "Methodology Levels",
  },
  Classes_Division_Level: {
    BASE_ID: "appGL8ZL9dK3g8hPh",
    BASE_NAME: "Classes Division Level",
  },
  Satisfied_Students: {
    BASE_ID: "appGL8ZL9dK3g8hPh",
    BASE_NAME: "Satisfied Students",
  },

  Messages: {
    BASE_ID: "appGL8ZL9dK3g8hPh",
    BASE_NAME: "Messages",
  },
  Trainer_Team: {
    BASE_ID: "appGL8ZL9dK3g8hPh",
    BASE_NAME: "Trainer Team",
  },
  School_Images: {
    BASE_ID: "appGL8ZL9dK3g8hPh",
    BASE_NAME: "School Images",
  },
  Master_Key_Slogans: {
    BASE_ID: "appGL8ZL9dK3g8hPh",
    BASE_NAME: "Master Key Slogans",
  },
  Theme_Color_Palette: {
    BASE_ID: "appGL8ZL9dK3g8hPh",
    BASE_NAME: "Theme Palette",
  },
  People: {
    BASE_ID: 'appsT3NeXyd6SmFiy',
    BASE_NAME: 'People',
  },
  Rank: {
    BASE_ID: 'app1lnb5O35ExNO55',
    BASE_NAME: 'Ranks Issued',
  },
  School: {
    BASE_ID: 'appCKZPDi7x9rSnAL',
    BASE_NAME: 'Schools',
  },
  Domains: {
    BASE_ID: 'appCKZPDi7x9rSnAL',
    BASE_NAME: 'Domains',
  },
  Achievement: {
    BASE_ID: 'appDb9CYNMbeSRhqd',
    BASE_NAME: 'All Achievements',
  },
  Tournaments_Achievement: {
    BASE_ID: 'appDb9CYNMbeSRhqd',
    BASE_NAME: 'Tournaments',
  },
  Profiles_Achievements: {
    BASE_ID: 'appDb9CYNMbeSRhqd',
    BASE_NAME: 'All Profiles',
  },
  
  Video: {
    BASE_ID: 'appdRGYhzSBXQ3djH',
    BASE_NAME: 'External',
  },
  Martial_Art: {
    BASE_ID: 'appe7wrj7m7qNTwF3',
    BASE_NAME: 'Ranks',
  },
  All_Martial_Arts: {
    BASE_ID: 'appe7wrj7m7qNTwF3',
    BASE_NAME: 'Style',
  },
  Timetable: {
    BASE_ID: 'appNKOVRBkNCnQxX0',
    BASE_NAME: 'Schedule',
  },
  Martial_Arts_Timetable: {
    BASE_ID: 'appNKOVRBkNCnQxX0',
    BASE_NAME: 'Martial Arts',
  },
  Instructor_Timetable: {
    BASE_ID: 'appNKOVRBkNCnQxX0',
    BASE_NAME: 'All Profiles',
  },
  Schools: {
    BASE_ID: 'appNKOVRBkNCnQxX0',
    BASE_NAME: 'All Schools',
  },
  Leads: {
    BASE_ID: 'appJkEmDEd0D0r2kT',
    BASE_NAME: 'Leads',
  },
  Sites_Leads: {
    BASE_ID: 'appRn0d2iTnn2Fu9X',
    BASE_NAME: 'Leads',
  },
  Sites_All_Schools: {
    BASE_ID: 'appRn0d2iTnn2Fu9X',
    BASE_NAME: 'All Schools',
  },
  All_Schools: {
    BASE_ID: 'appJkEmDEd0D0r2kT',
    BASE_NAME: 'All Schools',
  },
  Plans: {
    BASE_ID: 'app2KCwYknmRuvz18',
    BASE_NAME: 'Plans',
  },
  Plans_Categories: {
    BASE_ID: 'app2KCwYknmRuvz18',
    BASE_NAME: 'Plans Categories',
  },
  Plans_Subscriptions: {
    BASE_ID: 'app2KCwYknmRuvz18',
    BASE_NAME: 'Subscriptions',
  },
  Plans_Profiles: {
    BASE_ID: 'app2KCwYknmRuvz18',
    BASE_NAME: 'Profiles',
  },
  All_Schools_Plans: {
    BASE_ID: 'app2KCwYknmRuvz18',
    BASE_NAME: 'All Schools',
  },
  Private_Classes_Classes: {
    BASE_ID: 'appUMjtcjUx2cN1y8',
    BASE_NAME: 'Classes',
  },
  Private_Classes_Bookings: {
    BASE_ID: 'appUMjtcjUx2cN1y8',
    BASE_NAME: 'Bookings',
  },
  Private_Classes_All_Profiles: {
    BASE_ID: 'appUMjtcjUx2cN1y8',
    BASE_NAME: 'All Profiles',
  },
  Seminars: {
    BASE_ID: 'appT7y2lGkAyzvRW2',
    BASE_NAME: 'Seminars',
  },
  Seminars_Schools: {
    BASE_ID: 'appT7y2lGkAyzvRW2',
    BASE_NAME: 'Schools',
  },
  Seminars_Tickets: {
    BASE_ID: 'appT7y2lGkAyzvRW2',
    BASE_NAME: 'Tickets',
  },
  Articles: {
    BASE_ID: 'app8a9YTZ3vKJHnHs',
    BASE_NAME: 'Articles',
  },
  Article_Source: {
    BASE_ID: 'app8a9YTZ3vKJHnHs',
    BASE_NAME: 'Source',
  },
  School_Reviews: {
    BASE_ID: 'appfWrsMsl0S5X0TK',
    BASE_NAME: 'Reviews',
  },
  Profiles_School: {
    BASE_ID: 'appfWrsMsl0S5X0TK',
    BASE_NAME: 'Profiles',
  },
  Competitions: {
    BASE_ID: 'appZ7YKxEUgNtamBV',
    BASE_NAME: 'Competitions',
  },
  All_Schedules_Check_In: {
    BASE_ID: 'app1uWpLivDwP86h7',
    BASE_NAME: 'All Schedules',
  },
  All_Check_Ins: {
    BASE_ID: 'app1uWpLivDwP86h7',
    BASE_NAME: 'All Check-ins',
  },
  All_Profiles_Check_Ins: {
    BASE_ID: 'app1uWpLivDwP86h7',
    BASE_NAME: 'All Profiles',
  },
  Martial_Arts_Ranks: {
    BASE_ID: 'apptPpGEoF7yqBixc',
    BASE_NAME: 'Martial Arts Ranks',
  },
  Martial_Arts_Schools: {
    BASE_ID: 'appfWrsMsl0S5X0TK',
    BASE_NAME: 'Martial Arts',
  },
  All_Profiles_Ranks: {
    BASE_ID: 'apptPpGEoF7yqBixc',
    BASE_NAME: 'All Profiles',
  },
  All_Schools_Ranks: {
    BASE_ID: 'apptPpGEoF7yqBixc',
    BASE_NAME: 'All Schools',
  },
  Posts: {
    BASE_ID: 'appl1yorlZg5PNHtq',
    BASE_NAME: 'Posts',
  },
  Events: {
    BASE_ID: 'apptkCH3mcJc1WLI5',
    BASE_NAME: 'All Events',
  },
};

/**
 * @description - get Profile after send page to browser.
 * @param baseName - Base Name.
 * @returns - Return airtable instance for base like for people and others.
 */

export const getTableInstance: (baseName?: string) => Table<FieldSet> = (baseName) => {
  // @ts-ignore
  const { BASE_ID, BASE_NAME } = baseConfig[baseName] as any;

  const base = Airtable.base(BASE_ID);
  const table = base(BASE_NAME);
  return table;
};

export enum TABLES {
  SITE_CONTENT = "Site_Content",
  METHODOLOGY_LEVEL = "Methodology_Level",
  CLASSES_DIVISION_LEVEL = "Classes_Division_Level",
  SATISFIED_STUDENTS = "Satisfied_Students",
  MESSAGES = "Messages",
  TRAINER_TEAM = "Trainer_Team",
  SCHOOL_IMAGES = "School_Images",
  MASTER_KEY_SLOGANS = "Master_Key_Slogans",
  THEME_COLOR_PALETTE = "Theme_Color_Palette",
  PEOPLE = 'People',
  RANK = 'Rank',
  SCHOOL = 'School',
  ACHIEVEMENT = 'Achievement',
  VIDEO = 'Video',
  MARTIAL_ART = 'Martial_Art',
  ALL_MARTIAL_ARTS = 'All_Martial_Arts',
  TOURNAMENTS_ACHIEVEMENT = 'Tournaments_Achievement',
  MARTIAL_ART_TIMETABLE = 'Martial_Arts_Timetable',
  INSTRUCTOR_TIMETABLE_DATA = 'Instructor_Timetable',
  TIMETABLE = 'Timetable',
  SCHOOLS = 'Schools',
  LEADS = 'Leads',
  SITES_LEADS = 'Sites_Leads',
  SITES_LEADS_SCHOOLS = 'Sites_All_Schools',
  ALL_SCHOOLS = 'All_Schools',
  PLANS = 'Plans',
  ALL_SCHOOLS_PLANS = 'All_Schools_Plans',
  PLANS_CATEGORIES = 'Plans_Categories',
  PLANS_SUBSCRIPTION = 'Plans_Subscriptions',
  PRIVATE_CLASSES_CLASSES = 'Private_Classes_Classes',
  PRIVATE_CLASSES_BOOKINGS = 'Private_Classes_Bookings',
  PRIVATE_CLASSES_ALL_PROFILES = 'Private_Classes_All_Profiles',
  SEMINARS = 'Seminars',
  SEMINARS_SCHOOLS = 'Seminars_Schools',
  SEMINARS_TICKETS = 'Seminars_Tickets',
  ARTICLES = 'Articles',
  ARTICLE_SOURCE = 'Article_Source',
  SCHOOL_REVIEWS = 'School_Reviews',
  PROFILES_SCHOOL = 'Profiles_School',
  COMPETITIONS = 'Competitions',
  ALL_SCHEDULES_CHECK_IN = 'All_Schedules_Check_In',
  ALL_CHECK_INS = 'All_Check_Ins',
  ALL_PROFILES_CHECK_INS = 'All_Profiles_Check_Ins',
  MARTIAL_ARTS_RANKS = 'Martial_Arts_Ranks',
  MARTIAL_ARTS_SCHOOLS = 'Martial_Arts_Schools',
  ALL_PROFILE_RANKS = 'All_Profiles_Ranks',
  ALL_SCHOOLS_RANKS = 'All_Schools_Ranks',
  POSTS = 'Posts',
  All_PROFILES_ACHIEVEMENTS = 'Profiles_Achievements',
  EVENTS = 'Events',
  PLANS_PROFILES = 'Plans_Profiles',
  DOMAINS = 'Domains',
}
