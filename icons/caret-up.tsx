import React from "react";
import Svg, { Path } from "react-native-svg";
import { VezaIconProps } from "..";

const icon: React.FC<VezaIconProps> = ({ size = 24, color = "#5B28E5" }) => {
    return (<Svg width={size} height={size} viewBox="0 0 24 24" fill="none" >
<Path d="M19.4048 15.0906L12.8526 7.44432C12.747 7.32113 12.616 7.22226 12.4686 7.15446C12.3212 7.08667 12.1608 7.05157 11.9986 7.05157C11.8363 7.05157 11.676 7.08667 11.5285 7.15446C11.3811 7.22226 11.2501 7.32113 11.1445 7.44432L4.59231 15.0906C3.967 15.8204 4.48544 16.9478 5.44638 16.9478L18.5526 16.9478C19.5136 16.9478 20.032 15.8204 19.4048 15.0906Z" fill={color}/>
</Svg>
);
  };
  
export default icon;