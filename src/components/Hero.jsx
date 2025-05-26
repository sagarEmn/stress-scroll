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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-6 backdrop-blur-sm border border-blue-500/30">
              <Smartphone className="w-10 h-10 text-blue-400" />
            </div>
          </div>

          <h2 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              The Endless
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Scroll
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12">
            How stress drives you into mindless scrolling, and why it becomes the escape from reality
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button>
              Start Your Journey
            </button>
            <button>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
