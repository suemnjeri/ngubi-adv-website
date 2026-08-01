export const SITE = {
  website: "https://ngubiadventures.or.ke/", // replace this with your deployed domain
  author: "Ngubi Adventures Forest Camp",
  profile: "https://github.com/suemnjeri", // UNCOMMENT THIS LINE AND ADD A URL HERE
  desc: "Ngubi Adventures Forest Camp: Enriching nature experiences, fostering teamwork, and promoting conservation in the Kikuyu escarpment forest.",
  title: "Ngubi Adventures Forest Camp",
  ogImage: "ngubi-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 6,
  postPerPage: 6,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/satnaing/astro-paper/edit/main/",
  },
  dynamicOgImage: false,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Africa/Nairobi", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;



// --- TREE PLANTING PROGRESS ---
// Single source of truth for the homepage teaser AND the /services/tree-planting
// page. Update these numbers here as your totals change - nowhere else.
export const TREE_STATS = {
  plantedSinceJan: 1000, // running total of trees planted with guests since Jan 2026
  midTermTarget: 10000, // trees planted, aimed for by Mazingira Day 2027
  midTermLabel: "Mazingira Day 2027",
  longTermTarget: 1000000, // trees planted, aimed for by our 10th year
  longTermLabel: "2035",
  ngubiHectares: 1950, // hectares of the Ngubi block within Uplands Forest Station
} as const;
 