import React from "react";
import Svg, { Path } from "react-native-svg";
import { VezaIconProps } from "..";

const icon: React.FC<VezaIconProps> = ({ size = 24, color = "#5B28E5" }) => {
return (<Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fillRule="evenodd" clipRule="evenodd" d="M19.2913 5.92973C19.7277 6.3116 19.7719 6.97495 19.3901 7.41137L10.1501 17.9714C9.95869 18.1901 9.68524 18.3197 9.3948 18.3294C9.10435 18.339 8.82288 18.2279 8.61739 18.0224L4.65739 14.0624C4.24734 13.6523 4.24734 12.9875 4.65739 12.5775C5.06744 12.1674 5.73227 12.1674 6.14232 12.5775L9.30871 15.7439L17.8096 6.02851C18.1915 5.59209 18.8549 5.54786 19.2913 5.92973Z" fill={color}/>
</Svg>
);
};

export default icon;