type sidePanelProps = {
  title: string;
  image: string;
  link: string;
};

export const sidePanelData: sidePanelProps[] = [
  {
    title: "Main",
    image: "/sidepanel/main.png",
    link: "Main",
  },
  {
    title: "Search",
    image: "/sidepanel/search.png",
    link: "",
  },
  {
    title: "Features",
    image: "/sidepanel/feat.png",
    link: "",
  },
  {
    title: "About",
    image: "/sidepanel/about.png",
    link: "",
  },
];

const sideBarHomeImage: string = "/sidebar/typescript.svg";

export const sideBarHomeData: sidePanelProps[] = [
  {
    title: "Main.tsx",
    image: sideBarHomeImage,
    link: "/Main",
  },
  // {
  //   title: "Contact.tsx",
  //   image: sideBarHomeImage,
  //   link: "Contact",
  // },
  {
    title: "About.tsx",
    image: sideBarHomeImage,
    link: "/About",
  },
];

export const sidebarContactData: sidePanelProps[] = [
  {
    title: "Github",
    image: "/sidebar/github.svg",
    link: "https://github.com/shobhitexe",
  },
  {
    title: "Twitter",
    image: "/sidebar/twitter.svg",
    link: "https://twitter.com/shobhitexe",
  },
  {
    title: "Linkedin",
    image: "/sidebar/linkedin.svg",
    link: "https://www.linkedin.com/in/shobhitx/",
  },
  {
    title: "Discord",
    image: "/sidebar/discord.svg",
    link: "https://discord.com/users/766383667387432973",
  },
  {
    title: "Email",
    image: "/sidebar/gmail.svg",
    link: "mailto:sguptamds94@gmail.com",
  },
];

export const sidebarPortfolioDataWebDev: sidePanelProps[] = [
  {
    title: "BlockEstate",
    image: "/sidebar/portfolio/solidity.svg",
    link: "/portfolio/blockestate",
  },
  {
    title: "Master memecoin",
    image: "/sidebar/portfolio/react.svg",
    link: "/portfolio/master",
  },
];

export const sidebarPortfolioDataDiscordBots: sidePanelProps[] = [
  {
    title: "One word story",
    image: "/sidebar/portfolio/javascript.svg",
    link: "/portfolio/onewordstorybot",
  },
  {
    title: "Confession bot",
    image: "/sidebar/portfolio/javascript.svg",
    link: "/portfolio/confessionbot",
  },
  {
    title: "Link Preview",
    image: "/sidebar/portfolio/typescript.svg",
    link: "/portfolio/linkpreviewbot",
  },
];

export const sidebarPortfolioDataWebScrapping: sidePanelProps[] = [
  {
    title: "GPT-Spider",
    image: "/sidebar/portfolio/typescript.svg",
    link: `/portfolio/gptspider`,
  },
];
