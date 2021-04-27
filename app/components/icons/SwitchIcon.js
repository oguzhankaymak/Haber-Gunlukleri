import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgSwitchIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      className=""
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      width="24"
      height="24"
      {...props}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
      />
    </Svg>
  );
}

export default SvgSwitchIcon;
