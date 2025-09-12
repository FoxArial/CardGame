import React from "react";
import Svg, { Path } from "react-native-svg";

type PlayButtonProps = {
  size: number;
};

export default function PlayButton({ size }: PlayButtonProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 36 38" fill="none">
      <Path
        d="M32.3557 20.7624C31.6194 23.5604 28.1392 25.5376 21.179 29.4918C14.4504 33.3144 11.0862 35.2257 8.37498 34.4575C7.25407 34.1398 6.23281 33.5366 5.40917 32.7056C3.41699 30.6956 3.41699 26.7971 3.41699 19C3.41699 11.2029 3.41699 7.30437 5.40917 5.29442C6.23281 4.46343 7.25407 3.86018 8.37498 3.54254C11.0862 2.77427 14.4504 4.68557 21.179 8.50818C28.1392 12.4624 31.6194 14.4396 32.3557 17.2376C32.6596 18.3925 32.6596 19.6075 32.3557 20.7624Z"
        stroke="#FAFAFA"
        strokeWidth={5.55555}
        strokeLinejoin="round"
      />
    </Svg>
  );
}
