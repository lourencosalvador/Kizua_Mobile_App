import { View } from "react-native";
import { GridProps } from "./types";

export function GridContainer({ children }: GridProps) {
  return <View className="w-screen px-6 ">{children}</View>;
}
