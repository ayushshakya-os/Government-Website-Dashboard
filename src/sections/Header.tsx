import { useState, useEffect } from 'react';
import { Search, MapPin, ChevronDown, Menu, X, Building2, FileArchive, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const navItems = [
  { label: 'About Us', href: '#about', hasDropdown: true },
  { label: 'Visa', href: '#visa', hasDropdown: true },
  { label: 'Trekking', href: '#trekking', hasDropdown: false },
  { label: 'Visa Law', href: '#visa-law', hasDropdown: true },
  { label: 'Publication', href: '#publication', hasDropdown: false },
  { label: 'Citizen Charter', href: '#services', hasDropdown: false },
  { label: 'FAQ', href: '#faq', hasDropdown: false },
  { label: 'Contact', href: '#contact', hasDropdown: false },
];

const quickActions = [
  { icon: Building2, label: 'Immigration Offices', href: '#offices' },
  { icon: FileArchive, label: 'Archive', href: '#archive' },
  { icon: Phone, label: 'Contact Us', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 w-full bg-white transition-all duration-500 ease-expo-out ${
        isScrolled ? 'shadow-lg h-16' : 'shadow-sm h-20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full gap-4">
          {/* Logo Section */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div 
              className={`relative transition-all duration-500 ease-spring ${
                isScrolled ? 'w-10 h-10' : 'w-12 h-12'
              }`}
            >
              <div className="w-full h-full bg-gov-red rounded-lg flex items-center justify-center text-white font-bold text-xl animate-scale-in">
                <svg viewBox="0 0 24 24" className="w-3/4 h-3/4" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 
                className={`font-bold text-gov-dark leading-tight transition-all duration-500 ${
                  isScrolled ? 'text-sm' : 'text-base'
                }`}
              >
                Department of Immigration
              </h1>
              <p 
                className={`text-gov-gray transition-all duration-500 ${
                  isScrolled ? 'text-xs' : 'text-sm'
                }`}
              >
                Ministry of Home Affairs
              </p>
              <div 
                className={`flex items-center gap-1 text-gov-gray-light transition-all duration-500 ${
                  isScrolled ? 'text-[10px]' : 'text-xs'
                }`}
              >
                <MapPin className="w-3 h-3" />
                <span>Kalikasthan, Kathmandu</span>
              </div>
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-md">
            <div 
              className={`relative w-full transition-all duration-300 ease-expo-out ${
                searchFocused ? 'scale-105' : ''
              }`}
            >
              <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-200 ${
                searchFocused ? 'text-gov-red' : 'text-gov-gray'
              }`} />
              <Input 
                type="text"
                placeholder="Search services, forms, information..."
                className="pl-10 pr-4 h-10 w-full border-gov-gray-lighter focus:border-gov-red focus:ring-gov-red/20 transition-all duration-200"
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
            </div>
          </div>

          {/* Quick Actions - Desktop */}
          <div className="hidden xl:flex items-center gap-2">
            {quickActions.map((action, index) => (
              <a
                key={action.label}
                href={action.href}
                className="flex items-center gap-2 px-3 py-2 text-sm text-gov-gray hover:text-gov-red hover:bg-gov-red/5 rounded-lg transition-all duration-200 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <action.icon className="w-4 h-4" />
                <span>{action.label}</span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <Button 
            className="hidden sm:flex bg-gov-red hover:bg-gov-red-dark text-white font-semibold px-6 transition-all duration-300 ease-spring hover:scale-105 hover:shadow-gov"
          >
            Apply VISA
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gov-dark hover:text-gov-red transition-colors duration-200"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Navigation Bar - Desktop */}
      <nav className="hidden lg:block border-t border-gov-gray-lighter bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex items-center gap-1">
            {navItems.map((item, index) => (
              <li 
                key={item.label}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className="flex items-center gap-1 px-4 py-3 text-sm font-medium text-gov-dark hover:text-gov-red transition-colors duration-200 animate-underline-grow"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.label ? 'rotate-180' : ''
                    }`} />
                  )}
                </a>
                
                {/* Dropdown */}
                {item.hasDropdown && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 w-48 bg-white shadow-card-hover rounded-b-lg border-t-2 border-gov-red animate-slide-down z-50">
                    <div className="py-2">
                      <a href="#" className="block px-4 py-2 text-sm text-gov-dark hover:bg-gov-red/5 hover:text-gov-red transition-colors duration-200">
                        Overview
                      </a>
                      <a href="#" className="block px-4 py-2 text-sm text-gov-dark hover:bg-gov-red/5 hover:text-gov-red transition-colors duration-200">
                        Guidelines
                      </a>
                      <a href="#" className="block px-4 py-2 text-sm text-gov-dark hover:bg-gov-red/5 hover:text-gov-red transition-colors duration-200">
                        Procedures
                      </a>
                      <a href="#" className="block px-4 py-2 text-sm text-gov-dark hover:bg-gov-red/5 hover:text-gov-red transition-colors duration-200">
                        Downloads
                      </a>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-white z-40 animate-slide-down">
          <div className="p-4">
            {/* Mobile Search */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gov-gray" />
              <Input 
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 h-12 w-full"
              />
            </div>

            {/* Mobile Nav Items */}
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="flex items-center justify-between px-4 py-3 text-gov-dark hover:bg-gov-red/5 hover:text-gov-red rounded-lg transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="font-medium">{item.label}</span>
                    {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Quick Actions */}
            <div className="mt-4 pt-4 border-t border-gov-gray-lighter">
              <div className="grid grid-cols-3 gap-2">
                {quickActions.map((action) => (
                  <a
                    key={action.label}
                    href={action.href}
                    className="flex flex-col items-center gap-2 p-3 text-center text-gov-gray hover:text-gov-red hover:bg-gov-red/5 rounded-lg transition-colors duration-200"
                  >
                    <action.icon className="w-5 h-5" />
                    <span className="text-xs">{action.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile CTA */}
            <Button className="w-full mt-4 bg-gov-red hover:bg-gov-red-dark text-white font-semibold h-12">
              Apply VISA
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
