import { useContext } from "react";
import { FiltersContext } from "../providers/FiltersProvider";
import { ExperienceHistory } from "../sections/Experience/Experience";
import { Select } from "../commonComponents/Select/Select";

export const CompanyFilter = ({
  items,
}: {
  items: ExperienceHistory["company"][];
}) => {
  const { filters, setFilters } = useContext(FiltersContext);
  const uniqueItems = Array.from(new Set(items)).sort();

  const handleOptionSelect = (item: string | undefined) => {
    setFilters({
      ...filters,
      company: item,
    });
  };

  return (
    <Select
      key="company"
      label="Company"
      items={uniqueItems}
      selectedItem={filters.company}
      onSelect={(item) => handleOptionSelect(item)}
    />
  );
};
