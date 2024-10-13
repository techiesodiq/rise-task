import AppImg from "../images/app_icon.svg";
import AppStoreIcon from "../images/app_store_icon.svg";
import ARMLogo from "../images/arm.svg";
import FixedIncome from "../images/fixed-income.svg";
import FooterLogo from "../images/footer-logo.svg";
import GooglePlayIcon from "../images/google_play_icon.svg";
import HeroImg from "../images/hero.svg";
import HomeImg from "../images/home.svg";
import Logo from "../images/logo.svg";
import RealEstateIcon from "../images/real-estate.svg";
import SavingImg from "../images/savings.svg";
import ServiceImg1 from "../images/service1.svg";
import ServiceImg2 from "../images/service2.svg";
import ServiceImg3 from "../images/service3.svg";
import ServiceImg4 from "../images/service4.svg";
import StocksIcon from "../images/stocks.svg";
import TechstarsLogo from "../images/techstars.svg";
import Avatar1 from "../images/testimonialImage1.svg";
import Avatar2 from "../images/testimonialImage2.svg";
import VLogo from "../images/v_logo.svg";
import WesternUnionLogo from "../images/western-union.svg";

const homeData = {
  navData: {
    logo: {
      name: "Logo",
      image: Logo,
      link: "/",
    },
    pages: [
      {
        id: "1",
        label: "Home",
        link: "/",
        hasImage: true,
        image: HomeImg,
        hasDropdown: false,
        htmlEntity: "",
      },
      {
        id: "2",
        label: "Products",
        link: "/",
        hasImage: false,
        image: "",
        hasDropdown: true,
        htmlEntity: "&#8595;",
      },
      {
        id: "3",
        label: "Investment Club",
        link: "/",
        hasImage: false,
        image: "",
        hasDropdown: false,
        htmlEntity: "",
      },
      {
        id: "4",
        label: "Blog",
        link: "/",
        hasImage: false,
        image: "",
        hasDropdown: false,
        htmlEntity: "",
      },
      {
        id: "5",
        label: "About Us",
        link: "/",
        hasImage: false,
        image: "",
        hasDropdown: false,
        htmlEntity: "",
      },
      {
        id: "6",
        label: "FAQs",
        link: "/",
        hasImage: false,
        image: "",
        hasDropdown: false,
        htmlEntity: "",
      },
    ],
  },
  heroData: {
    title: "hero",
    heroText: "Dollar investments that help you grow",
    description:
      "We put your money in high quality assets that help you build wealth and achieve your financial goals.",
    image: HeroImg,
    downloadApp: [
      {
        id: "1",
        name: "App Store",
        icon: AppStoreIcon,
        link: "/",
      },
      {
        id: "2",
        name: "Google Play",
        icon: GooglePlayIcon,
        link: "/",
      },
    ],
  },
  partners: [
    {
      id: "1",
      name: "ARM",
      logo: ARMLogo,
    },
    {
      id: "2",
      name: "Western Union",
      logo: WesternUnionLogo,
    },
    {
      id: "3",
      name: "Techstars",
      logo: TechstarsLogo,
    },
    {
      id: "4",
      name: "V",
      logo: VLogo,
    },
  ],
  services: [
    {
      id: "1",
      title: "Invest your money in dollars",
      description:
        "By holding your investments in a stable currency, your money grows more over time and retains its value better.",
      link: "/",
      linkText: "Start Investing Now",
      image: ServiceImg1,
    },
    {
      id: "2",
      title: "Choose what's best for you",
      description:
        "Unlike other platforms, Rise lets you pick between stocks, US real estate and fixed income, according to your risk appetite. That way you can spread your risk and tap into different investments all in one place. ",
      link: "/",
      linkText: "Start Investing Now",
      image: ServiceImg2,
    },
    {
      id: "3",
      title: "Set goals and reach them",
      description:
        "You can invest towards a goal on Rise--retirement, higher education, save for your home or travel budgets. Or create a goal of your own and invest periodically to achieve them. ",
      link: "/",
      linkText: "Start Investing Now",
      image: ServiceImg3,
    },
    {
      id: "4",
      title: "We remember so you dont have to",
      description:
        "Our Auto-invest feature makes it easy to stay consistent, even when you forget. Set a funding amount, frequency and payment method and Rise will automatically fund your investment, on schedule.",
      link: "/",
      linkText: "Start Investing Now",
      image: ServiceImg4,
    },
  ],
  assetClassesData: {
    title: "Asset Classes",
    subtitle: "It’s your money, choose where you invest it",
    assetClasses: [
      {
        id: "1",
        title: "Stocks",
        bgColor: "#FFF4F0",
        description:
          "We help you invest and manage your money by investing in our portfolio of 30 high-growth stocks across the US market with our equity portfolio of power stocks.",
        historicalReturns: "14% per annum",
        riskLevel: "Medium",
        link: "/",
        linkText: "Learn how Stocks work",
        iconImage: StocksIcon,
      },
      {
        id: "2",
        title: "Real Estate",
        bgColor: "#F6F2FF",
        description:
          "Our Real Estate plan is the sweet middle. Best for those who want a balance of good returns and medium risk. This plan invests in rented buildings in the US.",
        historicalReturns: "14% per annum",
        riskLevel: "Medium",
        link: "/",
        linkText: "Learn how Real Estate works",
        iconImage: RealEstateIcon,
      },
      {
        id: "3",
        title: "Fixed Income",
        bgColor: "#ECFEFE",
        description:
          "A low-risk asset perfect for anyone who wants to protect their money in a secure, appreciating currency, i.e. the dollar. For people who want to protect their hard-earned money from inflation while earning steady returns.",
        historicalReturns: "14% per annum",
        riskLevel: "Medium",
        link: "/",
        linkText: "Learn how Fixed Income works",
        iconImage: FixedIncome,
      },
    ],
  },
  savingData: {
    title: "The Rise App",
    subtitle: "Save for your",
    emphaticWord: "future",
    description:
      "With Rise, you achieve your financial goals faster. Save for school, your home, vacations, your children’s future and more.",
    image: SavingImg,
    link: "/",
    linkText: "Start Saving",
  },
  regulations: {
    title: "How we are Regulated",
    description:
      "Rise is registered and regulated both in the US and in Nigeria. Our team is made up of US registered investment advisers, our Nigerian users are covered by our SEC licensed trustees, ARM Trustees and all our assets are held with regulated third parties, in all relevant jurisdictions",
  },
  testimonials: {
    title: "From The People Who Use Rise",
    subtitle:
      "Our mission at Risevest is to empower more people just like you to achieve your personal financial goals.",
    quotations: [
      {
        id: "1",
        quote:
          "I don’t want to invest in separate stocks because I’m not a financial expert and I would rather trust my money in the hands of people like Rise who are skilled and knowledgeable.",
        name: "Lade",
        avatar: Avatar1,
      },
      {
        id: "2",
        quote:
          "I don’t want to invest in separate stocks because I’m not a financial expert and I would rather trust my money in the hands of people like Rise who are skilled and knowledgeable.",
        name: "Jesse",
        avatar: Avatar1,
      },
      {
        id: "3",
        quote:
          "I chose Rise because of its leadership, wealth of knowledge and the people who support them. I invest with Rise in order to protect my savings and investment from being depleted by devaluation and inflation that’s at an all-time high in Nigeria.",
        name: "Raye",
        avatar: Avatar2,
      },
    ],
  },
  communityData: {
    title: "Join The Rise Community",
    description:
      " If you want to go far, go together. Our Telegram community surrounds you with others who can help you along your financial journey with tips, support, advice and learning. It's completely free and open to new and seasoned investors.",
    link: "/",
    linkText: "Join our Community",
  },
  downloadAppData: {
    title: "Download The Rise App",
    subtitle: "Join our 100,000 users investing and setting long term goals!",
    description: "Dollar investments that help you grow.",
    image: AppImg,
    downloadApp: [
      {
        id: "1",
        name: "App Store",
        icon: AppStoreIcon,
        link: "/",
      },
      {
        id: "2",
        name: "Google Play",
        icon: GooglePlayIcon,
        link: "/",
      },
    ],
  },
  footer: {
    sections: [
      {
        title: null,
        logo: FooterLogo,
        pageList: [
          { id: "1", pageName: "About Us", link: "/" },
          { id: "2", pageName: "Careers", link: "/" },
          { id: "3", pageName: "FAQs", link: "/" },
          { id: "4", pageName: "Contact Info", link: "/" },
          { id: "5", pageName: "Press", link: "/" },
          { id: "6", pageName: "Rise Impact", link: "/" },
        ],
      },
      {
        title: "Explore",
        logo: null,
        pageList: [
          { id: "1", pageName: "Investment Club", link: "/" },
          { id: "2", pageName: "Blog", link: "/" },
        ],
      },
      {
        title: "Products",
        logo: null,
        pageList: [
          { id: "1", pageName: "Rise App", link: "/" },
          { id: "2", pageName: "Wallets", link: "/" },
          { id: "3", pageName: "Asset Classes", link: "/" },
        ],
      },
      {
        title: "Contact Us",
        logo: null,
        pageList: [
          { id: "1", pageName: "0818 714 7405", link: "/" },
          { id: "2", pageName: "hello@rise.capital", link: "/" },
          { id: "3", pageName: "Newsletter", link: "/" },
          { id: "4", pageName: "Instagram", link: "/" },
          { id: "5", pageName: "Twitter", link: "/" },
        ],
      },
    ],
  },
};

export default homeData;
