import React from "react";

const Navigation = ({ sections }) => {
  return (
    <nav className="w-full top-0 fixed">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1>Breaking the Cycle</h1>
            <p>Understanding stress and digital addiction</p>
          </div>

          <div className="hidden md:flex space-x-8">
            {sections.map((sections, index) => (
              <a
                key={index}
                href={`#${sections.id}`}
                className={`text-sm transition-colors duration-200 hover:text-blue-400`}
              >
                {sections.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
