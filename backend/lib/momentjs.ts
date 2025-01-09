import moment from "moment";

const normalizeDate = (dateInput: string | number): Date | null => {
  // Handle timestamps
  if (typeof dateInput === "number" || /^\d+$/.test(dateInput)) {
    const timestampDate = moment(Number(dateInput));
    if (timestampDate.isValid()) {
      return timestampDate.toDate(); // Return as Date object
    }
  }

  // Handle other common date formats
  const formats = [
    "YYYY-MM-DD",
    "MM/DD/YYYY",
    "DD/MM/YYYY",
    "YYYY/MM/DD",
    "MM-DD-YYYY",
    "DD-MM-YYYY",
  ];

  const momentDate = moment(dateInput, formats, true); // `true` ensures strict parsing
  if (momentDate.isValid()) {
    return momentDate.toDate(); // Return as Date object
  }

  return null; // Return null if the date is invalid
};

export { normalizeDate };
