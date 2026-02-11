import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  SparklesIcon,
  MapIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import profileImage from '../images/profile-pic.jpg';
import testimonialImage from '../images/testimonial.webp';

import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Metr Pikeska Portfolio',
  description: 'Portfolio of Metr Pikeska showcasing projects and skills.',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  name: 'Petr Mikeska',
  imageSrc: profileImage, // Added missing property
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Specializuji se na GIS analýzy, webovou kartografii, prostorové databáze a automatizaci GIS workflow. Mám zkušenosti s vývojem webových mapových aplikací a analýzou obrazových dat.
      </p>
    </>
  ),
  actions: [
    {
      href: '/resume.pdf',
      text: 'Životopis',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Kontakt',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profileImage,
  description: `Jsem geoinformatik s odborností v GIS analýzách, webové kartografii a prostorových databázích. Zaměřuji se na propojení GIS, databází a webových technologií, včetně automatizace GIS workflow a analýzy obrazových dat.`,
  aboutItems: [
    {label: 'Studium', text: 'Univerzita Palackého v Olomouci (Bc., Mgr.)', Icon: AcademicCapIcon},
    {label: 'Lokalita', text: 'Čeladná / Olomouc, 73912', Icon: MapIcon},
    {label: 'Technologie', text: 'Python, PostGIS, Leaflet, OpenCV', Icon: SparklesIcon},
  ],
};

export const specializationData = [
  {title: 'GIS analýzy', description: 'Vektorové, rastrové a síťové analýzy.'},
  {title: 'Webová kartografie', description: 'Vývoj interaktivních mapových aplikací.'},
  {title: 'Prostorové databáze', description: 'PostGIS, Spatial SQL, optimalizace dotazů.'},
  {title: 'Automatizace GIS', description: 'Python, GDAL, automatizace workflow.'},
  {title: 'Computer Vision', description: 'Analýza obrazových a video dat pomocí OpenCV a YOLO.'},
];

export const skillsData = [
  {
    name: 'GIS & Data',
    skills: [
      { name: 'QGIS', level: 80 },
      { name: 'ArcGIS Pro', level: 75 },
      { name: 'PostGIS', level: 85 },
      { name: 'GDAL', level: 70 },
      { name: 'GeoJSON', level: 90 },
      { name: 'WMS/WFS', level: 80 },
    ],
  },
  {
    name: 'Programování',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'JavaScript', level: 70 },
      { name: 'C# (základy)', level: 50 },
    ],
  },
  {
    name: 'Web',
    skills: [
      { name: 'HTML', level: 85 },
      { name: 'CSS', level: 80 },
      { name: 'Leaflet', level: 75 },
      { name: 'REST API', level: 70 },
    ],
  },
  {
    name: 'AI & Computer Vision',
    skills: [
      { name: 'YOLO', level: 65 },
      { name: 'OpenCV', level: 70 },
    ],
  },
  {
    name: 'Databáze',
    skills: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'Návrh schémat', level: 75 },
      { name: 'Optimalizace SQL dotazů', level: 80 },
    ],
  },
];

export const projectsData = [
  {
    title: 'GIS toolbox pro hodnocení dostupnosti zelených ploch ve městech',
    description: 'Bakalářská práce zaměřená na vývoj nástrojů pro GIS analýzy.',
    technologies: ['Python', 'QGIS'],
  },
  {
    title: 'GEOTE Klima',
    description: 'Webová platforma pro klimatická data (PostGIS + REST API + web).',
    technologies: ['PostGIS', 'REST API', 'JavaScript'],
  },
  {
    title: 'VYGEO OPALENA',
    description: 'Webový GIS pro správu lyžařského areálu (GIS, IoT, AI – YOLO).',
    technologies: ['GIS', 'IoT', 'YOLO'],
  },
  {
    title: 'Kartografická analýza znečištění ovzduší v Moravskoslezském kraji',
    description: 'Analýza a vizualizace dat o znečištění ovzduší.',
    technologies: ['Python', 'GIS'],
  },
  {
    title: 'Ski Cam Analytics',
    description: 'AI analýza kamerových dat.',
    technologies: ['OpenCV', 'YOLO'],
  },
  {
    title: 'Geo Places Quiz',
    description: 'Interaktivní geografický webový kvíz.',
    technologies: ['JavaScript', 'Leaflet'],
  },
];

export const portfolioItems = [
  {
    title: 'GIS toolbox pro hodnocení dostupnosti zelených ploch ve městech',
    description: 'Bakalářská práce zaměřená na vývoj nástrojů pro GIS analýzy.',
    image: '/images/portfolio1.jpg',
    width: 800, // Added width property
    height: 600, // Added height property
  },
  {
    title: 'GEOTE Klima',
    description: 'Webová platforma pro klimatická data (PostGIS + REST API + web).',
    image: '/images/portfolio2.jpg',
    width: 800, // Added width property
    height: 600, // Added height property
  },
  {
    title: 'VYGEO OPALENA',
    description: 'Webový GIS pro správu lyžařského areálu (GIS, IoT, AI – YOLO).',
    image: '/images/portfolio3.jpg',
    width: 800, // Added width property
    height: 600, // Added height property
  },
  {
    title: 'Kartografická analýza znečištění ovzduší v Moravskoslezském kraji',
    description: 'Analýza a vizualizace dat o znečištění ovzduší.',
    image: '/images/portfolio4.jpg',
    width: 800, // Added width property
    height: 600, // Added height property
  },
  {
    title: 'Ski Cam Analytics',
    description: 'AI analýza kamerových dat.',
    image: '/images/portfolio5.jpg',
    width: 800, // Added width property
    height: 600, // Added height property
  },
  {
    title: 'Geo Places Quiz',
    description: 'Interaktivní geografický webový kvíz.',
    image: '/images/portfolio6.jpg',
    width: 800, // Added width property
    height: 600, // Added height property
  },
];

export const servicesData = [
  {title: 'GIS a prostorové analýzy', description: 'Vektorové, rastrové a síťové analýzy.'},
  {title: 'Webová kartografie', description: 'Vývoj interaktivních mapových aplikací.'},
  {title: 'Databáze a správa dat', description: 'Návrh databázových schémat, optimalizace dotazů.'},
  {title: 'Computer Vision', description: 'Analýza obrazových a video dat.'},
  {title: '3D data a terénní modely', description: 'Práce s DEM/DSM a 3D vizualizace.'},
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'zář 2025 - současnost',
    location: 'Univerzita Palackého v Olomouci',
    title: 'Mgr. (Geoinformatika a kartografie)',
    content: <p>Pokračující magisterské studium se zaměřením na analýzu prostorových dat.</p>,
  },
  {
    date: 'zář 2022 - srp 2025',
    location: 'Univerzita Palackého v Olomouci',
    title: 'Bc. (Geoinformatika a kartografie)',
    content: <p>Bakalářské studium, včetně tvorby GIS toolboxu pro výpočet docházkové vzdálenosti.</p>,
  },
  {
    date: 'zář 2018 - zář 2022',
    location: 'Střední škola informačních technologií s.r.o.',
    title: 'Středoškolské vzdělání',
    content: <p>Studium informačních technologií.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'únor 2025 - současnost',
    location: 'Skymaps s.r.o.',
    title: 'Analytik GIS',
    content: (
      <p>
        Zpracování satelitních snímků, analýza obrazových dat, tvorba tematických map a automatizace procesů pomocí Pythonu.
      </p>
    ),
  },
  {
    date: 'květen 2023 - současnost',
    location: 'Univerzita Palackého v Olomouci',
    title: 'Správce webu',
    content: (
      <p>
        Správa aktualizací a obsahu webových stránek, řešení chyb a implementace oprav.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Kontaktujte mě',
  description: 'Pokud máte jakékoliv dotazy nebo nabídky, neváhejte mě kontaktovat.',
  items: [
    {
      type: ContactType.Email,
      text: 'piter.mikeska@gmail.com',
      href: 'mailto:piter.mikeska@gmail.com',
    },
    {
      type: ContactType.Phone,
      text: '+420 773 426 330',
      href: 'tel:+420773426330',
    },
    {
      type: ContactType.Location,
      text: 'Čeladná / Olomouc, 73912',
      href: 'https://www.google.com/maps',
    },
    {
      type: ContactType.Github,
      text: 'Github',
      href: 'https://github.com/',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
