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

export const timeSlots: any = [
  { id: 1, isBooked: false, time: "06:00 am" },
  { id: 2, isBooked: false, time: "06:30 am" },
  { id: 3, isBooked: false, time: "07:00 am" },
  { id: 4, isBooked: false, time: "07:30 am" },
  { id: 5, isBooked: false, time: "08:00 am" },
  { id: 6, isBooked: false, time: "08:30 am" },
  { id: 7, isBooked: false, time: "09:00 am" },
  { id: 8, isBooked: false, time: "09:30 am" },
  { id: 9, isBooked: false, time: "10:00 am" },
  { id: 10, isBooked: false, time: "10:30 am" },
  { id: 11, isBooked: false, time: "11:00 am" },
  { id: 12, isBooked: false, time: "11:30 am" },
  { id: 13, isBooked: false, time: "12:00 pm" },
  { id: 14, isBooked: false, time: "12:30 pm" },
  { id: 15, isBooked: false, time: "01:00 pm" },
  { id: 16, isBooked: false, time: "01:30 pm" },
  { id: 17, isBooked: false, time: "02:00 pm" },
  { id: 18, isBooked: false, time: "02:30 pm" },
  { id: 19, isBooked: false, time: "03:00 pm" },
  { id: 20, isBooked: false, time: "03:30 pm" },
  { id: 21, isBooked: false, time: "04:00 pm" },
  { id: 22, isBooked: false, time: "04:30 pm" },
  { id: 23, isBooked: false, time: "05:00 pm" },
  { id: 24, isBooked: false, time: "05:30 pm" },
  { id: 25, isBooked: false, time: "06:00 pm" },
  { id: 26, isBooked: false, time: "06:30 pm" },
  { id: 27, isBooked: false, time: "07:00 pm" },
  { id: 28, isBooked: false, time: "07:30 pm" },
  { id: 29, isBooked: false, time: "08:00 pm" },
  { id: 30, isBooked: false, time: "08:30 pm" },
  { id: 31, isBooked: false, time: "09:00 pm" },
  { id: 32, isBooked: false, time: "09:30 pm" },
  { id: 33, isBooked: false, time: "10:00 pm" },
  { id: 34, isBooked: false, time: "10:30 pm" },
  { id: 35, isBooked: false, time: "11:00 pm" },
];

export const sportsOption: any = [
  { id: 1, label: "Box cricket", value: "boxCricket" },
  { id: 2, label: "Foot ball", value: "footBall" },
];

export const timeOptions: any = [
  { id: 1, label: "06:00 am", value: "06:00 am" },
  { id: 2, label: "06:30 am", value: "06:30 am" },
  { id: 3, label: "06:30 pm", value: "06:30 pm" },
  { id: 4, label: "02:00 pm", value: "02:00 pm" },
  { id: 5, label: "03:00 pm", value: "03:00 pm" },
  { id: 7, label: "03:30 pm", value: "03:30 pm" },
  { id: 6, label: "04:00 pm", value: "04:00 pm" },
];

export const calculateEndTime = (time: string, duration: number) => {
  // Split the start time into hours and minutes
  const startTime = convertTo24Hour(time);
  const [startHour, startMinute] = startTime.split(":").map(Number);

  // Calculate the total minutes of the start time
  const totalStartMinutes = startHour * 60 + startMinute;

  // Calculate the total minutes of the end time
  const totalEndMinutes = totalStartMinutes + duration * 60;

  // Calculate the end time hours and minutes
  const endHour = Math.floor(totalEndMinutes / 60);
  const endMinute = totalEndMinutes % 60;

  // Format the end time
  const formattedEndHour = endHour < 10 ? `0${endHour}` : `${endHour}`;
  const formattedEndMinute = endMinute < 10 ? `0${endMinute}` : `${endMinute}`;

  return `${formattedEndHour}:${formattedEndMinute}`;
};

export const changeDateFormat = (dateString: string) => {
  const parts = dateString.split("-");
  const mm = parts[1];
  const dd = parts[2];
  const yyyy = parts[0];

  return dd + "-" + mm + "-" + yyyy;
};


const dateNow = new Date(); // Creating a new date object with the current date and time
const year = dateNow.getFullYear(); // Getting current year from the created Date object
const monthWithOffset = dateNow.getUTCMonth() + 1; // January is 0 by default in JS. Offsetting +1 to fix date for calendar.
const month = // Setting current Month number from current Date object
  monthWithOffset.toString().length < 2 // Checking if month is < 10 and pre-prending 0 if not to adjust for date input.
    ? `0${monthWithOffset}`
    : monthWithOffset;
const date =
  dateNow.getUTCDate().toString().length < 2 // Checking if date is < 10 and pre-prending 0 if not to adjust for date input.
    ? `0${dateNow.getUTCDate()}`
    : dateNow.getUTCDate();

const materialDateInput = `${year}-${month}-${date}`;