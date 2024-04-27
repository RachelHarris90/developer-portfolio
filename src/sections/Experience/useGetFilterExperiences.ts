import { useContext } from "react";
import { DateType } from "react-tailwindcss-datepicker";
import { FiltersContext } from "../../providers/FiltersProvider";
import { ExperienceHistory } from "./Experience";

const experienceHistory: ExperienceHistory[] = [
  {
    role: "Software Engineer (current)",
    company: "Culture Amp",
    startDate: new Date("2022-07"),
    endDate: new Date(),
    details:
      "Fullstack developer, focused on building, supporting and maintaining an intuitive and seamless user experience in a green fields React/Typescript/Next.js application and a legacy (7+ year) React/Typescript application for HR professionals and employees of companies globally. While primarily focused on the frontend, I spend some time in the Ruby on Rails backend, creating new endpoints, modifying existing functionality, investigating support issues, etc. Using React Query with Fetch, styling TailwindCSS, testing with Storybook/Chromatic and Jest, observability in Datadog, Splunk and Sentry. Participating in solution design, user story writing, UX design feasibility assessments and planning in a cross-functional team, collaborating with various roles including Product Manager, UX designer, Tech Lead and other engineers.",
  },
  {
    role: "Senior Delivery Lead",
    company: "Culture Amp",
    startDate: new Date("2021-06"),
    endDate: new Date("2022-05"),
    details:
      "Responsible for the teams ways of working, delivery processes and people leadership for a team developing and improving the goals module. Focusing on individual development and supporting the growth of software developers. Working with support to prioritise and resolve support issues. Standing in for product management at times when the team was without a product manager.",
  },
  {
    role: "Founder & Director",
    company: "Hill Top Pizzeria & Takeaway",
    startDate: new Date("2020-01"),
    endDate: new Date("2021-05"),
    details:
      "Opened and managed a hospitality business with a diverse menu, that became a thriving business through COVID. Responsible for the finances, operations, hiring, people management, supplier negotiations, marketing and systems.",
  },
  {
    role: "Founder & Director",
    company: "Lara Coffee Co.",
    startDate: new Date("2018-09"),
    endDate: new Date("2021-05"),
    details:
      "Built and ran a multi-format coffee business, with a coffee trailer that doubled as a food truck, and a coffee bar. Responsible for the event management, finances, admin, hiring, ordering and participating in the operations.",
  },
  {
    role: "Product Manager",
    company: "MYOB",
    startDate: new Date("2019-05"),
    endDate: new Date("2019-12"),
    details:
      "Leading multiple teams to design and build an intuitive bowser based application for accountants in accounting software. Focused on user journeys that covered complex tax and accounting areas. Conducted user interviews, co-design sessions while working closely with accountants. Coached business analysts, collaborated with other business functions to plan releases and product marketing and worked through solutions and issues with software developers.",
  },
  {
    role: "Development Lead",
    company: "MYOB",
    startDate: new Date("2017-07"),
    endDate: new Date("2019-06"),
    details:
      "Leading a team of software developers, a business analyst, quality analyst and an accountant to build browser based software for accountants in accounting practices. Participating in all parts of the discovery, design, development and release process in a “you build it, you run it” model. Represented the team in delivery and technical discussions, for the full stack from infrastructure to the UI.",
  },
  {
    role: "Senior Consultant (Product & Delivery)",
    company: "Elabor8",
    startDate: new Date("2016-07"),
    endDate: new Date("2017-07"),
    details:
      "Embedded in businesses from start-ups to large enterprises, working with teams as a product owner, iteration manager while focused on improving ways of working through continuous improvement. Interviewing customers and performing contextual inquiries to understand user needs. Building product roadmaps, a backlog with clear and deliverable user stories, while coaching others.",
  },
  {
    role: "Delivery Manager - ERP",
    company: "Metcash",
    startDate: new Date("2015-11"),
    endDate: new Date("2016-06"),
    details:
      "Scrum master for all development teams and release manager for several systems, with eight business analysts and a varied number of software developers reporting to me.",
  },
  {
    role: "Operations Manager - ERP",
    company: "Metcash",
    startDate: new Date("2015-01"),
    endDate: new Date("2015-11"),
    details:
      "Managing a team of business analysts and software developers with a goal of resolving existing support issues and reducing the rate of new issues. Regular collaboration with the development team releasing new features, as well as setting expectations with business units experience system issues.",
  },
  {
    role: "Delivery Team Leader - ERP",
    company: "Metcash",
    startDate: new Date("2014-05"),
    endDate: new Date("2014-11"),
    details:
      "Leading a team of business analysts to understand the business requirements across multiple projects and locations. Management of support for our area, and collaborating with other business units to manage the priorities of the teams work.",
  },
  {
    role: "Business Analyst",
    company: "Metcash",
    startDate: new Date("2011-01"),
    endDate: new Date("2014-03"),
    details:
      "Ownership of several product domains, working with users to understand their user journeys and business rules. Liaising on a daily basis with software developers to communicate requirements and provide guidance where needed. Responsible for the data conversion from the legacy platform to the new system.",
  },
];

export const useGetFilterExperiences = ({
  companyFilter,
  startDateFilter,
  endDateFilter,
}: {
  companyFilter: string | undefined;
  startDateFilter: DateType | null | undefined;
  endDateFilter: DateType | null | undefined;
}) => {
  return experienceHistory.filter((experience) => {
    if (companyFilter && experience.company !== companyFilter) {
      return false;
    }

    if (startDateFilter && endDateFilter) {
      return (
        (experience.startDate <= endDateFilter &&
          experience.endDate >= startDateFilter) ||
        (experience.endDate >= startDateFilter &&
          experience.startDate <= endDateFilter)
      );
    } else if (startDateFilter) {
      return experience.endDate >= startDateFilter;
    } else if (endDateFilter) {
      return experience.startDate <= endDateFilter;
    }

    return true;
  });
};
