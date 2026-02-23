import { useEffect, useRef, useState } from 'react';
import { Building2, FileArchive, Phone, ChevronDown, ArrowRight } from 'lucide-react';

const quickActions = [
  { 
    icon: Building2, 
    label: 'Immigration Offices', 
    description: 'Find offices near you',
    href: '#offices',
    color: 'from-gov-red to-gov-red-dark'
  },
  { 
    icon: FileArchive, 
    label: 'Archive', 
    description: 'Access past records',
    href: '#archive',
    color: 'from-gov-blue to-gov-blue-light'
  },
  { 
    icon: Phone, 
    label: 'Contact Us', 
    description: 'Get in touch',
    href: '#contact',
    color: 'from-gov-success to-gov-info'
  },
];

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-br from-gov-off-white via-white to-gov-gray-lighter/30"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating Decorative Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-20 right-20 w-64 h-64 bg-gov-red/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '0s' }}
        />
        <div 
          className="absolute bottom-40 left-10 w-48 h-48 bg-gov-blue/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '2s' }}
        />
        <div 
          className="absolute top-1/2 right-1/4 w-32 h-32 bg-gov-red/10 rounded-full blur-2xl animate-float"
          style={{ animationDelay: '4s' }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-16 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div 
              className={`inline-flex items-center gap-2 px-4 py-2 bg-gov-red/10 rounded-full transition-all duration-700 ease-expo-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="w-2 h-2 bg-gov-red rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gov-red">Government of Nepal</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 
                className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gov-dark leading-tight transition-all duration-700 delay-100 ease-expo-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                Department of
                <span className="block text-gradient mt-2">Immigration</span>
              </h1>
              <p 
                className={`text-xl text-gov-gray font-medium transition-all duration-700 delay-200 ease-expo-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                Ministry of Home Affairs
              </p>
            </div>

            {/* Description */}
            <p 
              className={`text-lg text-gov-gray-light max-w-lg leading-relaxed transition-all duration-700 delay-300 ease-expo-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              Serving citizens with efficient, transparent, and accessible immigration services. 
              Your gateway to seamless visa and immigration solutions.
            </p>

            {/* CTA Buttons */}
            <div 
              className={`flex flex-wrap gap-4 transition-all duration-700 delay-400 ease-expo-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gov-red hover:bg-gov-red-dark text-white font-semibold rounded-lg transition-all duration-300 ease-spring hover:scale-105 hover:shadow-gov group"
              >
                Explore Services
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gov-dark text-gov-dark font-semibold rounded-lg hover:bg-gov-dark hover:text-white transition-all duration-300 ease-spring"
              >
                Learn More
              </a>
            </div>

            {/* Stats */}
            <div 
              className={`flex gap-8 pt-4 transition-all duration-700 delay-500 ease-expo-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <div>
                <div className="text-3xl font-bold text-gov-red">50+</div>
                <div className="text-sm text-gov-gray">Years of Service</div>
              </div>
              <div className="w-px bg-gov-gray-lighter" />
              <div>
                <div className="text-3xl font-bold text-gov-blue">1M+</div>
                <div className="text-sm text-gov-gray">Applications Processed</div>
              </div>
              <div className="w-px bg-gov-gray-lighter" />
              <div>
                <div className="text-3xl font-bold text-gov-success">24/7</div>
                <div className="text-sm text-gov-gray">Online Services</div>
              </div>
            </div>
          </div>

          {/* Right Content - Quick Action Cards */}
          <div className="relative">
            {/* Background Image */}
            <div 
              className={`relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-1000 delay-300 ease-expo-out ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              <img 
                src="/hero-building.jpg" 
                alt="Immigration Department Building"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gov-dark/80 via-gov-dark/20 to-transparent" />
              
              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white/80 text-sm mb-2">Kalikasthan, Kathmandu</p>
                <h3 className="text-white text-xl font-bold">Main Headquarters</h3>
              </div>
            </div>

            {/* Floating Quick Action Cards */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-full max-w-md">
              <div className="grid grid-cols-3 gap-3">
                {quickActions.map((action, index) => (
                  <a
                    key={action.label}
                    href={action.href}
                    className={`group relative bg-white rounded-xl shadow-card hover:shadow-card-hover p-4 text-center transition-all duration-500 ease-spring hover:-translate-y-2 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${600 + index * 100}ms` }}
                  >
                    <div className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br ${action.color} flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110`}>
                      <action.icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-sm font-semibold text-gov-dark mb-1">{action.label}</h4>
                    <p className="text-xs text-gov-gray-light">{action.description}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gov-gray animate-bounce-subtle">
        <span className="text-xs font-medium">Scroll to explore</span>
        <ChevronDown className="w-5 h-5" />
      </div>
    </section>
  );
}
