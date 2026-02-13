import { useState, useEffect, useRef } from 'react';
import { Download, Mail, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const stats = [
  { value: 9, suffix: '+', label: 'Projects Completed' },
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 15, suffix: '+', label: 'Statistical Methods' },
];

export default function About() {
  const [counters, setCounters] = useState(stats.map(() => 0));
  const statsRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            stats.forEach((stat, index) => {
              let start = 0;
              const end = stat.value;
              const duration = 2000;
              const startTime = performance.now();

              const animate = (currentTime: number) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easeOut = 1 - Math.pow(1 - progress, 3);
                const current = Math.floor(start + (end - start) * easeOut);

                setCounters((prev) => {
                  const newCounters = [...prev];
                  newCounters[index] = current;
                  return newCounters;
                });

                if (progress < 1) {
                  requestAnimationFrame(animate);
                }
              };

              requestAnimationFrame(animate);
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="about"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Section */}
          <div className="relative">
            {/* Decorative frame */}
            <div className="absolute -inset-4 border border-zinc-800 rounded-3xl" />
            <div
              className="absolute -inset-8 border border-zinc-800/50 rounded-3xl"
              style={{ animation: 'spin-slow 60s linear infinite' }}
            />

            {/* Main image container */}
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900">
              {/* Placeholder for profile image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center glow-indigo">
                    <span className="text-5xl font-bold text-white">NP</span>
                  </div>
                  <p className="text-zinc-500 text-sm">Data Scientist</p>
                </div>
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />

              {/* Info badges */}
              <div className="absolute bottom-6 left-6 right-6 space-y-2">
                <div className="flex items-center gap-2 text-sm text-zinc-400">
                  <MapPin className="w-4 h-4 text-indigo-400" />
                  <span>Available Worldwide</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-zinc-400">
                  <Calendar className="w-4 h-4 text-purple-400" />
                  <span>5+ Years Experience</span>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div
              className="absolute -top-4 -right-4 w-20 h-20 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center animate-float"
              style={{ animationDelay: '0.5s' }}
            >
              <span className="text-2xl font-bold text-white">5+</span>
            </div>
            <div
              className="absolute -bottom-4 -left-4 w-16 h-16 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center animate-float"
              style={{ animationDelay: '1s' }}
            >
              <span className="text-xl font-bold gradient-text">PhD</span>
            </div>
          </div>

          {/* Content Section */}
          <div>
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-indigo-400 mb-4">
              Get To Know Me
            </span>

            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              About{' '}
              <span className="gradient-text">Me</span>
            </h2>

            <div className="space-y-4 text-zinc-400 leading-relaxed mb-8">
              <p>
                I'm a data scientist with a passion for uncovering insights hidden in complex
                datasets. With expertise in statistical modeling, machine learning, and financial
                analysis, I transform raw data into strategic decisions.
              </p>
              <p>
                My background spans quantitative finance, economic research, and predictive
                analytics. I specialize in Bayesian methods, time series forecasting, and risk
                modeling—techniques that have delivered measurable results across multiple
                industries.
              </p>
              <p>
                When I'm not analyzing data, you'll find me exploring new statistical methodologies,
                contributing to open-source projects, or sharing knowledge with the data science
                community.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={scrollToContact}
                className="border-white/20 hover:bg-white/5"
              >
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
            </div>

            {/* Stats */}
            <div ref={statsRef} className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 text-center"
                >
                  <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">
                    {counters[index]}
                    {stat.suffix}
                  </div>
                  <div className="text-xs text-zinc-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
