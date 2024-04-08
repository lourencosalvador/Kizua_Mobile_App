import { TextInput } from "react-native";
import { InputProps } from "./types";

export function Input({ placeholder, ...rest }: InputProps) {
  return (
    <TextInput
      {...rest}
      className="w-[361px] h-14 rounded-md border-[#E8ECF4] border-[1px] px-4 placeholder:text-[15px]"
      placeholder={placeholder}
    />
  );
}
