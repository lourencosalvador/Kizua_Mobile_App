import React, { useEffect, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { MotiView } from "moti";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  Button,
  StyleSheet,
  Image,
} from "react-native";
import { Wave } from "../../components/wave/wave";
import { GirlIcon } from "../../svg/girl";
import { GirlInIcon } from "../../svg/girl-in";
import { Memoji_3 } from "../../svg/memoji3";
import { Memoji_2 } from "../../svg/memoji2";
import { Memoji_4 } from "../../svg/memoji4";
import { Memoji_1 } from "../../svg/memoji1";

const _color = "#6E01EF";
const _size = 100;

export function Home() {
  const showGirlInRef = useRef(false);

  useEffect(() => {
    const timer = setInterval(() => {
      showGirlInRef.current = !showGirlInRef.current;
    }, 1000);

    return () => clearInterval(timer);
  }, [showGirlInRef.current]);

  return (
    <View className="flex-1 items-center py-[122px] bg-[#131417]">
      <View className=" w-full h-[400px] flex justify-center items-center relative">
        <Wave key="unique_wave_key" />
        <View className="absolute top-0 left-5 rotate-[-20deg]">
          <MotiView
            key={showGirlInRef.current ? "girlIn1" : "girl1"}
            from={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              type: "spring",
              duration: 500,
            }}
            style={{ alignItems: "center" }}
          >
            {showGirlInRef.current ? <GirlInIcon width={150} /> : <GirlIcon />}
          </MotiView>
        </View>

        <View className="absolute top-0 left-[273px] rotate-[35deg]">
          <MotiView
            key={showGirlInRef.current ? "girlIn2" : "girl2"}
            from={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              type: "spring",
              duration: 500,
            }}
            style={{ alignItems: "center" }}
          >
            {showGirlInRef.current ? <Memoji_2 width={150} /> : <Memoji_3 />}
          </MotiView>
        </View>

        <View className="absolute top-72 left-10 ">
          <MotiView
            key={showGirlInRef.current ? "girlIn3" : "girl3"}
            from={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              type: "spring",
              duration: 500,
            }}
            style={{ alignItems: "center" }}
          >
            {showGirlInRef.current ? <Memoji_1 width={150} /> : <Memoji_4 />}
          </MotiView>
        </View>

        <View className="flex justify-center items-center space-y-5 absolute top-[520px]">
          <Text className="text-[16px] text-center font-semibold  w-[350px] text-[#DEDEDE] ">
            Começa explorando umas das nossas actividades para o aprendizado da
            lingua nacional
          </Text>


          <TouchableOpacity className="bg-[#FA1E88] w-[208px] h-[50px] rounded-md flex justify-center items-center">
          <Text className="text-[14px] text-center font-semibold  w-[350px] text-[#FFFFFF] ">
          Começar 
          </Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
