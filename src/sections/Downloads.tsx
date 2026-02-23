import { useEffect, useRef, useState } from 'react';
import { 
  Download, 
  FileText, 
  File, 
  BookOpen, 
  Scale, 
  ScrollText,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const downloads = [
  {
    id: 1,
    title: 'Appendix 13 - Expulsion Order',
    type: 'PDF',
    date: '2074-11-16',
    size: '245 KB',
  },
  {
    id: 2,
    title: 'Appendix 12 - Trekking Permit Fees',
    type: 'PDF',
    date: '2074-11-16',
    size: '180 KB',
  },
  {
    id: 3,
    title: 'Appendix 11 - Trekking Permit',
    type: 'PDF',
    date: '2074-11-16',
    size: '320 KB',
  },
  {
    id: 4,
    title: 'Appendix 10(a) - Trekking Permit Application (Agency)',
    type: 'PDF',
    date: '2074-11-16',
    size: '450 KB',
  },
  {
    id: 5,
    title: 'Appendix 10 - Trekking Permit Form',
    type: 'PDF',
    date: '2074-11-16',
    size: '280 KB',
  },
  {
    id: 6,
    title: 'Appendix 9 - Visa Fees',
    type: 'PDF',
    date: '2074-11-16',
    size: '195 KB',
  },
];

const tabContent = {
  directives: [
    { title: 'Immigration Directive 2080', date: '2023-06-15' },
    { title: 'Visa Processing Guidelines', date: '2023-05-20' },
    { title: 'Trekking Permit Regulations', date: '2023-04-10' },
    { title: 'Foreign Nationals Management Directive', date: '2023-03-01' },
  ],
  act: [
    { title: 'Immigration Act, 2049', date: '1992-01-01' },
    { title: 'Immigration Regulations, 2050', date: '1993-01-01' },
    { title: 'Foreign Employment Act, 2064', date: '2007-01-01' },
  ],
  regulation: [
    { title: 'Visa Regulation 2080', date: '2023-01-01' },
    { title: 'Passport Regulation 2079', date: '2022-06-01' },
    { title: 'Border Management Regulation', date: '2022-01-01' },
  ],
  latest: [
    { title: 'New Visa Fee Structure Effective 2081', date: '2024-01-15' },
    { title: 'Updated Trekking Permit Requirements', date: '2024-01-10' },
    { title: 'Online Application System Launch', date: '2024-01-05' },
    { title: 'Holiday Notice - Public Holidays 2081', date: '2024-01-01' },
  ],
};

const getFileIcon = (type: string) => {
  switch (type) {
    case 'PDF':
      return <FileText className="w-5 h-5 text-gov-red" />;
    case 'DOC':
      return <File className="w-5 h-5 text-gov-blue" />;
    default:
      return <File className="w-5 h-5 text-gov-gray" />;
  }
};

export default function Downloads() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredDownload, setHoveredDownload] = useState<number | null>(null);
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
      id="downloads"
      className="py-20 bg-gov-off-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div 
          className={`text-center mb-14 transition-all duration-700 ease-expo-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gov-dark mb-4">
            Downloads & Resources
          </h2>
          <p className="text-lg text-gov-gray max-w-2xl mx-auto">
            Access forms, directives, acts, and regulations related to immigration services
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Downloads List - Takes 2 columns */}
          <div className="lg:col-span-2">
            <div 
              className={`bg-white rounded-2xl shadow-card p-6 transition-all duration-700 ease-expo-out ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gov-red/10 rounded-lg flex items-center justify-center">
                  <Download className="w-5 h-5 text-gov-red" />
                </div>
                <h3 className="text-xl font-bold text-gov-dark">Downloads</h3>
              </div>

              <div className="space-y-3">
                {downloads.map((item, index) => (
                  <a
                    key={item.id}
                    href={`#download-${item.id}`}
                    className="group flex items-center gap-4 p-3 rounded-xl hover:bg-gov-off-white transition-all duration-300"
                    onMouseEnter={() => setHoveredDownload(item.id)}
                    onMouseLeave={() => setHoveredDownload(null)}
                    style={{ 
                      animationDelay: `${index * 50}ms`,
                      transform: hoveredDownload === item.id ? 'translateX(4px)' : 'translateX(0)'
                    }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-gov-red/5 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-gov-red/10 group-hover:rotate-6">
                      {getFileIcon(item.type)}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-gov-dark group-hover:text-gov-red transition-colors duration-300 line-clamp-1">
                        {item.title}
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="secondary" className="text-xs">
                          {item.type}
                        </Badge>
                        <span className="text-xs text-gov-gray-light">{item.size}</span>
                      </div>
                    </div>

                    <Download className="w-4 h-4 text-gov-gray-light opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:text-gov-red" />
                  </a>
                ))}
              </div>

              <a
                href="#all-downloads"
                className="flex items-center justify-center gap-2 mt-6 pt-4 border-t border-gov-gray-lighter text-gov-red font-medium hover:gap-3 transition-all duration-300"
              >
                View All Downloads
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Tabs Content - Takes 3 columns */}
          <div 
            className={`lg:col-span-3 transition-all duration-700 ease-expo-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <Tabs defaultValue="directives" className="w-full">
              <TabsList className="w-full grid grid-cols-4 bg-white p-1 rounded-xl mb-6">
                <TabsTrigger 
                  value="directives" 
                  className="flex items-center gap-2 data-[state=active]:bg-gov-red data-[state=active]:text-white rounded-lg transition-all duration-300"
                >
                  <ScrollText className="w-4 h-4" />
                  <span className="hidden sm:inline">Directives</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="act"
                  className="flex items-center gap-2 data-[state=active]:bg-gov-red data-[state=active]:text-white rounded-lg transition-all duration-300"
                >
                  <Scale className="w-4 h-4" />
                  <span className="hidden sm:inline">Act</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="regulation"
                  className="flex items-center gap-2 data-[state=active]:bg-gov-red data-[state=active]:text-white rounded-lg transition-all duration-300"
                >
                  <BookOpen className="w-4 h-4" />
                  <span className="hidden sm:inline">Regulation</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="latest"
                  className="flex items-center gap-2 data-[state=active]:bg-gov-red data-[state=active]:text-white rounded-lg transition-all duration-300"
                >
                  <FileText className="w-4 h-4" />
                  <span className="hidden sm:inline">Latest</span>
                </TabsTrigger>
              </TabsList>

              {Object.entries(tabContent).map(([key, items]) => (
                <TabsContent key={key} value={key} className="mt-0">
                  <div className="bg-white rounded-2xl shadow-card p-6">
                    <div className="space-y-4">
                      {items.map((item, index) => (
                        <a
                          key={index}
                          href={`#${key}-${index}`}
                          className="group flex items-center justify-between p-4 rounded-xl hover:bg-gov-off-white transition-all duration-300"
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-gov-blue/5 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-gov-blue/10">
                              <FileText className="w-5 h-5 text-gov-blue" />
                            </div>
                            <div>
                              <h4 className="font-medium text-gov-dark group-hover:text-gov-blue transition-colors duration-300">
                                {item.title}
                              </h4>
                              <p className="text-sm text-gov-gray-light">
                                Published: {item.date}
                              </p>
                            </div>
                          </div>
                          <ExternalLink className="w-4 h-4 text-gov-gray-light opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:text-gov-blue" />
                        </a>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
