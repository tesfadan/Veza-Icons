import React from "react";
import Svg, { Path } from "react-native-svg";
import { VezaIconProps } from "..";

const icon: React.FC<VezaIconProps> = ({ size = 24, color = "#5B28E5" }) => {
    return (<Svg width={size} height={size} viewBox="0 0 24 24" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M4.4545 16.1705C4.89384 16.6098 5.60616 16.6098 6.0455 16.1705L12 10.216L17.9545 16.1705C18.3938 16.6098 19.1062 16.6098 19.5455 16.1705C19.9848 15.7312 19.9848 15.0188 19.5455 14.5795L12.7955 7.8295C12.3562 7.39017 11.6438 7.39017 11.2045 7.8295L4.4545 14.5795C4.01517 15.0188 4.01517 15.7312 4.4545 16.1705Z" fill={color}/>
</Svg>
);
  };
  
export default icon;