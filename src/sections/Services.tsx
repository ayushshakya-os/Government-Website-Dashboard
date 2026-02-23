import { useEffect, useRef, useState } from 'react';
import { 
  FileText, 
  HelpCircle, 
  MapPin, 
  Globe, 
  Building2, 
  Users,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: FileText,
    title: 'Citizen Charter',
    description: 'Information about all the services provided by the Department of Immigration.',
    href: '#citizen-charter',
    color: 'from-gov-red to-gov-red-dark',
    bgColor: 'bg-gov-red/5',
  },
  {
    icon: HelpCircle,
    title: 'FAQ',
    description: 'Answers to most of the queries we receive from applicants and visitors.',
    href: '#faq',
    color: 'from-gov-blue to-gov-blue-light',
    bgColor: 'bg-gov-blue/5',
  },
  {
    icon: MapPin,
    title: 'Entry/Exit Points',
    description: 'A map showing all entry and exit points with contact information.',
    href: '#entry-exit',
    color: 'from-gov-success to-gov-info',
    bgColor: 'bg-gov-success/5',
  },
  {
    icon: Globe,
    title: 'Online Visa Application',
    description: 'Apply for VISA, Extension, Conversion, Trekking Permit, and more.',
    href: '#visa-application',
    color: 'from-gov-warning to-gov-red',
    bgColor: 'bg-gov-warning/5',
  },
  {
    icon: Building2,
    title: 'Subordinate Offices',
    description: 'Information about all subordinate offices, locations, and contacts.',
    href: '#offices',
    color: 'from-gov-info to-gov-blue',
    bgColor: 'bg-gov-info/5',
  },
  {
    icon: Users,
    title: 'Employee Details',
    description: 'Information about all employees along with their department details.',
    href: '#employees',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-500/5',
  },
];

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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

  return (
    <section 
      ref={sectionRef}
      id="services"
      className="py-20 bg-gov-off-white relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gov-red/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gov-blue/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div 
          className={`text-center mb-14 transition-all duration-700 ease-expo-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gov-dark mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gov-gray max-w-2xl mx-auto">
            Comprehensive immigration services at your fingertips. 
            We are committed to providing efficient and transparent services.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <a
              key={service.title}
              href={service.href}
              className={`group relative bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-500 ease-spring ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ 
                transitionDelay: `${100 + index * 100}ms`,
                transform: hoveredIndex === index ? 'translateY(-8px)' : 'translateY(0)'
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Icon */}
              <div 
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-5 transition-all duration-500 ease-spring group-hover:scale-110 group-hover:rotate-3`}
              >
                <service.icon className="w-7 h-7" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gov-dark mb-3 group-hover:text-gov-red transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gov-gray text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Link */}
              <div className="flex items-center gap-2 text-gov-red font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>

              {/* Hover Border Effect */}
              <div 
                className={`absolute inset-0 rounded-2xl border-2 border-gov-red transition-all duration-300 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`} 
                style={{ pointerEvents: 'none' }}
              />
            </a>
          ))}
        </div>

        {/* Additional Info */}
        <div 
          className={`mt-14 text-center transition-all duration-700 ease-expo-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <div className="inline-flex items-center gap-4 px-6 py-4 bg-white rounded-xl shadow-card">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gov-success/10 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-gov-success" />
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-gov-dark">Online Services Available 24/7</div>
                <div className="text-xs text-gov-gray">Apply for visa and permits anytime</div>
              </div>
            </div>
            <div className="w-px h-10 bg-gov-gray-lighter" />
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gov-info/10 rounded-lg flex items-center justify-center">
                <HelpCircle className="w-5 h-5 text-gov-info" />
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-gov-dark">Need Help?</div>
                <div className="text-xs text-gov-gray">Call: +977-01-4529659</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
