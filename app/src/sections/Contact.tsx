import { Mail, Linkedin, Github, Send, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'nickolaos@example.com',
    href: 'mailto:nickolaos@example.com',
    color: 'from-indigo-500 to-blue-500',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/nickolaos',
    href: 'https://linkedin.com/in/nickolaos',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/Nick-o-laos',
    href: 'https://github.com/Nick-o-laos',
    color: 'from-purple-500 to-pink-500',
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 shimmer">
          Let's Work Together
        </h2>

        {/* Description */}
        <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-12">
          Have a project in mind? Let's discuss how data science can drive your business forward.
        </p>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group relative p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Gradient background on hover */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              {/* Icon */}
              <div
                className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}
              >
                <method.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-white mb-1">{method.label}</h3>
              <p className="text-sm text-zinc-400 mb-3">{method.value}</p>

              {/* Arrow */}
              <div className="flex justify-center">
                <ArrowUpRight className="w-5 h-5 text-zinc-600 group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

              {/* Border glow */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-indigo-500/30 transition-colors" />
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div>
          <Button
            size="lg"
            className="relative group bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-6 text-lg font-medium overflow-hidden"
          >
            {/* Glow effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-50 blur-xl transition-opacity" />
            
            <span className="relative flex items-center">
              <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
              Send Me a Message
            </span>
          </Button>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-3 h-3 rounded-full bg-purple-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-1/3 right-20 w-2 h-2 rounded-full bg-cyan-500 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
    </section>
  );
}
