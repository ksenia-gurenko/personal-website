export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  category: string[];
  icon: string;
  gradient: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'SkillSwap',
    description: 'SPA для обмена навыками. Разработала Badge-компонент и страницу навыков (SkillPage).',
    technologies: ['React', 'TypeScript', 'CSS', 'API'],
    githubUrl: 'https://github.com/ksenia-gurenko/SkillSwap_30_2',
    demoUrl: 'https://skill-swap-prod.netlify.app/',
    category: ['react', 'typescript'],
    icon: 'FaReact',
    gradient: 'linear-gradient(135deg, #4f46e5, #7c3aed)'
  },
  {
    id: 2,
    title: 'Космическая бургерная',
    description: 'Приложение бургерной с drag-and-drop, WebSocket соединением, авторизацией и личным кабинетом.',
    technologies: ['React', 'Redux', 'TypeScript', 'WebSocket'],
    githubUrl: 'https://github.com/ksenia-gurenko/stellar-burgers',
    category: ['react', 'typescript'],
    icon: 'FaHamburger',
    gradient: 'linear-gradient(135deg, #f59e0b, #d97706)'
  },
  {
    id: 3,
    title: 'Vue.js проект',
    description: 'Проект на Vue.js с компонентным подходом и современными практиками разработки.',
    technologies: ['Vue.js', 'JavaScript', 'Vuex', 'Components'],
    githubUrl: 'https://github.com/ksenia-gurenko/vue-project',
    category: ['vue'],
    icon: 'FaVuejs',
    gradient: 'linear-gradient(135deg, #10b981, #059669)'
  },
  {
    id: 4,
    title: 'Next.js магазин',
    description: 'Современный интернет-магазин на Next.js с серверным рендерингом и адаптивным дизайном.',
    technologies: ['Next.js', 'React', 'TypeScript', 'SSR'],
    githubUrl: 'https://github.com/ksenia-gurenko/next-shop',
    category: ['react', 'typescript'],
    icon: 'FaShoppingCart',
    gradient: 'linear-gradient(135deg, #8b5cf6, #7c3aed)'
  },
  {
    id: 5,
    title: 'Mesto Project',
    description: 'Интерактивное приложение для обмена фотографиями с авторизацией и редактированием профиля.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'API'],
    githubUrl: 'https://github.com/ksenia-gurenko/mesto-project-ff',
    category: ['react'],
    icon: 'FaReact',
    gradient: 'linear-gradient(135deg, #ec4899, #db2777)'
  },
  {
    id: 6,
    title: 'Проекты на HTML/CSS',
    description: 'Коллекция адаптивных лендингов и учебных проектов на чистом HTML и CSS.',
    technologies: ['HTML5', 'CSS3', 'Adaptive', 'BEM'],
    githubUrl: 'https://github.com/ksenia-gurenko?tab=repositories',
    category: [],
    icon: 'FaReact',
    gradient: 'linear-gradient(135deg, #3b82f6, #1d4ed8)'
  },
];
