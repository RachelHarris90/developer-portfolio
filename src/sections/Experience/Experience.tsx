import { useContext, useMemo } from "react";
import { DateType } from "react-tailwindcss-datepicker";
import { Card } from "../../commonComponents/Card";
import { CompanyFilter } from "../../components/CompanyFilter";
import { DateFilter } from "../../components/DateFilter";
import { ExperienceItem } from "../../components/ExperienceItem";
import { FiltersContext } from "../../providers/FiltersProvider";
import { FilterBar } from "./FilterBar";
import emptyStateImage from "./emptyState.png";
import { useGetFilterExperiences } from "./useGetFilterExperiences";

export type ExperienceHistory = {
  role: string;
  company: string;
  startDate: Date;
  endDate: Date;
  details: string;
};

export const Experience = () => {
  const { filters } = useContext(FiltersContext);

  const filteredExperiences = useGetFilterExperiences({
    companyFilter: filters.company,
    startDateFilter: filters.dateRange.startDate,
    endDateFilter: filters.dateRange.endDate,
  });

  if (filteredExperiences.length === 0) {
    return (
      <>
        <h1 className="text-3xl pb-4 font-bold">experience.</h1>
        <FilterBar>
          <CompanyFilter
            items={filteredExperiences.map((experience) => experience.company)}
          />
          <DateFilter />
        </FilterBar>

        <Card>
          <div className="flex flex-row">
            <img src={emptyStateImage} className="hidden md:flex w-1/2" />
            <h3 className="items-center flex text-xl">
              Oops! We couldn't find any experience that fit within the filters
              you selected
            </h3>
          </div>
        </Card>
      </>
    );
  }

  return (
    <>
      <h1 className="text-3xl pb-4 font-bold">experience.</h1>
      <FilterBar>
        <CompanyFilter
          items={filteredExperiences.map((experience) => experience.company)}
        />
        <DateFilter />
      </FilterBar>

      <Card>
        <div className="space-y-2 divide-y-[1px] divide-slate-300">
          {filteredExperiences.map((experience, i) => (
            <ExperienceItem
              key={i}
              role={experience.role}
              company={experience.company}
              startDate={experience.startDate}
              endDate={experience.endDate}
              details={experience.details}
            />
          ))}
        </div>
      </Card>
    </>
  );
};
