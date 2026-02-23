import { useEffect, useRef, useState } from 'react';
import { MapPin, ExternalLink, Building2, ChevronLeft, ChevronRight } from 'lucide-react';

const offices = [
  {
    name: 'Immigration Office, Gautambuddha International Airport',
    location: 'Bhairahawa',
    url: 'http://gautambuddha.immigration.gov.np',
  },
  {
    name: 'Immigration Office, Pokhara International Airport',
    location: 'Pokhara',
    url: 'http://pokharaairport.immigration.gov.np',
  },
  {
    name: 'Immigration Office Tribhuwan International Airport',
    location: 'Kathmandu',
    url: 'http://tia.immigration.gov.np',
  },
  {
    name: 'Immigration Office, Pokhara',
    location: 'Pokhara',
    url: 'http://pokhara.immigration.gov.np',
  },
  {
    name: 'Immigration Office Kakarvitta',
    location: 'Jhapa',
    url: 'http://kakarvitta.immigration.gov.np',
  },
  {
    name: 'Immigration Office Birganj',
    location: 'Parsa',
    url: 'http://birganj.immigration.gov.np',
  },
  {
    name: 'Immigration Office Kodari',
    location: 'Sindhupalchok',
    url: 'http://kodari.immigration.gov.np',
  },
  {
    name: 'Immigration Office Belahia',
    location: 'Rupandehi',
    url: 'http://belahia.immigration.gov.np',
  },
  {
    name: 'Immigration Office Jamunaha',
    location: 'Banke',
    url: 'http://jamunaha.immigration.gov.np',
  },
  {
    name: 'Immigration Office Mohana',
    location: 'Kailali',
    url: 'http://mohana.immigration.gov.np',
  },
  {
    name: 'Immigration Office Gaddhachauki',
    location: 'Kanchanpur',
    url: 'http://gaddachauki.immigration.gov.np',
  },
  {
    name: 'Immigration Office Rasuwa',
    location: 'Rasuwa',
    url: 'http://rasuwagadhi.immigration.gov.np',
  },
  {
    name: 'IMMIGRATION OFFICE, BIRATNAGAR',
    location: 'Morang',
    url: 'http://biratnagar.immigration.gov.np',
  },
  {
    name: 'Immigration Office, Pashupatinagar',
    location: 'Ilam',
    url: 'http://pashupatinagar.immigration.gov.np',
  },
];

export default function Network() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredOffice, setHoveredOffice] = useState<number | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newPosition = direction === 'left' 
        ? scrollPosition - scrollAmount 
        : scrollPosition + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
      setScrollPosition(newPosition);
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="network"
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div 
          className={`flex items-center justify-between mb-10 transition-all duration-700 ease-expo-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gov-success/10 rounded-xl flex items-center justify-center">
              <MapPin className="w-6 h-6 text-gov-success" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gov-dark">Immigration Network</h2>
              <p className="text-gov-gray">Our offices across Nepal</p>
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-gov-gray-lighter flex items-center justify-center text-gov-gray hover:bg-gov-red hover:text-white hover:border-gov-red transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-gov-gray-lighter flex items-center justify-center text-gov-gray hover:bg-gov-red hover:text-white hover:border-gov-red transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {offices.map((office, index) => (
            <a
              key={office.name}
              href={office.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex-shrink-0 w-72 snap-start bg-gov-off-white rounded-2xl p-5 transition-all duration-500 ease-spring hover:bg-white hover:shadow-card-hover ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: `${50 + index * 50}ms`,
                transform: hoveredOffice === index ? 'translateY(-8px)' : 'translateY(0)'
              }}
              onMouseEnter={() => setHoveredOffice(index)}
              onMouseLeave={() => setHoveredOffice(null)}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm transition-all duration-300 group-hover:bg-gov-red group-hover:text-white">
                  <Building2 className="w-6 h-6 text-gov-gray group-hover:text-white transition-colors duration-300" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gov-dark text-sm leading-tight mb-2 line-clamp-2 group-hover:text-gov-red transition-colors duration-300">
                    {office.name}
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-gov-gray">
                    <MapPin className="w-3 h-3" />
                    <span>{office.location}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gov-gray-lighter/50">
                <span className="text-xs text-gov-gray-light">Visit Website</span>
                <ExternalLink className="w-4 h-4 text-gov-gray-light opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:text-gov-red" />
              </div>
            </a>
          ))}
        </div>

        {/* Mobile Scroll Indicator */}
        <div className="flex md:hidden items-center justify-center gap-2 mt-4">
          <div className="flex items-center gap-1">
            {offices.slice(0, 5).map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === 0 ? 'w-4 bg-gov-red' : 'bg-gov-gray-lighter'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Info Banner */}
        <div 
          className={`mt-10 bg-gradient-to-r from-gov-red/5 to-gov-blue/5 rounded-2xl p-6 transition-all duration-700 ease-expo-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                <MapPin className="w-6 h-6 text-gov-red" />
              </div>
              <div>
                <h4 className="font-semibold text-gov-dark">Need to find an office?</h4>
                <p className="text-sm text-gov-gray">Use our office locator to find the nearest immigration office</p>
              </div>
            </div>
            <a
              href="#office-locator"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gov-red hover:bg-gov-red-dark text-white font-semibold rounded-lg transition-all duration-300 ease-spring hover:scale-105"
            >
              Find Office
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
