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
  { id: 3, label: "07:00 am", value: "07:00 am" },
  { id: 4, label: "07:30 am", value: "07:30 am" },
  { id: 5, label: "08:00 am", value: "08:00 am" },
  { id: 6, label: "08:30 am", value: "08:30 am" },
  { id: 7, label: "09:00 am", value: "09:00 am" },
  { id: 8, label: "09:30 am", value: "09:30 am" },
  { id: 9, label: "10:00 am", value: "10:00 am" },
  { id: 10, label: "10:30 am", value: "10:30 am" },
  { id: 11, label: "11:00 am", value: "11:00 am" },
  { id: 12, label: "11:30 am", value: "11:30 am" },
  { id: 13, label: "12:00 pm", value: "12:00 pm" },
  { id: 14, label: "12:30 pm", value: "12:30 pm" },
  { id: 15, label: "01:00 pm", value: "01:00 pm" },
  { id: 16, label: "01:30 pm", value: "01:30 pm" },

  { id: 17, label: "02:00 pm", value: "02:00 pm" },
  { id: 18, label: "02:30 pm", value: "02:30 pm" },
  { id: 19, label: "03:00 pm", value: "03:00 pm" },
  { id: 20, label: "03:30 pm", value: "03:30 pm" },
  { id: 21, label: "04:00 pm", value: "04:00 pm" },
  { id: 22, label: "04:30 pm", value: "04:30 pm" },
  { id: 23, label: "05:00 pm", value: "05:00 pm" },
  { id: 24, label: "05:30 pm", value: "05:30 pm" },
  { id: 25, label: "06:00 pm", value: "06:00 pm" },
  { id: 26, label: "06:30 pm", value: "06:30 pm" },

  { id: 27, label: "07:00 pm", value: "07:00 pm" },
  { id: 28, label: "07:30 pm", value: "07:30 pm" },
  { id: 29, label: "08:00 pm", value: "08:00 pm" },
  { id: 30, label: "08:30 pm", value: "08:30 pm" },
  { id: 31, label: "09:00 pm", value: "09:00 pm" },
  { id: 32, label: "09:30 pm", value: "09:30 pm" },
  { id: 33, label: "10:00 pm", value: "10:00 pm" },
  { id: 34, label: "10:30 pm", value: "10:30 pm" },
  
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



