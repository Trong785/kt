
import { Image, Pressable, Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { Icon } from "../icons.jsx";
import { useGo } from "../navigation.jsx";
import { A, C, font } from "../tokens.js";
import { Frame } from "../ui.jsx";
import { HomeContent } from "./Home.jsx";

const avatarImg = require("../../../image/Rectangle 4158.png");

const MENU = [
  ["user", "My Profile", 197, "my-profile"],
  ["msg", "Massage", 255, "messages"],
  ["cal", "Calender", 313, "calendar"],
  ["mark", "Bookmark", 371, "bookmark"],
  ["mail", "Contact Us", 429, "contact"],
  ["gear", "Settings", 487, "settings"],
  ["help", "Helps & FAQs", 545, "help"],
  ["out", "Sign Out", 603, "signin"],
];

export default function Menu() {
  const go = useGo();

  return (
    <Frame>
      {/* Background panels */}
      <View
        style={A(251, 114, 271, 592, {
          backgroundColor: "rgba(188,188,188,.25)",
          opacity: 0.2,
          borderRadius: 40,
        })}
      />
      <View
        style={A(266, 89, 295, 617, {
          backgroundColor: "rgba(188,188,188,.21)",
          opacity: 0.2,
          borderRadius: 40,
        })}
      />

      {/* Home preview */}
      <Pressable
        onPress={() => go("home")}
        style={A(287, 67, 315, 644, {
          borderRadius: 40,
          overflow: "hidden",
          boxShadow: "0 20px 50px rgba(80,85,136,.15)",
        })}
      >
        <View
          style={{
            position: "absolute",
            left: -30,
            top: -65,
            width: 375,
            height: 812,
            transform: [{ scale: 0.84 }],
          }}
        >
          <HomeContent />
        </View>
      </Pressable>

      {/* User profile */}
      <Image
        source={avatarImg}
        style={A(25, 45, 60, 60, { borderRadius: 30 })}
        resizeMode="cover"
      />

      <Text
        style={A(27, 117, 220, 26, {
          ...font(20, 700, 26),
          color: "#000",
          textTransform: "capitalize",
        })}
      >
        Ashfak Sayem
      </Text>

      {/* Navigation menu */}
      {MENU.map(([icon, label, y, route]) => (
        <Pressable
          key={label}
          onPress={() => go(route)}
          style={A(24, y - 6, 220, 36)}
        >
          <Icon
            n={icon}
            s={23}
            c="#6E6E6E"
            w={1.5}
            style={{ position: "absolute", left: 7, top: 7 }}
          />
          <Text
            style={{
              position: "absolute",
              left: 44,
              top: 6,
              ...font(16, 400, 25),
              color: "#000",
            }}
          >
            {label}
          </Text>
        </Pressable>
      ))}

      {/* Notification badge */}
      <View
        style={A(41, 257, 16, 16, {
          borderRadius: 8,
          backgroundColor: C.orange,
          alignItems: "center",
          justifyContent: "center",
        })}
      >
        <Text style={{ ...font(9, 500, 16), color: "#fff" }}>3</Text>
      </View>

      {/* Upgrade Pro */}
      <View
        style={A(25, 733, 150, 36, {
          backgroundColor: "rgba(0,248,255,.15)",
          borderRadius: 8,
          paddingLeft: 52,
          justifyContent: "center",
        })}
      >
        <Text style={{ ...font(16, 500, 36), color: C.cyan }}>
          Upgrade Pro
        </Text>
      </View>

      <Svg style={A(42, 742, 20, 18)} viewBox="0 0 20 18" fill={C.cyan}>
        <Path d="M1 15h18v2H1zM1 4l5 5 4-7 4 7 5-5-2 10H3z" />
      </Svg>
    </Frame>
  );
}
