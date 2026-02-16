export const SITE = {
  website: "https://ngubiadventures.or.ke/", // replace this with your deployed domain
  author: "Ngubi Adventures Forest Camp",
  profile: "https://github.com/suemnjeri", // UNCOMMENT THIS LINE AND ADD A URL HERE
  desc: "Ngubi Adventures Forest Camp: Enriching nature experiences, fostering teamwork, and promoting conservation in the Kikuyu escarpment forest.",
  title: "Ngubi Adventures Forest Camp",
  ogImage: "ngubi-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
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