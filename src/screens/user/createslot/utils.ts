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

export const isUserLoggedin = (auth: any, setIsModalOpen: any) => {
  if (!auth?.isLoggedin) {
    setIsModalOpen(true);
    return false;
  }
  return true;
};



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
  const startTime = convertTo24Hour(time);
  const [startHour, startMinute] = startTime.split(":").map(Number);
  const totalStartMinutes = startHour * 60 + startMinute;

  const totalEndMinutes = totalStartMinutes + duration * 60;
  const endHour = Math.floor(totalEndMinutes / 60);
  const endMinute = totalEndMinutes % 60;

  const formattedEndHour = endHour < 10 ? `0${endHour}` : `${endHour}`;
  const formattedEndMinute = endMinute < 10 ? `0${endMinute}` : `${endMinute}`;

  return `${formattedEndHour}:${formattedEndMinute}`;
};



