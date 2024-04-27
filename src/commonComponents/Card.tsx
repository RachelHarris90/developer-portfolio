import { ReactNode } from "react";

export const Card = ({ children }: { children: ReactNode }) => {
  return <div className="shadow-lg rounded-xl bg-white p-4">{children}</div>;
};
