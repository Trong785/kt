import Home from "./screens/Home.jsx";
import Menu from "./screens/Menu.jsx";
import Onboarding from "./screens/Onboarding.jsx";
import Reset from "./screens/Reset.jsx";
import SignIn from "./screens/SignIn.jsx";
import SignUp from "./screens/SignUp.jsx";
import Splash from "./screens/Splash.jsx";
import Verification from "./screens/Verification.jsx";

// Bảng điều hướng của app: id route → component (+ props).
export const SCREENS = [
  // Luồng vào app
  { id: "splash", Comp: Splash },
  { id: "onboarding-1", Comp: Onboarding, props: { i: 0 } },
  { id: "onboarding-2", Comp: Onboarding, props: { i: 1 } },
  { id: "onboarding-3", Comp: Onboarding, props: { i: 2 } },
  { id: "signin", Comp: SignIn },
  { id: "signup", Comp: SignUp },
  { id: "verify", Comp: Verification },
  { id: "reset", Comp: Reset },
  // Trang chính
  { id: "home", Comp: Home },
  { id: "menu", Comp: Menu },
  // Chỉ giữ 10 màn khớp 10 ảnh Figma trong image_hoanchinh/
  // (đã xóa 11 màn thừa: events, map, profile, my-profile, messages,
  //  calendar, bookmark, contact, settings, help, create — xem nhatky.md)
];

export const FLOW = SCREENS.map(s => s.id);
