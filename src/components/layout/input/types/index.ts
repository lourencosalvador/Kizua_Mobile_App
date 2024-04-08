import { ButtonHTMLAttributes, InputHTMLAttributes } from "react";
import { TextInput } from "react-native";

export interface InputProps extends InputHTMLAttributes<TextInput>{
  placeholder: string
}