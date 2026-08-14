import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Q1_2 from "./practice-part2/Q1-2.jsx";
import Q3 from "./practice-part2/Q3.jsx";
import Q4 from "./practice-part2/Q4.jsx";
import Hero from "./miniProject-AnimatedHeroSection/Hero.jsx";
import LoadingScreen from "./miniProject-AnimatedHeroSection/LoadingScreen.jsx";
import MPLayout from "./miniProject-AnimatedHeroSection/MPLayout.jsx";

createRoot(document.getElementById("root")).render(<MPLayout/>);
