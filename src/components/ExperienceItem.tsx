import { Accordion } from "../commonComponents/Accordion";

export const ExperienceItem = ({
  role,
  company,
  startDate,
  endDate,
  details,
}: {
  role: string;
  company: string;
  startDate: Date;
  endDate: Date | null;
  details: string;
}) => {
  const formattedStartDate = `${startDate?.toLocaleString("default", { month: "long" })}, ${startDate?.getFullYear()}`;
  const formattedEndDate = endDate
    ? `${endDate?.toLocaleString("default", { month: "long" })}, ${endDate?.getFullYear()}`
    : "Current";

  const summaryLeft = `${role} at ${company} `;
  const summaryRight = `${formattedStartDate} to ${formattedEndDate}`;

  return (
    <Accordion
      summaryLeft={summaryLeft}
      summaryRight={summaryRight}
      details={details}
    />
  );
};
