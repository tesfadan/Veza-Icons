import React from "react";
import ArrowBackward from "./icons/ArrowBackward";
import ArrowForward from "./icons/ArrowForward";
import Checkmark from "./icons/Checkmark";
import CheckmarkFilled from "./icons/CheckmarkFilled";
import CheckmarkOutline from "./icons/CheckmarkOutline";
import Close from "./icons/Close";
import CloseFilled from "./icons/CloseFilled";
import NavigateCircle from "./icons/NavigateCircle";
import PersonAdd from "./icons/PersonAdd";
import Rider from "./icons/Rider";

export interface VezaIconProps {
  size?: number;
  color?: string;
}

type VezaIcons =  VezaIconProps & {
    name: "navigate-circle" | "arrow-forward" | "arrow-backward" | "rider" | "person-add" | "close-filled" | "close" | "checkmark" | "checkmark-filled" | "checkmark-outline"
}

const VezaIcons = ({ name, size, color } : VezaIcons) => {
     switch (name) {
      case 'navigate-circle':
        return <NavigateCircle size={size} color={color} />;
      case 'arrow-forward':
        return <ArrowForward size={size} color={color} />
    case 'arrow-backward':
        return <ArrowBackward size={size} color={color} />
    case 'rider':
        return <Rider size={size} color={color} />
    case 'person-add':
        return <PersonAdd size={size} color={color} />
    case 'close-filled':
        return <CloseFilled size={size} color={color} />
    case 'close':
        return <Close size={size} color={color} />
    case 'checkmark':
        return <Checkmark size={size} color={color} />
    case 'checkmark-filled':
        return <CheckmarkFilled size={size} color={color} />
    case 'checkmark-outline':
        return <CheckmarkOutline size={size} color={color} />
      default:
        return <NavigateCircle size={size} color={color} />;
    }
};

export default VezaIcons;