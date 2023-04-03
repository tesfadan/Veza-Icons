import React from "react";
import Svg, { Path } from "react-native-svg";
import { VezaIconProps } from "..";

const Icon: React.FC<VezaIconProps> = ({ size = 24, color = "#5B28E5" }) => {
    return (
      <Svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
      >
        <Path 
          fill-rule="evenodd" clip-rule="evenodd" d="M11.767 4.4545C12.2063 4.01517 12.9187 4.01517 13.358 4.4545L20.108 11.2045C20.5473 11.6438 20.5473 12.3562 20.108 12.7955L13.358 19.5455C12.9187 19.9848 12.2063 19.9848 11.767 19.5455C11.3277 19.1062 11.3277 18.3938 11.767 17.9545L16.5965 13.125H4.6875C4.06618 13.125 3.5625 12.6213 3.5625 12C3.5625 11.3787 4.06618 10.875 4.6875 10.875H16.5965L11.767 6.0455C11.3277 5.60616 11.3277 4.89384 11.767 4.4545Z"
          fill={color}
        />
      </Svg>
    );
  };
  
  export default Icon;