import { ButtonHTMLAttributes } from "react";

export interface ButtomProps  extends ButtonHTMLAttributes<HTMLButtonElement> {
   text?: string,
   className?: string,
   classNameText?: string
}