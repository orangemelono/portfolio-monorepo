import { atom, selector, selectorFamily } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { Project, Skill, Experience, Education, SocialLink } from '@/types';

// Enable persistence for recoil state
const { persistAtom } = recoilPersist();

// Theme state
export const themeState = atom<'light' | 'dark'>({
  key: 'theme',
  default: 'light',
  effects_UNSTABLE: [persistAtom],
});

// Navigation state
export const activeSectionState = atom<string>({
  key: 'activeSection',
  default: 'home',
  effects_UNSTABLE: [persistAtom],
});

// Projects state
export const projectsState = atom<Project[]>({
  key: 'projects',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const selectedProjectState = atom<string | null>({
  key: 'selectedProject',
  default: null,
  effects_UNSTABLE: [persistAtom],
});

// Skills state
export const skillsState = atom<Skill[]>({
  key: 'skills',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

// Experience state
export const experiencesState = atom<Experience[]>({
  key: 'experiences',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

// Education state
export const educationState = atom<Education[]>({
  key: 'education',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

// Social links state
export const socialLinksState = atom<SocialLink[]>({
  key: 'socialLinks',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

// Filter states
export const projectFilterState = atom({
  key: 'projectFilter',
  default: {
    category: null as string | null,
    search: '',
  },
  effects_UNSTABLE: [persistAtom],
});

export const filteredProjectsState = selector({
  key: 'filteredProjects',
  get: ({ get }) => {
    const projects = get(projectsState);
    const filter = get(projectFilterState);
    
    return projects.filter(project => {
      const matchesCategory = filter.category ? project.category === filter.category : true;
      const matchesSearch = filter.search 
        ? project.title.toLowerCase().includes(filter.search.toLowerCase()) || 
          project.description.toLowerCase().includes(filter.search.toLowerCase()) ||
          project.technologies.some(tech => tech.toLowerCase().includes(filter.search.toLowerCase()))
        : true;
      
      return matchesCategory && matchesSearch;
    });
  },
});

// UI state
export const isMenuOpenState = atom({
  key: 'isMenuOpen',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

// Loading states
export const projectsLoadingState = atom({
  key: 'projectsLoading',
  default: false,
});

export const contactFormLoadingState = atom({
  key: 'contactFormLoading',
  default: false,
});

// Contact form state
export const contactFormState = atom({
  key: 'contactForm',
  default: {
    name: '',
    email: '',
    message: '',
  },
  effects_UNSTABLE: [persistAtom],
});