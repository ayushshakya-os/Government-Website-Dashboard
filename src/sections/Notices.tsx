import { useEffect, useRef, useState } from 'react';
import { Calendar, User, ArrowRight, Bell } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const notices = [
  {
    id: 1,
    title: 'Urgent Notice Regarding Enrollment in the Foreign Nationals Management Information System (FNMIS)',
    department: 'Administration Section',
    date: '27 January',
    daysAgo: '27 days ago',
    type: 'urgent',
    featured: true,
  },
  {
    id: 2,
    title: 'Urgent Notice Regarding Temporary Suspension of Services',
    department: 'IT Section',
    date: '02 January',
    daysAgo: '1 month ago',
    type: 'notice',
    featured: false,
  },
  {
    id: 3,
    title: 'Foreign Nationals Management Information System (FNMIS) - Online Registration Link',
    department: 'Administration Section',
    date: '31 December',
    daysAgo: '1 month ago',
    type: 'news',
    featured: false,
  },
  {
    id: 4,
    title: 'Information Notice - Updated Guidelines for Visa Applications',
    department: 'Visa Section',
    date: '29 December',
    daysAgo: '1 month ago',
    type: 'notice',
    featured: false,
  },
  {
    id: 5,
    title: 'Implementation of the Foreign Nationals Management Information System',
    department: 'IT Section',
    date: '22 December',
    daysAgo: '2 months ago',
    type: 'urgent',
    featured: false,
  },
];

const getBadgeColor = (type: string) => {
  switch (type) {
    case 'urgent':
      return 'bg-gov-red text-white hover:bg-gov-red-dark';
    case 'news':
      return 'bg-gov-blue text-white hover:bg-gov-blue';
    default:
      return 'bg-gov-gray text-white hover:bg-gov-gray';
  }
};

export default function Notices() {
  const [isVisible, setIsVisible] = useState(false);
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

  const featuredNotice = notices.find(n => n.featured);
  const regularNotices = notices.filter(n => !n.featured);

  return (
    <section 
      ref={sectionRef}
      id="notices"
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
            <div className="w-12 h-12 bg-gov-red/10 rounded-xl flex items-center justify-center">
              <Bell className="w-6 h-6 text-gov-red" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gov-dark">Highlights</h2>
              <p className="text-gov-gray">Latest updates and announcements</p>
            </div>
          </div>
          <a 
            href="#all-notices" 
            className="hidden sm:flex items-center gap-2 text-gov-red font-medium hover:gap-3 transition-all duration-300"
          >
            View All Notices
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Notices List - Takes 3 columns */}
          <div className="lg:col-span-3 space-y-4">
            {regularNotices.map((notice, index) => (
              <a
                key={notice.id}
                href={`#notice-${notice.id}`}
                className={`group block bg-white border-l-4 border-gov-red rounded-r-xl p-5 shadow-card hover:shadow-card-hover hover:bg-gov-off-white transition-all duration-500 ease-expo-out ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                }`}
                style={{ transitionDelay: `${100 + index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  {/* Date Badge */}
                  <div className="flex-shrink-0 w-16 text-center">
                    <div className="bg-gov-red/10 rounded-lg p-2">
                      <div className="text-lg font-bold text-gov-red">{notice.date.split(' ')[0]}</div>
                      <div className="text-xs text-gov-gray">{notice.date.split(' ')[1]}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className={`${getBadgeColor(notice.type)} text-xs capitalize`}>
                        {notice.type}
                      </Badge>
                      <span className="text-xs text-gov-gray-light">{notice.daysAgo}</span>
                    </div>
                    <h3 className="font-semibold text-gov-dark group-hover:text-gov-red transition-colors duration-300 line-clamp-2">
                      {notice.title}
                    </h3>
                    {notice.department && (
                      <div className="flex items-center gap-1 mt-2 text-xs text-gov-gray">
                        <User className="w-3 h-3" />
                        <span>{notice.department}</span>
                      </div>
                    )}
                  </div>

                  {/* Arrow */}
                  <ArrowRight className="w-5 h-5 text-gov-gray-light group-hover:text-gov-red group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
                </div>
              </a>
            ))}

            {/* Mobile View All */}
            <a 
              href="#all-notices" 
              className="sm:hidden flex items-center justify-center gap-2 py-3 text-gov-red font-medium border border-gov-red/20 rounded-lg hover:bg-gov-red/5 transition-colors duration-200"
            >
              View All Notices
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Featured Notice - Takes 2 columns */}
          <div className="lg:col-span-2">
            {featuredNotice && (
              <div 
                className={`relative bg-gov-dark rounded-2xl overflow-hidden shadow-xl h-full transition-all duration-700 ease-spring ${
                  isVisible ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-8 rotate-2'
                }`}
                style={{ transitionDelay: '300ms' }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <pattern id="featured-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="1" cy="1" r="1" fill="white" />
                    </pattern>
                    <rect width="100" height="100" fill="url(#featured-grid)" />
                  </svg>
                </div>

                <div className="relative p-6 h-full flex flex-col">
                  {/* Featured Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <Badge className="bg-gov-red text-white">
                      Featured
                    </Badge>
                    <div className="flex items-center gap-2 text-white/60 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredNotice.date}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-4 line-clamp-4">
                      {featuredNotice.title}
                    </h3>
                    <p className="text-white/70 text-sm mb-6">
                      Important announcement regarding the new Foreign Nationals Management Information System 
                      implementation. All foreign nationals are required to enroll.
                    </p>
                  </div>

                  {/* CTA */}
                  <a
                    href={`#notice-${featuredNotice.id}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gov-red hover:bg-gov-red-dark text-white font-semibold rounded-lg transition-all duration-300 ease-spring hover:scale-105 group"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
