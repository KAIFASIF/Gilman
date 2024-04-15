export const toTitleCase = (str: string) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const splitWord = (str: string) => {
  return str.split(/(?=[A-Z])/).join(" ");
};

export const splitAndTitleCase = (str: string) => {
  const splittedWord = str.split(/(?=[A-Z])/).join(" ");
  return toTitleCase(splittedWord);
};

export const isValidTime24 = (time: string) => {
  const regex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
  return regex.test(time);
};

export const convertTo24Hour = (time12h: any) => {
  const [time, modifier] = time12h.split(" ");
  let [hours, minutes] = time.split(":");
  if (hours === "12") {
    hours = "00";
  }
  if (modifier === "pm") {
    hours = parseInt(hours, 10) + 12;
  }
  return `${hours}:${minutes}`;
};

export const changeDateFormat = (dateString: string) => {
  const parts = dateString.split("-");
  const mm = parts[1];
  const dd = parts[2];
  const yyyy = parts[0];

  return dd + "-" + mm + "-" + yyyy;
};

export const todaysDate = (): string => {
  const dateNow = new Date(); // Creating a new date object with the current date and time
  const year = dateNow.getFullYear(); // Getting current year from the created Date object
  const monthWithOffset = dateNow.getMonth() + 1; // Get current month in local timezone
  const month = monthWithOffset.toString().padStart(2, "0"); // Pad month with leading zero if needed
  const date = dateNow.getDate().toString().padStart(2, "0"); // Get current date in local timezone and pad with leading zero if needed

  return `${year}-${month}-${date}`;
};

export const handleToastMessage = (
  setMessage: any,
  setSeverity: any,
  setOpen: any,
  message: any,
  severity: any,
  open: any
) => {
  setMessage(message);
  setSeverity(severity);
  setOpen(open);
};

export const todaysCurrentTime = () => {
  const currentTime = new Date();
  const options: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata",
  };

  return currentTime.toLocaleTimeString("en-IN", options);
};
