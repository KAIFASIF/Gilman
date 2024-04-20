import { AiOutlineAppstore } from "react-icons/ai";
import { FiList } from "react-icons/fi";
import { MdOutlineComputer } from "react-icons/md";

type menuTypes = {
  id: number;
  title: string;
  path: string;
  icon: React.ElementType;
};

export const menus: menuTypes[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    icon: AiOutlineAppstore,
  },

  {
    id: 2,
    title: "Slots",
    path: "/slots",
    icon: MdOutlineComputer,
  },

  {
    id: 3,
    title: "Book Slot",
    path: "/book-slot",
    icon: FiList,
  },  
];