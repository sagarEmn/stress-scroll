import { Smartphone } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <>
      <div
        id="hero"
        className="relative min-h-screen flex items-center justify-center px-6"
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-6">
              <Smartphone className="w-full h-full text-blue-400" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
