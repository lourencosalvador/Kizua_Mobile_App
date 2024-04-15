import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
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
import BottomSheet from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BatePapo } from "../../svg/bate-paapo";
import { Camera } from "../../svg/camera";
import { Translate } from "../../svg/translate";

const _color = "#6E01EF";
const _size = 100;

export function Home() {
  const showGirlInRef = useRef(false);
  const bottomRef = useRef<BottomSheet>(null);
  const snapPoint = useMemo(() => ["30%", "25%"], []);
  const navigation = useNavigation();

  const handleCloseAction = () => bottomRef.current?.close();
  const handleOpenPress = () => bottomRef.current?.expand();

  useEffect(() => {
    const timer = setInterval(() => {
      showGirlInRef.current = !showGirlInRef.current;
    }, 1000);

    return () => clearInterval(timer);
  }, [showGirlInRef.current]);

  const handleChange = useCallback((index: any) => {
    console.log("O estado atual", index);
  }, []);

  return (
    <GestureHandlerRootView className="flex-1">
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
              {showGirlInRef.current ? (
                <GirlInIcon width={150} />
              ) : (
                <GirlIcon />
              )}
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
              Começa explorando umas das nossas actividades para o aprendizado
              da lingua nacional
            </Text>

            <TouchableOpacity
              onPress={handleOpenPress}
              className="bg-[#FA1E88] w-[208px] h-[50px] rounded-md flex justify-center items-center"
            >
              <Text className="text-[14px] text-center font-semibold  w-[350px] text-[#FFFFFF] ">
                Começar
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <BottomSheet
          ref={bottomRef}
          index={0}
          snapPoints={snapPoint}
          backgroundStyle={{
            backgroundColor: "#ffff",
            justifyContent: "center",
            alignContent: "center",
          }}
          enablePanDownToClose={true}
        >
          <View className="flex flex-row justify-center items-center space-x-6 w-full mt-16">
            <TouchableOpacity className="w-[110px] flex justify-center items-center space-y-1 h-[100px] rounded-md bg-[#FF6FD8]">
              <BatePapo />
            <Text className="text-[16px] text-center font-bold  w-[350px] text-[#FFFFFF] ">
                Bate-Papo
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Camera")} className="w-[110px] flex justify-center items-center space-y-1 h-[100px] rounded-md bg-[#6E01EF]">
            <Camera />
            <Text className="text-[16px] text-center font-bold  w-[350px] text-[#FFFFFF] ">
               Camera
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="w-[110px] flex justify-center items-center space-y-1 h-[100px] rounded-md bg-[#FA1E88]">
            <Translate />
            <Text className="text-[16px] text-center font-bold  w-[350px] text-[#FFFFFF] ">
               Tradutor
              </Text>
            </TouchableOpacity>
          </View>
        </BottomSheet>
        <StatusBar style="auto" />
      </View>
    </GestureHandlerRootView>
  );
}
