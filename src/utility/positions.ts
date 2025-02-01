import approvalMax from "../assets/images/avatars/approvalMax.jpg";
import eqvanta from "../assets/images/avatars/eqvanta.jpeg";
import visier from "../assets/images/avatars/visier.jpg";
import yva from "../assets/images/avatars/yva.jpg";
import sberbank from "../assets/images/avatars/sberbank.jpg";
import hermes from "../assets/images/avatars/hermes.jpg";
import pickpoint from "../assets/images/avatars/pickpoint.jpg";

export type Position = {
    logoUrl: string;
    companyUrl: string;
    title: string;
    company: string;
    desription: string;
    location: string;
    period: string;
    periodShort: string;
    responsibilities: string[];
  };
  
  export const positions: Position[] = [
    {
      logoUrl: eqvanta,
      companyUrl: "http://eqvanta.com/",
      title: "Senior Backend Developer",
      company: "Eqvanta",
      desription: "Eqvanta is an international group of companies operating in the field of alternative finance and financial technology. The company's primary goal is to enhance the daily lives of millions of people by providing accessible financial solutions. EQVANTA.COM The group offers a range of products and services, including online lending, scoring, risk management, and investments. Additionally, Eqvanta invests in promising startups within the financial technology sector. TADVISER.COM.Headquartered in Moscow, Russia, Eqvanta employs between 1,000 to 5,000 individuals. The company's annual revenue is estimated to be less than $1 million. ",
      location: "Moscow City, Russia · Remote",
      period: "Feb 2024 - Present",
      periodShort: "Feb 2024 - Present",
      responsibilities: [
        "Developed and maintained backend services for financial platforms, ensuring high performance and reliability.",
        "Implemented integrations with third-party APIs to enhance functionality and streamline financial operations.",
        "Designed and deployed solutions for automating financial processes, reducing manual intervention and improving accuracy.",
        "Collaborated with product and security teams to implement robust fraud prevention mechanisms.",
        "Optimized backend systems to handle large-scale transaction processing, improving system efficiency and reducing latency.",
        "Worked on the development of services for financial data exchange, ensuring compliance with regulatory requirements.",
        "Participated in the design and implementation of scalable solutions to support the company's growing user base."
      ],
    },
    {
      logoUrl: approvalMax,
      companyUrl: "https://www.approvalmax.com/",
      title: "Senior Backend Developer",
      company: "ApprovalMax LLC",
      desription:
        "ApprovalMax is a cloud-based financial workflow automation software that helps businesses streamline their approval processes for financial documents such as invoices, purchase orders, and bills. It integrates seamlessly with accounting platforms like Xero and QuickBooks Online, enabling multi-step and multi-role approval workflows, fraud prevention, and compliance enforcement. The company focuses on enhancing financial control, reducing manual errors, and improving efficiency for businesses by digitizing approval processes. ApprovalMax is widely used by finance teams, accountants, and CFOs to ensure secure and structured authorization of financial transactions.",
      location: "London, England, United Kingdom · Remote",
      period: "Jun 2023 - Sep 2023",
      periodShort: "Jun 2023 - Sep 2023",
      responsibilities: [
        "Actively participated in the development of services facilitating the exchange of financial documents via the Xero accounting platform, ensuring seamless integration and data accuracy.",
        "Designed and developed services to automate tax deduction calculations in compliance with the CIS (Construction Industry Scheme) system for UK-based clients, reducing manual errors by 25%.",
        "Integrated with the Airwallex API to enable online payments with automatic currency conversion, improving payment processing efficiency by 30%.",
        "Collaborated with cross-functional teams to implement fraud detection mechanisms, enhancing the security of financial transactions.",
        "Optimized backend services to handle high transaction volumes, reducing latency by 15%.",
      ],
    },
    {
      logoUrl: visier,
      companyUrl: "https://www.visier.com/",
      title: "Staff Software Engineer",
      company: "Visier Inc.",
      desription:
        "Visier Inc. is a leading provider of people analytics and workforce intelligence solutions. Founded in 2010 and headquartered in Vancouver, Canada, Visier specializes in HR analytics, helping organizations unlock insights from their workforce data to make better strategic decisions. The company's cloud-based platform enables businesses to analyze employee performance, engagement, retention, diversity, compensation, and workforce planning. Visier serves global enterprises, including Fortune 500 companies, by integrating data from multiple HR systems to provide real-time insights for improving talent management and business outcomes.",
      location: "Vancouver, British Columbia, Canada · Remote",
      period: "Apr 2022 - Feb 2023",
      periodShort: "Apr 2022 - Feb 2023",
      responsibilities: [
        "Developed modules for automating entity creation on new instances of a cloud-based platform, improving deployment speed in SaaS and on-prem environments by 30%.",
        "Designed and implemented high-load services for calculating Collaboration Circles between employees, achieving 90% accuracy in 360 feedback smart surveys.",
        "Participated in the development of crawler schedulers extracting and analyzing employee activity data from Office365, Jira, Slack, and Zoom, enhancing data-driven decision-making.",
        "Contributed to backend services for generating all types of reports available to customers, ensuring high performance and scalability.",
        "Optimized the logic for Smart Survey generation based on Collaboration Circles, reducing processing time by 20%.",
        "Mentored junior developers, improving team productivity and code quality.",
      ],
    },
    {
      logoUrl: yva,
      companyUrl: "https://www.linkedin.com/company/yva/",
      title: "Senior Software Engineer",
      company: "Yva.ai",
      desription:
        "Yva.ai was an AI-powered people analytics platform that specialized in employee engagement, productivity, and burnout detection. The company leveraged machine learning and natural language processing (NLP) to analyze workplace communication data from sources like email, Slack, Zoom, Office365, and Jira to provide insights into team dynamics and individual well-being. Yva.ai helped organizations identify leadership potential, predict employee attrition, and enhance collaboration by analyzing behavioral patterns. The platform was used for 360-degree feedback surveys and real-time engagement monitoring to improve workplace efficiency. The company was founded in Silicon Valley and was later acquired by Visier Inc. in 2022, integrating its AI-driven capabilities into Visier’s workforce analytics solutions.",
      location: "Santa Clara County, California, United States · Remote",
      period: "Apr 2021 - Feb 2023",
      periodShort: "Apr 2021 - Apr 2022",
      responsibilities: [
        "Developed modules for automating entity creation on new instances of a cloud-based platform, improving deployment speed in SaaS and on-prem environments by 30%.",
        "Designed and implemented high-load services for calculating Collaboration Circles between employees, achieving 90% accuracy in 360 feedback smart surveys.",
        "Participated in the development of crawler schedulers extracting and analyzing employee activity data from Office365, Jira, Slack, and Zoom, enhancing data-driven decision-making.",
        "Contributed to backend services for generating all types of reports available to customers, ensuring high performance and scalability.",
        "Optimized the logic for Smart Survey generation based on Collaboration Circles, reducing processing time by 20%.",
        "Collaborated with data scientists to integrate machine learning models into the platform, improving predictive analytics capabilities.",
      ],
    },
    {
      logoUrl: sberbank,
      companyUrl: "https://www.sberbank.com/",
      title: "Senior Software Developer",
      company: "Sberbank",
      desription:
        "Sberbank is the largest bank in Russia and Eastern Europe, offering a wide range of financial services, including retail and corporate banking, investment banking, asset management, and insurance. Founded in 1841, Sberbank has evolved into a technology-driven financial institution, investing heavily in AI, big data, and fintech solutions.",
      location: "Moscow City, Russia · On-site",
      period: "Oct 2019 - Apr 2021",
      periodShort: "Oct 2019 - Apr 2021",
      responsibilities: [
        "Developed a platform for handling insurance transactions (Health, Motor, Home, Fire, Travel Insurance), improving transaction processing speed by 40%.",
        "Designed and implemented high-load services for insurance risk calculations and payment processing between legal entities and the bank, reducing processing time by 25%.",
        "Built adapter modules for integrating new clients into the bank’s infrastructure, successfully onboarding 10+ new clients.",
        "Collaborated with the security team to implement fraud detection mechanisms, reducing fraudulent transactions by 15%.",
        "Optimized database queries and indexing, improving query performance by 30%.",
      ],
    },
    {
      logoUrl: hermes,
      companyUrl: "https://www.hermesworld.com/int/",
      title: "Software Developer",
      company: "Hermes Russia",
      desription:
        "Hermes is a leading logistics and parcel delivery company, specializing in national and international shipping solutions. Founded in 1972 in Germany, Hermes is a subsidiary of the Otto Group and operates across Europe, the UK, and Russia.",
      location: "Moscow City, Russia · On-site",
      period: "Jul 2017 - Oct 2019",
      periodShort: "Jul 2017 - Oct 2019",
      responsibilities: [
        "Developed a Delivery Module that reduced shipping costs by 30% through route optimization and load balancing.",
        "Built applications optimizing parcel shop workflows, improving processing time and doubling the client base.",
        "Designed a personal account system for small delivery companies without API capabilities, reducing costs and onboarding smaller suppliers.",
        "Implemented real-time tracking features for parcels, improving customer satisfaction by 20%.",
        "Collaborated with the QA team to improve test coverage, reducing production bugs by 25%.",
      ],
    },
    {
      logoUrl: pickpoint,
      companyUrl: "https://pickpoint.ru/",
      title: ".NET Developer",
      desription:
        "PickPoint is a logistics and parcel delivery service specializing in automated parcel lockers (postamats) and pickup points across Russia and the CIS countries. The company provides last-mile delivery solutions for e-commerce businesses, retailers, and individuals, enabling convenient and cost-effective package collection.",
      company: "PickPoint",
      location: "Moscow City, Russia · On-site",
      period: "Jun 2015 - Jul 2017",
      periodShort: "Jun 2015 - Jul 2017",
      responsibilities: [
        "Improved test coverage and UI usability, doubling system performance and reducing user errors by 20%.",
        "Developed the Store Personal Account system, improving delivery reliability by 50% through better tracking and reporting.",
        "Built the Pickup Point Personal Account system, streamlining shipment registration and label generation.",
        "Implemented automated notification systems for customers, improving delivery success rates by 15%.",
        "Collaborated with the operations team to identify and resolve bottlenecks in the delivery process, reducing delays by 20%.",
      ],
    },
  ];