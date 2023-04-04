import React from "react";
import Svg, { Path } from "react-native-svg";
import { VezaIconProps } from "..";

const icon: React.FC<VezaIconProps> = ({ size = 24, color = "#5B28E5" }) => {
    return (<Svg width={size} height={size} viewBox="0 0 24 24" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M16.1705 19.5455C16.6098 19.1062 16.6098 18.3938 16.1705 17.9545L10.216 12L16.1705 6.0455C16.6098 5.60616 16.6098 4.89384 16.1705 4.4545C15.7312 4.01517 15.0188 4.01517 14.5795 4.4545L7.8295 11.2045C7.39017 11.6438 7.39017 12.3562 7.8295 12.7955L14.5795 19.5455C15.0188 19.9848 15.7312 19.9848 16.1705 19.5455Z" fill={color}/>
</Svg>
);
  };
  
export default icon;