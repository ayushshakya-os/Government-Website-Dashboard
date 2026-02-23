import { useEffect, useRef, useState } from 'react';
import { ArrowRight, TrendingUp, TrendingDown, Users } from 'lucide-react';

interface CounterProps {
  end: number;
  duration: number;
  isVisible: boolean;
}

function Counter({ end, duration, isVisible }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function (expo-out)
      const eased = 1 - Math.pow(1 - progress, 3);
      
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isVisible]);

  return <span>{count.toLocaleString()}</span>;
}

export default function Statistics() {
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <section 
      ref={sectionRef}
      id="statistics"
      className="py-16 bg-gradient-dark relative overflow-hidden"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="stat-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#stat-grid)" />
        </svg>
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute -top-20 -left-20 w-80 h-80 bg-gov-red/20 rounded-full blur-3xl animate-float"
          style={{ animationDuration: '15s' }}
        />
        <div 
          className="absolute -bottom-20 -right-20 w-80 h-80 bg-gov-blue/20 rounded-full blur-3xl animate-float"
          style={{ animationDuration: '20s', animationDelay: '5s' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div 
          className={`text-center mb-12 transition-all duration-700 ease-expo-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-4">
            <Users className="w-4 h-4 text-gov-red" />
            <span className="text-sm text-white/80">Daily Statistics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Entry/Exit Statistics
          </h2>
          <p className="text-white/60">
            Real-time data for {today}
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Entry Card */}
          <div 
            className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 transition-all duration-700 ease-spring hover:bg-white/10 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gov-success/20 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-gov-success" />
                </div>
                <div>
                  <div className="text-white/60 text-sm">Total Entry</div>
                  <div className="text-white font-semibold">Immigration Checkpoints</div>
                </div>
              </div>
            </div>

            <div className="text-5xl sm:text-6xl font-extrabold text-white mb-2 animate-pulse-glow">
              <Counter end={15432} duration={2000} isVisible={isVisible} />
            </div>
            <p className="text-white/60 text-sm">
              People entered through immigration checkpoints of Nepal today
            </p>

            {/* Mini Chart */}
            <div className="mt-6 flex items-end gap-1 h-16">
              {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 50, 95].map((height, i) => (
                <div 
                  key={i}
                  className="flex-1 bg-gov-success/30 rounded-t transition-all duration-300 hover:bg-gov-success/50"
                  style={{ 
                    height: `${height}%`,
                    animationDelay: `${i * 50}ms`
                  }}
                />
              ))}
            </div>
          </div>

          {/* Exit Card */}
          <div 
            className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 transition-all duration-700 ease-spring hover:bg-white/10 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gov-red/20 rounded-xl flex items-center justify-center">
                  <TrendingDown className="w-6 h-6 text-gov-red" />
                </div>
                <div>
                  <div className="text-white/60 text-sm">Total Exit</div>
                  <div className="text-white font-semibold">Immigration Checkpoints</div>
                </div>
              </div>
            </div>

            <div className="text-5xl sm:text-6xl font-extrabold text-white mb-2 animate-pulse-glow">
              <Counter end={12876} duration={2000} isVisible={isVisible} />
            </div>
            <p className="text-white/60 text-sm">
              People exited through immigration checkpoints of Nepal today
            </p>

            {/* Mini Chart */}
            <div className="mt-6 flex items-end gap-1 h-16">
              {[35, 55, 40, 70, 50, 85, 65, 75, 55, 70, 45, 90].map((height, i) => (
                <div 
                  key={i}
                  className="flex-1 bg-gov-red/30 rounded-t transition-all duration-300 hover:bg-gov-red/50"
                  style={{ 
                    height: `${height}%`,
                    animationDelay: `${i * 50}ms`
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div 
          className={`text-center mt-10 transition-all duration-700 ease-expo-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <a
            href="#entry-exit-detail"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gov-red hover:bg-gov-red-dark text-white font-semibold rounded-lg transition-all duration-300 ease-spring hover:scale-105 hover:shadow-gov group"
          >
            View Entry/Exit Details
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
