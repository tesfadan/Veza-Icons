import React from "react";
import Svg, { Path } from "react-native-svg";
import { VezaIconProps } from "..";

const CheckmarkOutline: React.FC<VezaIconProps> = ({ size = 24, color = "#5B28E5" }) => {
return (<Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
<Path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 12C2.25 6.61704 6.61704 2.25 12 2.25C17.383 2.25 21.75 6.61704 21.75 12C21.75 17.383 17.383 21.75 12 21.75C6.61704 21.75 2.25 17.383 2.25 12ZM12 3.75C7.44546 3.75 3.75 7.44546 3.75 12C3.75 16.5545 7.44546 20.25 12 20.25C16.5545 20.25 20.25 16.5545 20.25 12C20.25 7.44546 16.5545 3.75 12 3.75Z" fill={color}/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.9824 7.67574C17.2996 7.94216 17.3407 8.41525 17.0743 8.73241L10.7743 16.2324C10.6347 16.3986 10.4299 16.4962 10.2128 16.4999C9.99576 16.5036 9.78776 16.4131 9.64254 16.2517L6.94254 13.2517C6.66544 12.9439 6.6904 12.4696 6.99828 12.1925C7.30617 11.9155 7.78038 11.9404 8.05748 12.2483L10.1805 14.6072L15.9257 7.76762C16.1921 7.45046 16.6652 7.40932 16.9824 7.67574Z" fill="white"/>
</Svg>
);
};

export default CheckmarkOutline;