import { ChevronUp } from 'lucide-react';

const Hero = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-white/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#1a1a4e] leading-tight">
              kompatibilní se<br />
              všemi agendami
            </h1>
          </div>

          {/* Center Mascot */}
          <div className="flex justify-center order-first lg:order-none">
            <div className="relative w-64 h-80 md:w-80 md:h-96">
              {/* Mascot SVG */}
              <svg viewBox="0 0 200 250" className="w-full h-full drop-shadow-2xl">
                {/* Body */}
                <path
                  d="M100 80 
                         C 70 80, 50 100, 50 140
                         L 50 200
                         C 50 220, 70 240, 100 240
                         C 130 240, 150 220, 150 200
                         L 150 140
                         C 150 100, 130 80, 100 80 Z"
                  fill="#3ECFA0"
                  stroke="#1a1a4e"
                  strokeWidth="3"
                />
                {/* Head */}
                <circle
                  cx="100"
                  cy="60"
                  r="45"
                  fill="#3ECFA0"
                  stroke="#1a1a4e"
                  strokeWidth="3"
                />
                {/* Checkmark circle */}
                <circle
                  cx="100"
                  cy="45"
                  r="20"
                  fill="#1a1a4e"
                />
                {/* Checkmark */}
                <path
                  d="M 90 45 L 97 52 L 110 38"
                  fill="none"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Collar */}
                <path
                  d="M 70 110 L 100 130 L 130 110"
                  fill="white"
                  stroke="#1a1a4e"
                  strokeWidth="2"
                />
                {/* Tie */}
                <path
                  d="M 100 130 L 95 150 L 100 160 L 105 150 Z"
                  fill="#1a1a4e"
                />
                {/* Buttons */}
                <circle cx="100" cy="170" r="4" fill="white" stroke="#1a1a4e" strokeWidth="1" />
                <circle cx="100" cy="185" r="4" fill="white" stroke="#1a1a4e" strokeWidth="1" />
                <circle cx="100" cy="200" r="4" fill="white" stroke="#1a1a4e" strokeWidth="1" />
                {/* Pocket */}
                <rect
                  x="115"
                  y="150"
                  width="20"
                  height="25"
                  rx="3"
                  fill="white"
                  stroke="#1a1a4e"
                  strokeWidth="2"
                />
                {/* Pocket circle */}
                <circle cx="125" cy="162" r="6" fill="#1a1a4e" />
                <circle cx="125" cy="162" r="3" fill="white" />
              </svg>
            </div>
          </div>

          {/* Right Text */}
          <div className="text-center lg:text-right">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#1a1a4e] leading-tight">
              lídr na trhu v<br />
              bezpečnosti ve<br />
              školství
            </h2>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-40 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow border border-gray-200"
      >
        <ChevronUp className="w-6 h-6 text-gray-600" />
      </button>
    </section>
  );
};

export default Hero;
