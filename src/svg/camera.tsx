import * as React from "react"
import Svg, { SvgProps, G, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
export const Camera = (props: SvgProps) => (
  <Svg
    width={44}
    height={43}
    fill="none"
    {...props}
  >
    <G fill="#fff" filter="url(#a)">
      <Path d="M22 15a6.25 6.25 0 1 0 0 12.5A6.25 6.25 0 0 0 22 15Z" />
      <Path
        fillRule="evenodd"
        d="M17.573 5.118a82.533 82.533 0 0 1 8.854 0 4.904 4.904 0 0 1 3.886 2.317l1.369 2.195a2.61 2.61 0 0 0 1.85 1.183c.643.09 1.283.189 1.92.295 2.386.399 4.048 2.489 4.048 4.849V30a5 5 0 0 1-5 5h-25a5 5 0 0 1-5-5V15.957c0-2.36 1.662-4.45 4.048-4.849a80.558 80.558 0 0 1 1.919-.296 2.6 2.6 0 0 0 1.85-1.184l1.37-2.191a4.903 4.903 0 0 1 3.886-2.319ZM13.25 21.25a8.75 8.75 0 1 1 17.5 0 8.75 8.75 0 0 1-17.5 0Zm20-2.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
        clipRule="evenodd"
      />
    </G>
    <Defs></Defs>
  </Svg>
)