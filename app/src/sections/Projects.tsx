import { useState } from 'react';
import { ExternalLink, Github, FileText, Download, BookOpen, Code } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'finance', label: 'Finance' },
  { id: 'statistics', label: 'Statistics' },
  { id: 'machine-learning', label: 'ML' },
  { id: 'economics', label: 'Economics' },
  { id: 'visualization', label: 'Viz' },
];

// File type definitions with icons and labels
const fileTypes = {
  pdf: { icon: FileText, label: 'PDF', color: 'text-red-400' },
  ipynb: { icon: BookOpen, label: 'Notebook', color: 'text-orange-400' },
  rmd: { icon: Code, label: 'R Markdown', color: 'text-blue-400' },
  py: { icon: Code, label: 'Python', color: 'text-yellow-400' },
  r: { icon: Code, label: 'R Script', color: 'text-blue-400' },
};

const projectsData = [
  {
    id: 1,
    title: 'Machine Learning in Finance',
    categories: ['finance', 'machine-learning'],
    description:
      'MCMC methods and clustering algorithms applied to stock prediction and DeFi derivatives pricing.',
    tech: ['Python', 'MCMC', 'GARCH', 'Black-Scholes'],
    links: { 
      github: 'https://github.com/Nick-o-laos/data-analysis-portfolio/tree/main/Portfolio/Machine%20Learning%20techniques%20in%20Finance',
    },
    files: [
      { type: 'pdf', name: 'ML_Finance_Report.pdf', path: '/files/ML_Finance_Report.pdf' },
      { type: 'ipynb', name: 'ML_Finance.ipynb', path: '/files/ML_Finance.ipynb' },
    ],
    color: 'from-indigo-500 to-purple-600',
  },
  {
    id: 2,
    title: 'Bitcoin Price Analysis',
    categories: ['finance', 'statistics'],
    description:
      'Time series forecasting and volatility modeling for cryptocurrency price prediction.',
    tech: ['R', 'ARIMA', 'Volatility Models'],
    links: { 
      github: 'https://github.com/Nick-o-laos/data-analysis-portfolio/tree/main/Portfolio/Bitcoin%20Analysis',
    },
    files: [
      { type: 'rmd', name: 'Bitcoin_Analysis.Rmd', path: '/files/Bitcoin_Analysis.Rmd' },
      { type: 'pdf', name: 'Bitcoin_Report.pdf', path: '/files/Bitcoin_Report.pdf' },
    ],
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 3,
    title: 'Loan Programs Analysis',
    categories: ['economics', 'statistics'],
    description:
      'Statistical analysis of PPP and EIDL loan distribution patterns and economic impact.',
    tech: ['Python', 'Pandas', 'Statistical Tests'],
    links: { 
      github: 'https://github.com/Nick-o-laos/data-analysis-portfolio/tree/main/Portfolio/PPP%20and%20EIDL%20Loan%20Programs%20Analysis',
    },
    files: [
      { type: 'ipynb', name: 'Loan_Analysis.ipynb', path: '/files/Loan_Analysis.ipynb' },
      { type: 'pdf', name: 'Loan_Report.pdf', path: '/files/Loan_Report.pdf' },
    ],
    color: 'from-emerald-500 to-teal-500',
  },
  {
    id: 4,
    title: 'Supply Chain Optimization',
    categories: ['machine-learning', 'visualization'],
    description:
      'Predictive modeling for inventory management and logistics optimization.',
    tech: ['Python', 'Scikit-learn', 'Optimization'],
    links: { 
      github: 'https://github.com/Nick-o-laos/data-analysis-portfolio/tree/main/Portfolio/Supply%20Chain%20Management',
    },
    files: [
      { type: 'ipynb', name: 'Supply_Chain.ipynb', path: '/files/Supply_Chain.ipynb' },
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 5,
    title: 'Football Analytics',
    categories: ['statistics', 'visualization'],
    description:
      'Statistical analysis of Greek Super League performance metrics and predictive modeling.',
    tech: ['Python', 'Pandas', 'Matplotlib'],
    links: { 
      github: 'https://github.com/Nick-o-laos/data-analysis-portfolio/tree/main/Portfolio/Football%20Analytics%20on%20Super%20League%202013-2014',
    },
    files: [
      { type: 'ipynb', name: 'Football_Analytics.ipynb', path: '/files/Football_Analytics.ipynb' },
      { type: 'pdf', name: 'Football_Report.pdf', path: '/files/Football_Report.pdf' },
    ],
    color: 'from-violet-500 to-purple-500',
  },
  {
    id: 6,
    title: 'Survival Analysis',
    categories: ['statistics'],
    description:
      'Kaplan-Meier estimators and Cox proportional hazards models for time-to-event data.',
    tech: ['R', 'Survival Package', 'Statistical Modeling'],
    links: { 
      github: 'https://github.com/Nick-o-laos/data-analysis-portfolio/tree/main/Portfolio/Survival_Analysis',
    },
    files: [
      { type: 'rmd', name: 'Survival_Analysis.Rmd', path: '/files/Survival_Analysis.Rmd' },
      { type: 'pdf', name: 'Survival_Report.pdf', path: '/files/Survival_Report.pdf' },
    ],
    color: 'from-pink-500 to-rose-500',
  },
  {
    id: 7,
    title: 'Car Rentals Data Analysis',
    categories: ['statistics', 'visualization'],
    description:
      'Comprehensive EDA and predictive modeling for car rental demand forecasting.',
    tech: ['Python', 'Seaborn', 'Regression'],
    links: { 
      github: 'https://github.com/Nick-o-laos/data-analysis-portfolio/tree/main/Portfolio/Car%20Rentals%20Data%20Analysis',
    },
    files: [
      { type: 'ipynb', name: 'Car_Rentals.ipynb', path: '/files/Car_Rentals.ipynb' },
    ],
    color: 'from-amber-500 to-orange-500',
  },
  {
    id: 8,
    title: 'Financial Analysis on USD Funds',
    categories: ['finance', 'economics'],
    description:
      'Macroeconomic analysis of USD fund performance and risk assessment.',
    tech: ['Python', 'Risk Metrics', 'Portfolio Analysis'],
    links: { 
      github: 'https://github.com/Nick-o-laos/data-analysis-portfolio/tree/main/Portfolio/Financial%20Analysis%20on%20USD%20funds',
    },
    files: [
      { type: 'ipynb', name: 'USD_Funds.ipynb', path: '/files/USD_Funds.ipynb' },
      { type: 'pdf', name: 'USD_Funds_Report.pdf', path: '/files/USD_Funds_Report.pdf' },
    ],
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 9,
    title: 'PMT & Riemann Hypothesis',
    categories: ['statistics'],
    description:
      'Mathematical analysis exploring connections between payment models and number theory.',
    tech: ['Python', 'NumPy', 'Mathematical Modeling'],
    links: { 
      github: 'https://github.com/Nick-o-laos/data-analysis-portfolio/tree/main/Portfolio/PMT%20and%20Riemman_s%20Hypothesis',
    },
    files: [
      { type: 'py', name: 'PMT_Riemann.py', path: '/files/PMT_Riemann.py' },
      { type: 'pdf', name: 'PMT_Riemann_Report.pdf', path: '/files/PMT_Riemann_Report.pdf' },
    ],
    color: 'from-cyan-500 to-blue-500',
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter((project) => project.categories.includes(activeFilter));

  const getCategoryLabel = (catId: string) => {
    const cat = categories.find((c) => c.id === catId);
    return cat ? cat.label : catId;
  };

  const handleDownload = (filePath: string, fileName: string) => {
    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="projects"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-indigo-400 mb-4">
            Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Featured{' '}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            A curated collection of data analysis projects spanning finance, statistics,
            machine learning, and economics.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? 'text-white'
                  : 'text-zinc-400 hover:text-white bg-zinc-900/50 hover:bg-zinc-800'
              }`}
            >
              {activeFilter === category.id && (
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full" />
              )}
              <span className="relative">{category.label}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Card Header with Gradient */}
              <div
                className={`h-32 bg-gradient-to-br ${project.color} relative overflow-hidden`}
              >
                {/* Pattern overlay */}
                <div className="absolute inset-0 opacity-20">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                      backgroundSize: '20px 20px',
                    }}
                  />
                </div>

                {/* Floating icon */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Category badges */}
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  {project.categories.slice(0, 2).map((cat, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="bg-black/30 text-white border-0 text-xs"
                    >
                      {getCategoryLabel(cat)}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded bg-zinc-800 text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Downloadable Files */}
                {project.files && project.files.length > 0 && (
                  <div className="mb-4">
                    <p className="text-xs text-zinc-500 mb-2 uppercase tracking-wider">Downloads</p>
                    <div className="flex flex-wrap gap-2">
                      {project.files.map((file, i) => {
                        const fileType = fileTypes[file.type as keyof typeof fileTypes];
                        const Icon = fileType?.icon || FileText;
                        return (
                          <button
                            key={i}
                            onClick={() => handleDownload(file.path, file.name)}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 border border-zinc-700 hover:border-indigo-500/50 transition-all duration-300 group/file"
                            title={`Download ${file.name}`}
                          >
                            <Icon className={`w-3.5 h-3.5 ${fileType?.color || 'text-zinc-400'}`} />
                            <span className="text-xs text-zinc-300 group-hover/file:text-white">{fileType?.label || file.type}</span>
                            <Download className="w-3 h-3 text-zinc-500 group-hover/file:text-indigo-400 transition-colors" />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Links */}
                <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-indigo-400 hover:text-indigo-300 flex items-center gap-1 group/link"
                  >
                    View on GitHub
                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                  <div className="flex gap-2">
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors"
                      title="View Source Code"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Hover glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
              />
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-zinc-500">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
