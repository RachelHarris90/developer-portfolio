import { createContext, Dispatch, SetStateAction, useState } from "react";
import { DateType } from "react-tailwindcss-datepicker";

type Filters = {
  company: string | undefined;
  dateRange: {
    startDate: DateType | null;
    endDate: DateType | null;
  };
};

type FiltersProvider = {
  filters: Filters;
  setFilters: Dispatch<SetStateAction<Filters | undefined>>;
};

export const FiltersContext = createContext<FiltersProvider>(
  {} as FiltersProvider,
);

export const FiltersProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [filters, setFilters] = useState<Filters>();

  return (
    <FiltersContext.Provider
      value={{
        filters: {
          company: filters?.company || undefined,
          dateRange: {
            startDate: filters?.dateRange.startDate || null,
            endDate: filters?.dateRange.endDate || null,
          },
        },
        setFilters: setFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};
