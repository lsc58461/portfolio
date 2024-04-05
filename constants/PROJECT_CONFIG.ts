export interface Link {
  name: string;
  url: string;
}
export interface ProjectConfig {
  name: string;
  type: string;
  period: string;
  imageUrls: string[];
  description: string;
  technologyStacks: string[];
  links: Link[];
}

const PROJECT_CONFIG: ProjectConfig[] = [
  {
    name: 'CamPro',
    type: '팀 프로젝트',
    period: '2024.01 ~ 2024.02 (약 6주)',
    imageUrls: [
      '/images/projects/campro/01.jpg',
      '/images/projects/campro/02.jpg',
      '/images/projects/campro/03.jpg',
      '/images/projects/campro/04.jpg',
      '/images/projects/campro/05.jpg',
    ],
    description:
      '캠핑에 익숙하지 않은 초보 캠퍼들을 위한 취향 저격 맞춤 캠핑장을 추천할 수 있는 웹서비스입니다.',
    technologyStacks: [
      'Next.js(App Router)',
      'TypeScript',
      'Redux Toolkit',
      'React Query',
      'React Hook Form',
      'Axios',
      'Tailwind CSS',
      'AWS S3',
      'Git',
      'GitHub',
      'Vercel',
      'Notion',
      'Discord',
      'Gather Town',
    ],
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/teamCampro/campro_FE',
      },
      {
        name: 'Notion',
        url: 'https://jasper-fowl-d16.notion.site/Codeit-1-428f5bd4b33041de80a5df8663312aff?pvs=4',
      },
      {
        name: 'URL',
        url: 'https://www.campro.life/',
      },
    ],
  },
  {
    name: 'Portfolio',
    type: '개인 프로젝트',
    period: '2024.03.11 ~ 2024.04.06 (약 4주)',
    imageUrls: [
      '/images/projects/portfolio/01.jpg',
      '/images/projects/portfolio/02.jpg',
      '/images/projects/portfolio/03.jpg',
      '/images/projects/portfolio/04.jpg',
    ],
    description: '',
    technologyStacks: [
      'Next.js(App Router)',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Git',
      'GitHub',
      'Vercel',
    ],
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/lsc58461/portfolio',
      },
      {
        name: 'URL',
        url: 'https://portfolio-lsc58461.vercel.app/',
      },
    ],
  },
  {
    name: 'Give More',
    type: '팀 프로젝트',
    period: '2023.12.18 ~ 2024.01.05 (약 2주)',
    imageUrls: [
      '/images/projects/give-more/01.jpg',
      '/images/projects/give-more/02.jpg',
      '/images/projects/give-more/03.jpg',
      '/images/projects/give-more/04.jpg',
    ],
    description: '',
    technologyStacks: [
      'React',
      'Zustand',
      'React Query',
      'Axios',
      'CSS Modules',
      'Git',
      'GitHub',
      'Vercel',
      'Notion',
      'Discord',
    ],
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/codeit-team9/give-more',
      },
      {
        name: 'Notion',
        url: 'https://cooperative-cardigan-386.notion.site/e03bac3892014979a54b11cd10f189ad?pvs=4',
      },
      {
        name: 'URL',
        url: 'https://give-more.vercel.app/',
      },
    ],
  },
  {
    name: 'Rolling',
    type: '팀 프로젝트',
    period: '2023.11.03 ~ 2023.11.18 (약 2주)',
    imageUrls: [
      '/images/projects/rolling/01.jpg',
      '/images/projects/rolling/02.jpg',
      '/images/projects/rolling/03.jpg',
      '/images/projects/rolling/04.jpg',
    ],
    description:
      '롤링페이퍼라는 주제로 사람들이 서로에게 감사나 축하 또는 전달하고 싶은 메시지를 전달할 수 있는 디지털 플랫폼입니다.',
    technologyStacks: [
      'React',
      'Axios',
      'CSS Modules',
      'Git',
      'GitHub',
      'Netlify',
      'Notion',
      'Discord',
    ],
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/Project-TeamSix/Rolling-Project',
      },
      {
        name: 'Notion',
        url: 'https://violet-booklet-5d3.notion.site/rolling-6-b85fd78e57cd4e58a3cd4b041df69b6f?pvs=4',
      },
      {
        name: 'URL',
        url: 'https://rollingpaper-team6.netlify.app/',
      },
    ],
  },
];

export default PROJECT_CONFIG;
