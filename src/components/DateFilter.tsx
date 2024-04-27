import { useContext, useState } from "react";
import { FiltersContext } from "../providers/FiltersProvider";
import Datepicker, { DateValueType } from "react-tailwindcss-datepicker";
import { ArrowDown } from "../icons/ArrowDown";
import { CrossIcon } from "../icons/Cross";

export const DateFilter = () => {
  const { filters, setFilters } = useContext(FiltersContext);

  console.log(filters);

  const [selectedDateRange, setSelectedDateRange] = useState<DateValueType>(
    filters.dateRange,
  );

  const handleValueChange = (newValue: DateValueType) => {
    setSelectedDateRange(newValue);
    setFilters({
      ...filters,
      dateRange: {
        startDate: newValue?.startDate ? new Date(newValue.startDate) : null,
        endDate: newValue?.endDate ? new Date(newValue.endDate) : null,
      },
    });
  };

  return (
    <div className="relative inline-block bg-rachel-light rounded">
      <Datepicker
        value={selectedDateRange}
        onChange={(newValue) => handleValueChange(newValue)}
        placeholder={"Date"}
        showShortcuts={true}
        displayFormat={"MM/YYYY"}
        primaryColor={"rose"}
        separator={"to"}
        inputClassName="rounded p-2 text-xl placeholder-rachel-dark space-x-4 py-3 px-4 items-center justify-between text-left bg-rachel-light border-none"
        toggleIcon={() => (selectedDateRange ? <CrossIcon /> : <ArrowDown />)}
      />
    </div>
  );
};
