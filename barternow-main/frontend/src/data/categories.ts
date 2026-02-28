import type { Category } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'tech',
    title: 'Tech & Gadgets',
    description: 'Phones, laptops, smart home gear and accessories.',
    icon: 'Smartphone',
  },
  {
    id: 'instruments',
    title: 'Instruments',
    description: 'Guitars, keyboards, and studio production equipment.',
    icon: 'Music',
  },
  {
    id: 'sports',
    title: 'Sports Gear',
    description: 'Gym weights, bikes, and outdoor adventure gear.',
    icon: 'Dumbbell',
    isHot: true,
  },
  {
    id: 'philanthropy',
    title: 'Philanthropy',
    description: 'Barter items for charity donations and social impact.',
    icon: 'HeartHandshake',
  },
  {
    id: 'fashion',
    title: 'Fashion',
    description: 'Vintage clothing, designer bags, and jewelry.',
    icon: 'Shirt',
  },
  {
    id: 'home',
    title: 'Home & Living',
    description: 'Decor, furniture, and kitchen appliances.',
    icon: 'Armchair',
  },
  {
    id: 'gaming',
    title: 'Gaming',
    description: 'Consoles, PC parts, and physical game copies.',
    icon: 'Gamepad2',
  },
  {
    id: 'vehicles',
    title: 'Vehicles',
    description: 'Cars, parts, and maintenance tools.',
    icon: 'Car',
  }
];
