import React from "react";
import Svg, { Path } from "react-native-svg";
import { VezaIconProps } from "..";

const Checkmark: React.FC<VezaIconProps> = ({ size = 24, color = "#5B28E5" }) => {
return (<Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fill-rule="evenodd" clip-rule="evenodd" d="M19.2913 5.92955C19.7277 6.31141 19.772 6.97476 19.3901 7.41118L10.1501 17.9712C9.95874 18.1899 9.68529 18.3195 9.39484 18.3292C9.10439 18.3388 8.82293 18.2277 8.61744 18.0222L4.65744 14.0622C4.24739 13.6522 4.24739 12.9873 4.65744 12.5773C5.06749 12.1672 5.73231 12.1672 6.14236 12.5773L9.30875 15.7437L17.8097 6.02832C18.1916 5.5919 18.8549 5.54768 19.2913 5.92955Z" fill={color}/>
</Svg>
);
};

export default Checkmark;