import React from "react";

// import librarires
import { Smartphone, Brain, Target, Heart, Zap } from "lucide-react";

// import components
import Nav from "./components/Navigation.jsx";
import Hero from "./components/Hero.jsx";

function App() {
  const sections = [
    { id: "hero", title: "The Endless Scroll", icon: Smartphone },
    { id: "cycle", title: "Understanding the Cycle", icon: Brain },
    { id: "triggers", title: "Identifying the Triggers", icon: Target },
    { id: "strategies", title: "Coping Strategies", icon: Heart },
    { id: "resilience", title: "Building Resilience", icon: Zap },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-gray-100 overflow-x-hidden">
      <Nav sections={sections} />
      <Hero />
    </div>
  );
}

export default App;
