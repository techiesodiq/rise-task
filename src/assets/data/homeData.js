import FixedIncome from "../images/fixed-income.svg";
import FooterLogo from "../images/footer-logo.svg";
import RealEstateIcon from "../images/real-estate.svg";
import ServiceImg1 from "../images/service1.svg";
import ServiceImg2 from "../images/service2.svg";
import ServiceImg3 from "../images/service3.svg";
import ServiceImg4 from "../images/service4.svg";
import StocksIcon from "../images/stocks.svg";
import Avatar1 from "../images/testimonialImage1.svg";
import Avatar2 from "../images/testimonialImage2.svg";

const homeData = {
  services: [
    {
      id: "1",
      title: "Invest your money in dollars",
      description:
        "By holding your investments in a stable currency, your money grows more over time and retains its value better.",
      linkText: "Start Investing Now",
      image: ServiceImg1,
    },
    {
      id: "2",
      title: "Choose what's best for you",
      description:
        "Unlike other platforms, Rise lets you pick between stocks, US real estate and fixed income, according to your risk appetite. That way you can spread your risk and tap into different investments all in one place. ",
      linkText: "Start Investing Now",
      image: ServiceImg2,
    },
    {
      id: "3",
      title: "Set goals and reach them",
      description:
        "You can invest towards a goal on Rise--retirement, higher education, save for your home or travel budgets. Or create a goal of your own and invest periodically to achieve them. ",
      linkText: "Start Investing Now",
      image: ServiceImg3,
    },
    {
      id: "4",
      title: "We remember so you dont have to",
      description:
        "Our Auto-invest feature makes it easy to stay consistent, even when you forget. Set a funding amount, frequency and payment method and Rise will automatically fund your investment, on schedule.",
      linkText: "Start Investing Now",
      image: ServiceImg4,
    },
  ],

  assetClasses: [
    {
      id: "1",
      title: "Stocks",
      bgColor: "#FFF4F0",
      description:
        "We help you invest and manage your money by investing in our portfolio of 30 high-growth stocks across the US market with our equity portfolio of power stocks.",
      historicalReturns: "14% per annum",
      riskLevel: "Medium",
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
      linkText: "Learn how Fixed Income works",
      iconImage: FixedIncome,
    },
  ],
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
  footer: {
    pages: {
      logo: FooterLogo,
      pageList: [
        {
          id: "1",
          pageName: "About Us",
        },
        {
          id: "2",
          pageName: "Careers",
        },
        {
          id: "1",
          pageName: "FAQs",
        },
        {
          id: "1",
          pageName: "Contact Info",
        },
        {
          id: "1",
          pageName: "Press",
        },
        {
          id: "1",
          pageName: "Rise Impact",
        },
      ],
    },
    explore: {
      title: "Explore",
      pageList: [
        {
          id: "1",
          pageName: "Investment Club",
        },
        {
          id: "2",
          pageName: "Blog",
        },
      ],
    },
    products: {
      title: "Products",
      pageList: [
        {
          id: "1",
          pageName: "Rise App",
        },
        {
          id: "2",
          pageName: "Wallets",
        },
        {
          id: "3",
          pageName: "Asset Classes",
        },
      ],
    },
    contact: {
      title: "Contact Us",
      pageList: [
        {
          id: "1",
          pageName: "0818 714 7405",
        },
        {
          id: "2",
          pageName: "hello@rise.capital",
        },
        {
          id: "3",
          pageName: "Newsletter",
        },
        {
          id: "4",
          pageName: "Instagram",
        },
        {
          id: "5",
          pageName: "Twitter",
        },
      ],
    },
  },
};

export default homeData;
