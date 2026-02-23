import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Camera, X } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: '/gallery-1.jpg',
    title: 'Inauguration of New Immigration Office Building',
    description: 'Modern government office interior with state-of-the-art facilities',
  },
  {
    id: 2,
    src: '/gallery-2.jpg',
    title: 'Annual Review Program',
    description: 'Ministry officials discussing annual performance and future plans',
  },
  {
    id: 3,
    src: '/gallery-3.jpg',
    title: 'Training Completion Ceremony',
    description: 'Government employees receiving certificates after 5-day orientation',
  },
  {
    id: 4,
    src: '/gallery-4.jpg',
    title: 'Employee Welcome Event',
    description: 'Colleagues welcoming new team members to the department',
  },
  {
    id: 5,
    src: '/gallery-5.jpg',
    title: 'Launch of Online Payment System',
    description: 'Digital transformation initiative for easier service access',
  },
];

export default function Gallery() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section 
      ref={sectionRef}
      id="gallery"
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
            <div className="w-12 h-12 bg-gov-blue/10 rounded-xl flex items-center justify-center">
              <Camera className="w-6 h-6 text-gov-blue" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gov-dark">Image Gallery</h2>
              <p className="text-gov-gray">Moments from our events and activities</p>
            </div>
          </div>
          
          {/* Navigation Arrows - Desktop */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-gov-gray-lighter flex items-center justify-center text-gov-gray hover:bg-gov-red hover:text-white hover:border-gov-red transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border border-gov-gray-lighter flex items-center justify-center text-gov-gray hover:bg-gov-red hover:text-white hover:border-gov-red transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="relative overflow-hidden">
          <div 
            className="flex gap-6 transition-transform duration-500 ease-expo-out"
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className={`flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 transition-all duration-700 ease-spring ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
                style={{ transitionDelay: `${100 + index * 100}ms` }}
              >
                <div 
                  className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover cursor-pointer transition-all duration-500 hover:-translate-y-2"
                  onClick={() => setSelectedImage(image)}
                >
                  {/* Image */}
                  <div className="aspect-[3/2] overflow-hidden">
                    <img 
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-expo-out group-hover:scale-110"
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gov-dark/90 via-gov-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="text-white font-semibold mb-1 line-clamp-2">
                        {image.title}
                      </h3>
                      <p className="text-white/70 text-sm line-clamp-2">
                        {image.description}
                      </p>
                    </div>
                  </div>

                  {/* Hover Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <Camera className="w-5 h-5 text-gov-dark" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex sm:hidden items-center justify-center gap-4 mt-6">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full border border-gov-gray-lighter flex items-center justify-center text-gov-gray hover:bg-gov-red hover:text-white hover:border-gov-red transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          {/* Dots */}
          <div className="flex items-center gap-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-6 bg-gov-red' : 'bg-gov-gray-lighter'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full border border-gov-gray-lighter flex items-center justify-center text-gov-gray hover:bg-gov-red hover:text-white hover:border-gov-red transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* View All Link */}
        <div className="text-center mt-8">
          <a
            href="#all-gallery"
            className="inline-flex items-center gap-2 text-gov-red font-medium hover:gap-3 transition-all duration-300"
          >
            View All Photos
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-gov-dark/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div 
            className="max-w-4xl w-full animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full rounded-2xl"
            />
            <div className="mt-4 text-center">
              <h3 className="text-white text-xl font-semibold">{selectedImage.title}</h3>
              <p className="text-white/60 mt-1">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
