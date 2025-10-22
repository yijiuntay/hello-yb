import React from "react";
import Header from "./components/Header"; // <-- IMPORT reusable Header
import Footer from "./components/Footer"; // <-- IMPORT reusable Footer
import ConstituencySearch from "./components/ConstituencySearch";
import { getConstituencies } from "@/lib/data";

const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
    
    .pixel-art-container {
      font-family: 'Press Start 2P', cursive;
      background-color: #3b82f6; /* vibrant blue */
      background-image: 
        linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
      background-size: 10px 10px;
      color: #ffffff;
      /* For sharp, pixelated text */
      -webkit-font-smoothing: none;
      -moz-osx-font-smoothing: grayscale;
      font-smooth: never;
    }
  `}</style>
);

// Component for the pixel-art style icons
type PixelArtIconProps = {
  icon: "mapPin" | "person" | "checkmark";
};

const PixelArtIcon = ({ icon }: PixelArtIconProps) => {
  const icons = {
    mapPin: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto md:mx-0"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24 0L28 0V4H24V0ZM20 4H24V8H20V4ZM28 4V8H32V4H28ZM16 8V12H20V8H16ZM32 8H36V12H32V8ZM12 12V16H16V12H12ZM36 12V16H40V12H36ZM12 16H8V20H12V16ZM40 16V20H44V16H40ZM8 20V24H12V20H8ZM44 20H40V24H44V20ZM12 24V28H16V24H12ZM36 24H40V28H36V24ZM16 28V32H20V28H16ZM32 28H36V32H32V28ZM20 32V36H24V32H20ZM28 32V36H32V32H28ZM24 36V40H28V36H24ZM24 40H20V44H24V40ZM24 44V48H28V44H24Z"
          fill="black"
        />
        <path
          d="M24 12L28 12V16H24V12ZM20 16V20H24V16H20ZM28 16H32V20H28V16ZM24 20V24H28V20H24Z"
          fill="black"
        />
      </svg>
    ),
    person: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto md:mx-0"
      >
        <path d="M20 8H28V12H32V20H28V16H20V20H16V12H20V8Z" fill="black" />
        <path d="M12 24H36V28H32V32H28V40H20V32H16V28H12V24Z" fill="black" />
      </svg>
    ),
    checkmark: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto md:mx-0"
      >
        <path
          d="M8 24H12V28H16V32H20V36H24V32H28V28H32V24H36V20H40V16H36V20H32V24H28V28H24V32H20V28H16V24H12V20H8V24Z"
          fill="black"
        />
      </svg>
    ),
  };
  return <div>{icons[icon]}</div>;
};

export default async function App() {
  const howItWorksSteps: {
    icon: "mapPin" | "person" | "checkmark";
    title: string;
    description: string;
  }[] = [
    {
      icon: "mapPin",
      title: "Find Your Battlefield",
      description:
        "Pinpoint your electoral constituency. Know where you stand!",
    },
    {
      icon: "person",
      title: "Scout The Challengers",
      description:
        "Get a clear list of all candidates. See their stats and platforms.",
    },
    {
      icon: "checkmark",
      title: "Cast Your Decisive Vote",
      description: "Armed with knowledge, make an informed choice. Victory!",
    },
  ];

  const constituencies = await getConstituencies();

  return (
    <>
      <GlobalStyles />
      <div className="flex flex-col min-h-screen pixel-art-container">
        <Header /> {/* <-- Use the imported Header component */}
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="text-center py-20 md:py-32">
            <div className="container mx-auto px-4">
              <h2
                className="text-5xl md:text-7xl text-yellow-300 mb-4"
                style={{ textShadow: "4px 4px 0px #000" }}
              >
                Hello YB!
              </h2>
              <p className="text-xl md:text-2xl mb-8">
                Get to Know Your Representative
              </p>
              <p className="max-w-2xl mx-auto mb-10 text-sm md:text-base leading-relaxed">
                This site helps you get to know the candidates in your electoral
                constituency. Accurate information for smart voters.
              </p>
              <ConstituencySearch constituencies={constituencies} />
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16 bg-blue-600 border-y-4 border-black">
            <div className="container mx-auto px-4">
              <h3
                className="text-3xl md:text-4xl text-center text-yellow-300 mb-16"
                style={{ textShadow: "3px 3px 0px #000" }}
              >
                Your Quest To Vote
              </h3>
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  {/* The vertical line */}
                  <div
                    className="absolute left-8 top-0 h-full w-1 bg-black opacity-50 hidden md:block"
                    aria-hidden="true"
                  ></div>

                  <ul className="space-y-12">
                    {howItWorksSteps.map((step, index) => (
                      <li key={step.title} className="md:flex md:items-start">
                        <div className="flex-shrink-0 z-10 flex items-center justify-center md:justify-start mb-4 md:mb-0">
                          <div className="w-16 h-16 bg-yellow-300 border-4 border-black text-black flex items-center justify-center text-2xl">
                            {index + 1}
                          </div>
                        </div>
                        <div className="md:ml-8 bg-white text-black p-6 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,0.8)] w-full text-center md:text-left">
                          <PixelArtIcon icon={step.icon} />
                          <h4 className="text-xl font-bold my-2">
                            {step.title}
                          </h4>
                          <p className="text-sm">{step.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer /> {/* <-- Use the imported Footer component */}
      </div>
    </>
  );
}
