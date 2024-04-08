import { TouchableOpacity, Text } from "react-native"
import { ButtomProps } from "./types"

export const Buttom = ({text, className, classNameText, ...rest}: ButtomProps) => {

  return(
     <TouchableOpacity
       className={`px-32 py-4 bg-violet-600 rounded-md ${className}`}
       {...rest}
      >
        <Text className={`text-[14px] text-slate-200 ${classNameText}`}>{text}</Text>
      </TouchableOpacity>
  )
}