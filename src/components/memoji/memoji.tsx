import { MotiView } from "moti";
import { ReactNode, useEffect, useState } from "react";
import { View } from "react-native";

interface MemojiProps {
  children_1: ReactNode;
  children_2: ReactNode;
  className: string;
}

export function Memoji({ children_1, children_2, className }: MemojiProps) {
  const [showGirlIn, setShowGirlIn] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setShowGirlIn((prevShowGirlIn) => !prevShowGirlIn);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <View className={className}>
      <MotiView
        key={showGirlIn ? "girlIn" : "girl"}
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
        {!showGirlIn ? children_1 : children_2}
      </MotiView>
    </View>
  );
}
