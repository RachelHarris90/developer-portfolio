import { ArrowDown } from "../icons/ArrowDown";

export const Accordion = ({
  summaryLeft,
  summaryRight,
  details,
}: {
  summaryLeft: string;
  summaryRight: string;
  details: string;
}) => {
  return (
    <details className="group p-4 ">
      <summary className="flex justify-between font-semibold text-lg md:items-center cursor-pointer list-none p-2 flex-col md:flex-row">
        {summaryLeft}
        <div className="flex gap-4 justify-between items-center font-semibold text-lg">
          {summaryRight}
          <ArrowDown />
        </div>
      </summary>

      <div className="p-2">{details}</div>
      <span className="transition group-open:rotate-180"></span>
    </details>
  );
};
