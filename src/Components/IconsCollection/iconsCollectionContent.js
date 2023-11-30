import { FaQuestion } from "react-icons/fa";
import {
  MdOutlineFaceRetouchingNatural,
  MdOutlineLocalOffer,
} from "react-icons/md";
import { LiaGiftsSolid } from "react-icons/lia";
import { AiOutlineQuestion } from "react-icons/ai";
import { BsQuestionLg } from "react-icons/bs";
export const iconsCollectionContent = [
  {
    icon: (
      <MdOutlineLocalOffer
        className={`text-3xl lg:text-[5rem] text-[#91713E]`}
      />
    ),
    title: "Offers & Discounts",
    path: "/extra_1",
  },
  {
    icon: (
      <MdOutlineFaceRetouchingNatural
        className={`text-3xl lg:text-[5rem] text-[#FDDCB4]`}
      />
    ),
    title: "Tips For More Beautiful Hair",
    path: "/extra_4",
  },
  {
    icon: <LiaGiftsSolid className={`text-3xl lg:text-[5rem] text-pink-200`} />,
    title: "Packages",
    path: "/products/Packages",
  },
  {
    icon: (
      <BsQuestionLg
        className={`font-thin text-3xl lg:text-[5rem] text-[#899F4A]`}
      />
    ),
    title: "FAQ",
    path: "/extra_2",
  },
];
