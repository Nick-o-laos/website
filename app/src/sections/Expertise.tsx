import { BarChart3, Brain, TrendingUp, Database } from 'lucide-react';

const expertiseData = [
  {
    icon: BarChart3,
    title: 'Statistical Analysis',
    description:
      'Bayesian inference, time series analysis, hypothesis testing, and Monte Carlo simulations for robust statistical modeling.',
    skills: ['Bayesian Methods', 'A/B Testing', 'Regression', 'MCMC'],
    color: 'from-indigo-500 to-blue-500',
  },
  {
    icon: Brain,
    title: 'Machine Learning',
    description:
      'Predictive modeling, clustering algorithms, and deep learning applications for pattern recognition and forecasting.',
    skills: ['Scikit-learn', 'TensorFlow', 'Neural Networks', 'NLP'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: TrendingUp,
    title: 'Financial Modeling',
    description:
      'Risk analysis, derivatives pricing, portfolio optimization, and quantitative trading strategies.',
    skills: ['Risk Models', 'Black-Scholes', 'Portfolio Theory', 'DeFi'],
    color: 'from-cyan-500 to-teal-500',
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description:
      'Pipeline architecture, ETL processes, and database optimization for large-scale data operations.',
    skills: ['SQL', 'Pandas', 'ETL', 'Big Data'],
    color: 'from-emerald-500 to-green-500',
  },
];

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Header */}
          <div className="lg:col-span-2 lg:sticky lg:top-32">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-indigo-400 mb-4">
              What I Do
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              My{' '}
              <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Combining statistical rigor with modern computational methods to solve complex
              problems across finance, economics, and technology.
            </p>

            {/* Decorative line */}
            <div className="mt-8 w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
          </div>

          {/* Cards Grid */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-6">
            {expertiseData.map((item, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Hover glow effect */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                >
                  <item.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-indigo-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700 hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Corner accent */}
                <div
                  className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${item.color} opacity-5 rounded-tr-2xl rounded-bl-full`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
