import { useEffect, useRef } from 'react';
import { ArrowDown, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];
    const particleCount = 60;
    const connectionDistance = 150;
    const colors = ['#6366f1', '#8b5cf6', '#06b6d4'];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = particle.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      for (let i = 0; i < particles.length; i++) {
        let connections = 0;
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance && connections < 3) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            const opacity = 0.15 * (1 - distance / connectionDistance);
            ctx.strokeStyle = `rgba(99, 102, 241, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
            connections++;
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    resize();
    createParticles();
    animate();

    window.addEventListener('resize', () => {
      resize();
      createParticles();
    });

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.8 }}
      />

      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, transparent 70%)',
            filter: 'blur(60px)',
            animation: 'float 8s ease-in-out infinite',
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)',
            filter: 'blur(60px)',
            animation: 'float 10s ease-in-out infinite reverse',
          }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, transparent 70%)',
            filter: 'blur(50px)',
            animation: 'float 12s ease-in-out infinite',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Eyebrow */}
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 animate-fade-in">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-zinc-400">
                Nikolaos Papadopoulos
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight mb-6 animate-slide-up">
              <span className="gradient-text">DATA SCIENTIST</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-zinc-400 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed animate-slide-up animation-delay-200">
              Transforming complex data into actionable insights through statistical modeling,
              machine learning, and predictive analytics.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-slide-up animation-delay-400">
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-6 text-base font-medium group"
              >
                View My Projects
                <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={scrollToContact}
                className="border-white/20 hover:bg-white/5 hover:border-white/40 px-8 py-6 text-base"
              >
                Get In Touch
              </Button>
            </div>

            {/* Stats */}
            <div className="flex justify-center lg:justify-start gap-8 animate-slide-up animation-delay-600">
              {[
                { value: '9+', label: 'Projects' },
                { value: '5+', label: 'Years Exp.' },
                { value: '15+', label: 'Methods' },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-zinc-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Neural Network Visual */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md">
              {/* Central Node */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center glow-indigo animate-pulse-glow">
                <span className="text-3xl font-bold text-white">NP</span>
              </div>

              {/* Orbiting Nodes */}
              {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                <div
                  key={i}
                  className="absolute w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center"
                  style={{
                    top: `calc(50% + ${Math.sin((angle * Math.PI) / 180) * 120}px - 24px)`,
                    left: `calc(50% + ${Math.cos((angle * Math.PI) / 180) * 120}px - 24px)`,
                    animation: `float ${4 + i * 0.5}s ease-in-out infinite`,
                    animationDelay: `${i * 0.2}s`,
                  }}
                >
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{
                      background: i % 2 === 0 ? '#6366f1' : '#8b5cf6',
                      boxShadow: `0 0 10px ${i % 2 === 0 ? '#6366f1' : '#8b5cf6'}`,
                    }}
                  />
                </div>
              ))}

              {/* Outer Ring */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-zinc-800/50"
                style={{ animation: 'spin-slow 60s linear infinite' }}
              >
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-cyan-500"
                    style={{
                      top: `calc(50% + ${Math.sin((angle * Math.PI) / 180) * 144}px - 4px)`,
                      left: `calc(50% + ${Math.cos((angle * Math.PI) / 180) * 144}px - 4px)`,
                      boxShadow: '0 0 8px #06b6d4',
                    }}
                  />
                ))}
              </div>

              {/* Connection Lines SVG */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 400 400"
                style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '300px', height: '300px' }}
              >
                {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                  <line
                    key={i}
                    x1="200"
                    y1="200"
                    x2={200 + Math.cos((angle * Math.PI) / 180) * 120}
                    y2={200 + Math.sin((angle * Math.PI) / 180) * 120}
                    stroke="url(#lineGradient)"
                    strokeWidth="1"
                    opacity="0.3"
                  />
                ))}
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-subtle">
        <span className="text-xs text-zinc-500 uppercase tracking-wider">Scroll</span>
        <ChevronDown className="w-5 h-5 text-zinc-500" />
      </div>
    </section>
  );
}
