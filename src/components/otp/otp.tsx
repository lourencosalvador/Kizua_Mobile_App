import { useNavigation } from "@react-navigation/native";
import React, { useRef, useState } from "react";
import {
  View,
  TextInput,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
  Alert,
  Text,
  TouchableOpacity,
} from "react-native";

type OTPInputProps = {
  length: number;
  value: Array<string>;
  desabled: boolean;
  onChange(value: Array<string>): void;
};
type Nullable<T> = T | null | undefined;

export const OTPInput: React.FunctionComponent<OTPInputProps> = ({
  length,
  value,
  desabled,
  onChange,
}: OTPInputProps) => {
  const inputRef = useRef<Array<Nullable<TextInput>>>([]);
  const navigation = useNavigation();
  const [inputValues, setInputValues] = useState<Array<string>>(
    new Array(length).fill("")
  );

  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  const onFocus = (index: number) => {
    setFocusedIndex(index);
  };

  const onBlur = () => {
    setFocusedIndex(null);
  };

  const onChangeValue = (
    text: string,

    index: number
  ) => {
    const newValue = (value || []).map((item, valueIndex) => {
      if (valueIndex === index) {
        return text;
      }

      return item;
    });

    onChange && onChange(newValue);
    setInputValues((prevState) => {
      const newValues = [...prevState];
      newValues[index] = text;
      return newValues;
    });
  };

  const handleChange = (text: string, index: number) => {
    onChangeValue(text, index);

    if (text.length !== 0) {
      return inputRef?.current[index + 1]?.focus();
    }

    return inputRef?.current[index - 1]?.focus();
  };

  const handleBackspace = (
    event: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number
  ) => {
    const { nativeEvent } = event;

    if (nativeEvent.key === "Backspace") {
      handleChange("", index);
    }
  };

  const openHandleValue = () => {
    const combinedValue = inputValues.join("");
    if(combinedValue === "4956"){
      navigation.navigate("New-passoword")
    } else{
      Alert.alert("Codigo invalido")
    }
  };

  return (
    <View className="px-3 flex flex-col space-y-">
      <View className=" mb-4 flex flex-row gap-6">
        {[...new Array(length)].map((item, index) => (
          <TextInput
            ref={(ref) => {
              if (ref && !inputRef.current.includes(ref)) {
                inputRef.current = [...inputRef.current, ref];
              }
            }}
            key={index}
            className={`text-[24px] font-semibold w-[70px] h-[60px] bg-slate-200 rounded-[8px] 
            text-center ${focusedIndex === index && "border-[#652285] border-[1px]"}`}
            maxLength={1}
            contextMenuHidden
            selectTextOnFocus
            editable={!desabled}
            keyboardType="decimal-pad"
            testID={`OTPInput-${index}`}
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={(event) => handleBackspace(event, index)}
            onFocus={() => onFocus}
            onBlur={onBlur}
          />
        ))}
      </View>
      <TouchableOpacity
        onPress={openHandleValue}
        className="px-32 py-4 rounded-md h-[56px] items-center bg-[#1E232C]"
      >
        <Text className="text-[15px] font-semibold text-[#FFFF]">
          Verificar
        </Text>
      </TouchableOpacity>
    </View>
  );
};
