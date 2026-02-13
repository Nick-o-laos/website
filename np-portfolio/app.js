// Projects Data with Downloadable Files
const projectsData = [
  {
    id: 1,
    title: 'Machine Learning in Finance',
    categories: ['finance', 'machine-learning'],
    description: 'MCMC methods and clustering algorithms applied to stock prediction and DeFi derivatives pricing.',
    tech: ['Python', 'MCMC', 'GARCH', 'Black-Scholes'],
    github: 'https://github.com/Nick-o-laos/data-analysis-portfolio/tree/main/Portfolio/Machine%20Learning%20techniques%20in%20Finance',
    files: [
      { type: 'pdf', name: 'ML_Finance_Report.pdf', label: 'PDF' },
      { type: 'ipynb', name: 'ML_Finance.ipynb', label: 'Notebook' },
    ],
    color: 'from-indigo-500 to-purple-600',
  },
  {
    id: 2,
    title: 'Bitcoin Price Analysis',
    categories: ['finance', 'statistics'],
    description: 'Time series forecasting and volatility modeling for cryptocurrency price prediction.',
    tech: ['R', 'ARIMA', 'Volatility Models'],
    github: 'https://github.com/Nick-o-laos/data-analysis-portfolio/tree/main/Portfolio/Bitcoin%20Analysis',
    files: [
      { type: 'rmd', name: 'Bitcoin_Analysis.Rmd', label: 'R Markdown' },
      { type: 'pdf', name: 'Bitcoin_Report.pdf', label: 'PDF' },
    ],
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 3,
    title: 'Loan Programs Analysis',
    categories: ['economics', 'statistics'],
    description: 'Statistical analysis of PPP and EIDL loan distribution patterns and economic impact.',
    tech: ['Python', 'Pandas', 'Statistical Tests'],
    github: 'https://github.com/Nick-o-laos/data-analysis-portfolio/tree/main/Portfolio/PPP%20and%20EIDL%20Loan%20Programs%20Analysis',
    files: [
      { type: 'ipynb', name: 'Loan_Analysis.ipynb', label: 'Notebook' },
      { type: 'pdf', name: 'Loan_Report.pdf', label: 'PDF' },
    ],
    color: 'from-emerald-500 to-teal-500',
  },
  {
    id: 4,
    title: 'Supply Chain Optimization',
    categories: ['machine-learning', 'visualization'],
    description: 'Predictive modeling for inventory management and logistics optimization.',
    tech: ['Python', 'Scikit-learn', 'Optimization'],
    github: 'https://github.com/Nick-o-laos/data-analysis-portfolio/tree/main/Portfolio/Supply%20Chain%20Management',
    files: [
      { type: 'ipynb', name: 'Supply_Chain.ipynb', label: 'Notebook' },
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 5,
    title: 'Football Analytics',
    categories: ['statistics', 'visualization'],
    description: 'Statistical analysis of Greek Super League performance metrics and predictive modeling.',
    tech: ['Python', 'Pandas', 'Matplotlib'],
    github: 'https://github.com/Nick-o-laos/data-analysis-portfolio/tree/main/Portfolio/Football%20Analytics%20on%20Super%20League%202013-2014',
    files: [
      { type: 'ipynb', name: 'Football_Analytics.ipynb', label: 'Notebook' },
      { type: 'pdf', name: 'Football_Report.pdf', label: 'PDF' },
    ],
    color: 'from-violet-500 to-purple-500',
  },
  {
    id: 6,
    title: 'Survival Analysis',
    categories: ['statistics'],
    description: 'Kaplan-Meier estimators and Cox proportional hazards models for time-to-event data.',
    tech: ['R', 'Survival Package', 'Statistical Modeling'],
    github: 'https://github.com/Nick-o-laos/data-analysis-portfolio/tree/main/Portfolio/Survival_Analysis',
    files: [
      { type: 'rmd', name: 'Survival_Analysis.Rmd', label: 'R Markdown' },
      { type: 'pdf', name: 'Survival_Report.pdf', label: 'PDF' },
    ],
    color: 'from-pink-500 to-rose-500',
  },
  {
    id: 7,
    title: 'Car Rentals Data Analysis',
    categories: ['statistics', 'visualization'],
    description: 'Comprehensive EDA and predictive modeling for car rental demand forecasting.',
    tech: ['Python', 'Seaborn', 'Regression'],
    github: 'https://github.com/Nick-o-laos/data-analysis-portfolio/tree/main/Portfolio/Car%20Rentals%20Data%20Analysis',
    files: [
      { type: 'ipynb', name: 'Car_Rentals.ipynb', label: 'Notebook' },
    ],
    color: 'from-amber-500 to-orange-500',
  },
  {
    id: 8,
    title: 'Financial Analysis on USD Funds',
    categories: ['finance', 'economics'],
    description: 'Macroeconomic analysis of USD fund performance and risk assessment.',
    tech: ['Python', 'Risk Metrics', 'Portfolio Analysis'],
    github: 'https://github.com/Nick-o-laos/data-analysis-portfolio/tree/main/Portfolio/Financial%20Analysis%20on%20USD%20funds',
    files: [
      { type: 'ipynb', name: 'USD_Funds.ipynb', label: 'Notebook' },
      { type: 'pdf', name: 'USD_Funds_Report.pdf', label: 'PDF' },
    ],
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 9,
    title: 'PMT & Riemann Hypothesis',
    categories: ['statistics'],
    description: 'Mathematical analysis exploring connections between payment models and number theory.',
    tech: ['Python', 'NumPy', 'Mathematical Modeling'],
    github: 'https://github.com/Nick-o-laos/data-analysis-portfolio/tree/main/Portfolio/PMT%20and%20Riemman_s%20Hypothesis',
    files: [
      { type: 'py', name: 'PMT_Riemann.py', label: 'Python' },
      { type: 'pdf', name: 'PMT_Riemann_Report.pdf', label: 'PDF' },
    ],
    color: 'from-cyan-500 to-blue-500',
  },
];

// File type icons and colors
const fileTypeConfig = {
  pdf: { icon: 'file-text', color: 'text-red-400', bgColor: 'bg-red-500/10', borderColor: 'border-red-500/30' },
  ipynb: { icon: 'book-open', color: 'text-orange-400', bgColor: 'bg-orange-500/10', borderColor: 'border-orange-500/30' },
  rmd: { icon: 'code', color: 'text-blue-400', bgColor: 'bg-blue-500/10', borderColor: 'border-blue-500/30' },
  py: { icon: 'code', color: 'text-yellow-400', bgColor: 'bg-yellow-500/10', borderColor: 'border-yellow-500/30' },
  r: { icon: 'code', color: 'text-blue-400', bgColor: 'bg-blue-500/10', borderColor: 'border-blue-500/30' },
};

// Category labels
const categoryLabels = {
  finance: 'Finance',
  statistics: 'Statistics',
  'machine-learning': 'ML',
  economics: 'Economics',
  visualization: 'Viz',
};

// Render projects
function renderProjects(filter = 'all') {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.categories.includes(filter));

  grid.innerHTML = filteredProjects.map((project, index) => {
    const filesHtml = project.files.map(file => {
      const config = fileTypeConfig[file.type] || fileTypeConfig.pdf;
      return `
        <a href="files/${file.name}" download class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg ${config.bgColor} border ${config.borderColor} hover:bg-zinc-700 transition-all duration-300 group/file">
          <i data-lucide="${config.icon}" class="w-3.5 h-3.5 ${config.color}"></i>
          <span class="text-xs text-zinc-300 group-hover/file:text-white">${file.label}</span>
          <i data-lucide="download" class="w-3 h-3 text-zinc-500 group-hover/file:text-indigo-400 transition-colors"></i>
        </a>
      `;
    }).join('');

    const techHtml = project.tech.map(tech => 
      `<span class="px-2 py-1 text-xs rounded bg-zinc-800 text-zinc-400">${tech}</span>`
    ).join('');

    const categoryBadges = project.categories.slice(0, 2).map(cat => 
      `<span class="px-2 py-0.5 text-xs rounded-full bg-black/30 text-white border-0">${categoryLabels[cat] || cat}</span>`
    ).join('');

    return `
      <div class="project-card group relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-zinc-700" data-categories="${project.categories.join(' ')}">
        <div class="h-32 bg-gradient-to-br ${project.color} relative overflow-hidden">
          <div class="absolute inset-0 opacity-20" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 20px 20px;"></div>
          <div class="absolute top-4 right-4 w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
            <span class="text-white font-bold text-sm">${String(index + 1).padStart(2, '0')}</span>
          </div>
          <div class="absolute bottom-4 left-4 flex flex-wrap gap-2">${categoryBadges}</div>
        </div>
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-3 text-white group-hover:text-indigo-300 transition-colors">${project.title}</h3>
          <p class="text-zinc-400 text-sm leading-relaxed mb-4">${project.description}</p>
          <div class="flex flex-wrap gap-2 mb-4">${techHtml}</div>
          <div class="mb-4">
            <p class="text-xs text-zinc-500 mb-2 uppercase tracking-wider">Downloads</p>
            <div class="flex flex-wrap gap-2">${filesHtml}</div>
          </div>
          <div class="flex items-center justify-between pt-4 border-t border-zinc-800">
            <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="text-sm font-medium text-indigo-400 hover:text-indigo-300 flex items-center gap-1 group/link">
              View on GitHub
              <i data-lucide="external-link" class="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"></i>
            </a>
            <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="p-2 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors" title="View Source Code">
              <i data-lucide="github" class="w-4 h-4"></i>
            </a>
          </div>
        </div>
        <div class="absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"></div>
      </div>
    `;
  }).join('');

  // Re-initialize Lucide icons for new content
  lucide.createIcons();
}

// Filter functionality
function setupFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active state
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.classList.remove('bg-gradient-to-r', 'from-indigo-500', 'to-purple-600', 'text-white');
        b.classList.add('text-zinc-400', 'bg-zinc-900/50');
      });
      btn.classList.add('active');
      btn.classList.remove('text-zinc-400', 'bg-zinc-900/50');
      btn.classList.add('bg-gradient-to-r', 'from-indigo-500', 'to-purple-600', 'text-white');

      // Filter projects
      const filter = btn.dataset.filter;
      renderProjects(filter);
    });
  });
}

// Mobile menu toggle
function setupMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
}

// Navigation scroll effect
function setupNavScroll() {
  const navbar = document.getElementById('navbar');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.classList.add('glass');
    } else {
      navbar.classList.remove('glass');
    }
  });
}

// Particle animation
function setupParticles() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let particles = [];
  const particleCount = 60;
  const connectionDistance = 150;
  const colors = ['#6366f1', '#8b5cf6', '#06b6d4'];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createParticles() {
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
  }

  function animate() {
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

    requestAnimationFrame(animate);
  }

  resize();
  createParticles();
  animate();

  window.addEventListener('resize', () => {
    resize();
    createParticles();
  });
}

// Counter animation
function setupCounters() {
  const counters = document.querySelectorAll('[data-count]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.dataset.count);
        let current = 0;
        const duration = 2000;
        const startTime = performance.now();

        const animate = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easeOut = 1 - Math.pow(1 - progress, 3);
          current = Math.floor(target * easeOut);
          counter.textContent = current + '+';

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);
        observer.unobserve(counter);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
  renderProjects();
  setupFilters();
  setupMobileMenu();
  setupNavScroll();
  setupParticles();
  setupCounters();
});
