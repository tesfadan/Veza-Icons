import React from "react";
import Svg, { Path } from "react-native-svg";
import { VezaIconProps } from "..";

const icon: React.FC<VezaIconProps> = ({ size = 24, color = "#5B28E5" }) => {
    return (<Svg width={size} height={size} viewBox="0 0 24 24" fill="none" >
<Path  fillRule="evenodd" clipRule="evenodd" d="M2.25 12C2.25 6.61704 6.61704 2.25 12 2.25C17.383 2.25 21.75 6.61704 21.75 12C21.75 17.383 17.383 21.75 12 21.75C6.61704 21.75 2.25 17.383 2.25 12ZM12 3.75C7.44546 3.75 3.75 7.44546 3.75 12C3.75 16.5545 7.44546 20.25 12 20.25C16.5545 20.25 20.25 16.5545 20.25 12C20.25 7.44546 16.5545 3.75 12 3.75Z" fill={color}/>
<Path  fillRule="evenodd" clipRule="evenodd" d="M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V12H16.5C16.9142 12 17.25 12.3358 17.25 12.75C17.25 13.1642 16.9142 13.5 16.5 13.5H12C11.5858 13.5 11.25 13.1642 11.25 12.75V6C11.25 5.58579 11.5858 5.25 12 5.25Z" fill={color}/>
</Svg>
);
  };
  
export default icon;