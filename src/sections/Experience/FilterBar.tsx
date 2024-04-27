import { ReactNode } from "react";

export const FilterBar = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-white shadow-lg p-4 rounded-lg mb-4 flex flex-col md:flex-row gap-2">
      {children}
    </div>
  );
};
