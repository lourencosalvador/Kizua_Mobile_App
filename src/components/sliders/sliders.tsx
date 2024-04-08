import { useState } from "react";
import { Text, View, Image } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { slides } from "./utils";
import { MotiText } from "moti";
import { ChossingScreen } from "../../screens/choosing-enter/choosing";

export function Sliders() {
  const [showHomepage, setShowHomePage] = useState(false);

  const buttonLabel = (label: string) => {
    return (
      <View>
        <Text>{label}</Text>
      </View>
    );
  };
  if (!showHomepage) {
    return (
      <AppIntroSlider
        data={slides}
        renderItem={({ item }) => {
          return (
            <View className="flex-1 bg-zinc-950 text-slate-200 ">
              <Image source={item.image} className="w-screen h-full " />
              <View className="absolute top-[500px] flex flex-col space-y-5 px-9">
                <MotiText
                   from={{
                    opacity: 0,
                    top: 50
                  }}
                  animate={{
                    opacity: 1,
                     top: 0
                  }}
                  transition={{
                    type: "timing",
                    duration: 2000,
                  }}
                 className="text-[15px] font-light text-[#FFFF]">
                  {item.title} <Text className="text-[#F96EDA] text-[17px] font-bold">Kizua</Text>
                </MotiText>
                <MotiText
                 from={{
                  opacity: 0,
                  left: -100
                }}
                animate={{
                  opacity: 1,
                   left: 0
                }}
                transition={{
                  type: "timing",
                  duration: 1000,
                }}
                className="text-[28px] text-[#FFFF]  w-[320px] font-bold leading-9">
                  {item.description}
                </MotiText>
              </View>
            </View>
          );
        }}
        dotStyle={{ backgroundColor: "#ffff", bottom: 95 }}
        activeDotStyle={{
          backgroundColor: "#C175B0",
          width: 30,
          bottom: 95,
        }}
        showSkipButton
        renderNextButton={() => (
          <View className="w-[320px] h-[67px] rounded-md absolute top-[-35px] left-[-350px] flex justify-center items-center bg-[#652285]">
            <Text className="text-slate-200 text-[16px] font-semibold">Avançar</Text>
          </View>
        )}
        renderSkipButton={() => buttonLabel("Skit")}
        renderDoneButton={() => (
          <View className="w-[320px] h-[67px] rounded-md absolute top-[-35px] left-[-350px] flex justify-center items-center bg-[#652285]">
            <Text className="text-slate-200 text-[16px] font-semibold">Começa agora</Text>
          </View>
        )}
        onDone={() => {
          setShowHomePage(true);
        }}
      />
    );
  }
  return <ChossingScreen />;
}
