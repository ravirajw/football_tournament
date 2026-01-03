import { CircleDot, Trophy, Shield } from 'lucide-react';
import footballIcon from '../assets/ee8efaa0c4aa62c6083c0c5afa35e670b64be314.png';

export default function App() {
  return (
    <div className="size-full flex items-center justify-center bg-[#124559ff] overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-8 text-center">
        {/* App Icon */}
        <div className="relative mb-8">
          {/* Circular badge with football player icon */}
          <div className="w-32 h-32 bg-[#eff6e0ff] rounded-full flex items-center justify-center shadow-2xl p-6">
            <img src={footballIcon} alt="Football player" className="w-full h-full object-contain" />
          </div>
        </div>

        {/* Title */}
        <div className="text-[#eff6e0ff] text-3xl font-semibold mb-2 tracking-tight" style={{ background: 'none', backgroundColor: 'transparent' }}>
          South Pune
        </div>
        <div className="text-[#eff6e0ff] text-xl font-semibold tracking-wide" style={{ background: 'none', backgroundColor: 'transparent' }}>
          Football Community
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#598392ff] to-transparent"></div>
    </div>
  );
}