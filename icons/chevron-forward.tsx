import React from "react";
import Svg, { Path } from "react-native-svg";
import { VezaIconProps } from "..";

const icon: React.FC<VezaIconProps> = ({ size = 24, color = "#5B28E5" }) => {
    return (<Svg width={size} height={size} viewBox="0 0 24 24" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M7.8295 4.4545C7.39017 4.89384 7.39017 5.60616 7.8295 6.0455L13.784 12L7.8295 17.9545C7.39017 18.3938 7.39017 19.1062 7.8295 19.5455C8.26884 19.9848 8.98116 19.9848 9.4205 19.5455L16.1705 12.7955C16.6098 12.3562 16.6098 11.6438 16.1705 11.2045L9.4205 4.4545C8.98116 4.01517 8.26884 4.01517 7.8295 4.4545Z" fill={color}/>
</Svg>
);
  };
  
export default icon;