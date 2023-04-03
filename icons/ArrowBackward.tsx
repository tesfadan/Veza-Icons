import React from "react";
import Svg, { Path } from "react-native-svg";
import { VezaIconProps } from "..";

const ArrowBackward: React.FC<VezaIconProps> = ({ size = 24, color = "#5B28E5" }) => {
    return (
      <Svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
      >
        <Path fill-rule="evenodd" clip-rule="evenodd" d="M12.233 4.4545C11.7937 4.01517 11.0813 4.01517 10.642 4.4545L3.89201 11.2045C3.45267 11.6438 3.45267 12.3562 3.89201 12.7955L10.642 19.5455C11.0813 19.9848 11.7937 19.9848 12.233 19.5455C12.6723 19.1062 12.6723 18.3938 12.233 17.9545L7.40349 13.125H19.3125C19.9338 13.125 20.4375 12.6213 20.4375 12C20.4375 11.3787 19.9338 10.875 19.3125 10.875H7.40349L12.233 6.0455C12.6723 5.60616 12.6723 4.89384 12.233 4.4545Z"
            fill={color}
        />
      </Svg>
    );
  };
  
export default ArrowBackward;