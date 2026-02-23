import { Phone, Mail, Globe, Accessibility, Contrast, Type } from 'lucide-react';
import { useState } from 'react';

export default function TopBar() {
  const [fontSize, setFontSize] = useState(1);
  const [highContrast, setHighContrast] = useState(false);

  const increaseFont = () => setFontSize(prev => Math.min(prev + 0.1, 1.3));
  const decreaseFont = () => setFontSize(prev => Math.max(prev - 0.1, 0.8));
  const resetFont = () => setFontSize(1);
  const toggleContrast = () => setHighContrast(prev => !prev);

  return (
    <div 
      className={`w-full h-10 ${highContrast ? 'bg-black' : 'bg-gov-dark'} text-white text-sm transition-colors duration-300`}
      style={{ fontSize: `${fontSize}rem` }}
    >
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        {/* Left - Contact Info */}
        <div className="flex items-center gap-6 animate-slide-right">
          <a 
            href="tel:+977-01-4529659" 
            className="flex items-center gap-2 hover:text-gov-red transition-colors duration-200 animate-underline-grow"
          >
            <Phone className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">+977-01-4529659</span>
          </a>
          <a 
            href="mailto:info@immigration.gov.np" 
            className="flex items-center gap-2 hover:text-gov-red transition-colors duration-200 animate-underline-grow"
          >
            <Mail className="w-3.5 h-3.5" />
            <span className="hidden md:inline">info@immigration.gov.np</span>
          </a>
        </div>

        {/* Right - Language & Accessibility */}
        <div className="flex items-center gap-4 animate-slide-left">
          {/* Language Switcher */}
          <div className="flex items-center gap-2">
            <Globe className="w-3.5 h-3.5" />
            <button className="hover:text-gov-red transition-colors duration-200 font-medium">नेपाली</button>
            <span className="text-gov-gray-light">|</span>
            <button className="text-gov-red font-medium">English</button>
          </div>

          <div className="h-4 w-px bg-gov-gray hidden sm:block" />

          {/* Accessibility Options */}
          <div className="flex items-center gap-2">
            <button 
              className="flex items-center gap-1 hover:text-gov-red transition-colors duration-200"
              title="Screen Reader"
            >
              <Accessibility className="w-3.5 h-3.5" />
              <span className="hidden lg:inline text-xs">Screen Reader</span>
            </button>
            
            <button 
              onClick={toggleContrast}
              className={`flex items-center gap-1 transition-colors duration-200 ${highContrast ? 'text-gov-red' : 'hover:text-gov-red'}`}
              title="Invert Colors"
            >
              <Contrast className="w-3.5 h-3.5" />
            </button>

            <div className="flex items-center gap-0.5">
              <button 
                onClick={decreaseFont}
                className="hover:text-gov-red transition-colors duration-200 px-1"
                title="Decrease Font Size"
              >
                <Type className="w-3 h-3" />
              </button>
              <button 
                onClick={resetFont}
                className="hover:text-gov-red transition-colors duration-200 px-1 font-medium"
                title="Reset Font Size"
              >
                A
              </button>
              <button 
                onClick={increaseFont}
                className="hover:text-gov-red transition-colors duration-200 px-1"
                title="Increase Font Size"
              >
                <Type className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
