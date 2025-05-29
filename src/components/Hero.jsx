import { Smartphone, ChevronDown } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <>
      <section
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
            How stress drives you into mindless scrolling, and why it becomes
            the escape from reality
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer">
              Start Your Journey
            </button>
            <button className="px-8 py-4 bg-white rounded-full text-black font-semibold transition-all transform hover:scale-105 cursor-pointer">
              Learn More
            </button>
          </div>

          <div className="animate-bounce">
            <ChevronDown
              className=" rounded-full text-slate-400 border-2 border-slate-400 mx-auto"
              size={50}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
