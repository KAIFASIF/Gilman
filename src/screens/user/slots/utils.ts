import { convertTo24Hour } from "../../../utilities/utils";
import { timeSlots } from "./data";


export const renderBookedSlots = (data: any) => {
  if (data?.length === 0) {
    return [...timeSlots]; // Return a new array containing the original timeSlots
  } else {
    return timeSlots.map((ele: any) => {
      const updatedEle = { ...ele }; // Clone the current element
      data.forEach((item: any) => {
        const { startTime, endTime } = item;
        const { time } = ele;
        const [startHour, startMinute] = startTime.split(":").map(Number);
        const [endHour, endMinute] = endTime.split(":").map(Number);
        const convertedTime = convertTo24Hour(time);
        const [convertedHour, convertedMinute] = convertedTime.split(":").map(Number);
        const totalMinutes = convertedHour * 60 + convertedMinute;
        const startTotalMinutes = startHour * 60 + startMinute;
        const endTotalMinutes = endHour * 60 + endMinute;
        if (totalMinutes >= startTotalMinutes && totalMinutes <= endTotalMinutes) {
          updatedEle.isBooked = true; // Update the isBooked property of the cloned element
        }
      });
      return updatedEle; // Return the updated element
    });
  }
};



// its updatimng the original array need to learn cloning of thge array learn uppar fuynction which did not modify oriunial; array
// export const renderBookedSlots = (data: any) => {
//   if (data?.length === 0) {
//     // console.log("length : " , data?.length)
//     console.log("ssssssssss : " ,timeSlots)
//     // alert()
//     return [...timeSlots];
//   } else {
//     return timeSlots.map((ele: any) => {
//       data.map((item: any) => {
//         const { startTime, endTime } = item;
//         const { time } = ele;
//         const [startHour, startMinute] = startTime.split(":").map(Number);
//         const [endHour, endMinute] = endTime.split(":").map(Number);
//         // const [hour, minute, modifier] = time.split(/\s|:/);
//         const convertedTime = convertTo24Hour(time);
//         const [convertedHour, convertedMinute] = convertedTime
//           .split(":")
//           .map(Number);
//         const totalMinutes = convertedHour * 60 + convertedMinute;
//         const startTotalMinutes = startHour * 60 + startMinute;
//         const endTotalMinutes = endHour * 60 + endMinute;
//         if (
//           totalMinutes >= startTotalMinutes &&
//           totalMinutes <= endTotalMinutes
//         ) {
//           ele.isBooked = true;
//         }
//       });
//       return ele;
//     });
//   }
// };
