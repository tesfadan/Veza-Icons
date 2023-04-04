import React from "react";
import {  Accessibility,
    Add,
    Alert,
    AlertFilled,
    ArrowForward,
    ArrowBackward,
    Bus,
    BusStop,
    Call,
    CaretDown,
    CaretUp,
    Chat, 
    CheckboxFilled,
    CheckboxOutline,
    Checkmark,
    CheckmarkDouble,
    CheckmarkFilled,
    CheckmarkOutline,
    ChevronBack,
    ChevronDown,
    ChevronForward,
    ChevronUp,
    Clipboard,
    Close,
    CloseFilled,
    DocumentTextOutline,
    Eye,
    GitBranch,
    GitCommit,
    GitPullRequest,
    Loading,
    LockClosed,
    NavigateCircle,
    NurseHat,
    Options,
    Pencil,
    People,
    PersonAdd,
    PersonFilled,
    RadioButtonOff,
    RadioButtonOn,
    Rider,
    Search,
    StarOfLife,
    SteeringWheel,
    Time } from "./icons";


export interface VezaIconProps {
  size?: number;
  color?: string;
}

type VezaIcons =  VezaIconProps & {
    name: "accessibility" | "add" | "alert" | "alert-filled" | "arrow-backward" | "arrow-forward" | "bus" | "bus-stop" | "call" | "caret-down" | "caret-up" | "chat" | "checkbox-filled" | "checkbox-outline" | "checkmark" | "checkmark-double" | "checkmark-filled" | "checkmark-outline" | "chevron-back" | "chevron-down" | "chevron-forward" | "chevron-up" | "clipboard" | "close" | "close-filled" | "document-text-outline" | "eye" | "git-branch" | "git-commit" | "git-pull-request" | "loading" | "lock-closed" | "navigate-circle" | "nurse-hat" | "options" | "pencil" | "people" | "person-add" | "person-filled" | "radio-button-off" | "radio-button-on" | "rider" | "search" | "star-of-life" | "steering-wheel" | "time"
}

const VezaIcons = ({ name, size, color } : VezaIcons) => {
     switch (name) {
        case 'accessibility':
            return <Accessibility size={size} color={color} />;
        case 'add':
            return <Add size={size} color={color} />;
        case 'alert':
            return <Alert size={size} color={color} />;
        case 'alert-filled':
            return <AlertFilled size={size} color={color} />;
        case 'arrow-forward':
            return <ArrowForward size={size} color={color} />;
        case 'arrow-backward':
            return <ArrowBackward size={size} color={color} />;
        case 'bus':
            return <Bus size={size} color={color} />;
        case 'bus-stop':
            return <BusStop size={size} color={color} />;
        case 'call':
            return <Call size={size} color={color} />;
        case 'caret-down':
            return <CaretDown size={size} color={color} />;
        case 'caret-up':
            return <CaretUp size={size} color={color} />;
        case 'chat':
            return <Chat size={size} color={color} />;
        case 'checkbox-filled':
            return <CheckboxFilled size={size} color={color} />;
        case 'checkbox-outline':
            return <CheckboxOutline size={size} color={color} />;
        case 'checkmark':
            return <Checkmark size={size} color={color} />;
        case 'checkmark-double':
            return <CheckmarkDouble size={size} color={color} />;
        case 'checkmark-filled':
            return <CheckmarkFilled size={size} color={color} />;
        case 'checkmark-outline':
            return <CheckmarkOutline size={size} color={color} />;
        case 'chevron-back':
            return <ChevronBack size={size} color={color} />;
        case 'chevron-down':
            return <ChevronDown size={size} color={color} />;
        case 'chevron-forward':
            return <ChevronForward size={size} color={color} />;
        case 'chevron-up':
            return <ChevronUp size={size} color={color} />;
        case 'clipboard':
            return <Clipboard size={size} color={color} />;
        case 'close':
            return <Close size={size} color={color} />;
        case 'close-filled':
            return <CloseFilled size={size} color={color} />;
        case 'document-text-outline':
            return <DocumentTextOutline size={size} color={color} />;
        case 'eye':
            return <Eye size={size} color={color} />;
        case 'git-branch':
            return <GitBranch size={size} color={color} />;
        case 'git-commit':
            return <GitCommit size={size} color={color} />;
        case 'git-pull-request':
            return <GitPullRequest size={size} color={color} />;
        case 'loading':
            return <Loading size={size} color={color} />;
        case 'lock-closed':
            return <LockClosed size={size} color={color} />;
        case 'navigate-circle':
            return <NavigateCircle size={size} color={color} />;
        case 'nurse-hat':
            return <NurseHat size={size} color={color} />;
        case 'options':
            return <Options size={size} color={color} />;
        case 'pencil':
            return <Pencil size={size} color={color} />;
        case 'people':
            return <People size={size} color={color} />;
        case 'person-add':
            return <PersonAdd size={size} color={color} />;
        case 'person-filled':
            return <PersonFilled size={size} color={color} />;
        case 'radio-button-off':
            return <RadioButtonOff size={size} color={color} />;
        case 'radio-button-on':
            return <RadioButtonOn size={size} color={color} />;
        case 'rider':
            return <Rider size={size} color={color} />;
        case 'search':
            return <Search size={size} color={color} />;
        case 'star-of-life':
            return <StarOfLife size={size} color={color} />;
        case 'steering-wheel':
            return <SteeringWheel size={size} color={color} />;
        case 'time':
            return <Time size={size} color={color} />;
        default:
            return <Bus size={size} color={color} />;
        }
};

export default VezaIcons;
