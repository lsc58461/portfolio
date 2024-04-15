export interface Link {
  name: string;
  url: string;
}

export interface ProjectTeamMembers {
  frontend: string[] | null;
  backend: string[] | null;
  designer: string[] | null;
}

export interface SolvedProblems {
  problem: string;
  solution: string;
}

export interface ProjectDescription {
  projectIntroduce: string;
  projectTeamMembers: ProjectTeamMembers;
  roles: string[];
  takeaways: string;
  solvedProblems: SolvedProblems[] | null;
}

export interface ProjectConfig {
  name: string;
  type: string;
  period: string;
  imageUrls: string[];
  description: ProjectDescription;
  technologyStacks: string[];
  links: Link[];
}

const PROJECT_CONFIG: ProjectConfig[] = [
  {
    name: 'CamPro',
    type: '팀 프로젝트',
    period: '2024.01 ~ 2024.02 (약 6주)',
    imageUrls: [
      '/gifs/campro-main.gif',
      '/avifs/campro-map.png',
      '/images/projects/campro/03.jpg',
      '/images/projects/campro/04.jpg',
      '/images/projects/campro/05.jpg',
    ],
    description: {
      projectIntroduce: `- 캠핑에 익숙하지 않은 초보 캠퍼들을 위한 취향 저격 맞춤 캠핑장을 추천할 수 있는 웹서비스입니다.
- 취향을 테스트한 결과를 토대로 맞춤 캠핑장을 필터링 할 수 있습니다.
- 캠핑장 사장님들은 업장을 등록하고 캠핑장 객실을 등록할 수 있습니다.
- 캠핑장에 대한 키워드 리뷰로 어떤 캠핑장인지 쉽게 파악할 수 있습니다.
- 원하는 캠핑장을 지도에서 검색하고 객실을 예약할 수 있습니다.`,
      projectTeamMembers: {
        frontend: ['이정윤', '김진우', '윤대호', '남민섭', '고민혁'],
        backend: ['전용후', '고은태'],
        designer: ['이소영'],
      },
      roles: [
        '사장님 페이지 전체 (디자인, 개발)',
        '검색 지도페이지',
        '메인 페이지 Hero 컴포넌트',
        '전체적인 페이지 문제 해결 및 수정',
      ],
      takeaways: `백엔드 개발자, 디자이너와 협업하며 프로젝트를 진행하면서 실무에서의 협업 방식을 배울 수 있었습니다.
그리고 프론트엔드 개발자로서 디자이너와 협업하며 디자인 시안을 개발에 적용하는 방법을 배울 수 있었습니다.
또한, 프로젝트를 진행하면서 문제가 발생했을 때 해결하는 방법을 배울 수 있었습니다.
프로젝트를 직접 기획하고 개발하면서 개발자로서의 역량을 키울 수 있었습니다.`,
      solvedProblems: [
        {
          problem:
            '지도 객체를 로드하는 useEffect에서 dependency에 검색에 사용되는 state가 들어가있어, 지도가 계속해서 쌓이는 문제가 발생',
          solution: `로드하는 것 외의 로직들을 따로 useEffect에 분리 시키고 기존 지도 로드하는 useEffect의 dependency를 비워둠으로써 해결`,
        },
      ],
    },
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
      '/pngs/portfolio-main.png',
      '/images/projects/portfolio/02.jpg',
      '/images/projects/portfolio/03.jpg',
      '/images/projects/portfolio/04.jpg',
    ],
    description: {
      projectIntroduce: `포트폴리오 사이트입니다. Next.js를 사용해 만들었으며, TypeScript, Tailwind CSS, Framer Motion을 사용했습니다.
또한, Git과 GitHub를 사용해 프로젝트 형상 관리를 경험했습니다. Vercel을 사용해 배포했습니다.`,
      projectTeamMembers: {
        frontend: ['이정윤'],
        backend: null,
        designer: null,
      },
      roles: ['프로젝트 전체'],
      takeaways: `포트폴리오 사이트를 만들면서 Next.js의 사용법을 익히고, TypeScript를 사용해보며 타입스크립트의 장점을 느낄 수 있었습니다.
또한, Tailwind CSS를 사용해보며 CSS를 빠르게 작성할 수 있었고, Framer Motion을 사용해 애니메이션을 적용할 수 있었습니다.
또한, Git과 GitHub를 사용해 형상관리를 경험할 수 있었습니다.`,
      solvedProblems: [{ problem: '문제', solution: '해결' }],
    },
    technologyStacks: [
      'Next.js(App Router)',
      'TypeScript',
      'React Hook Form',
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
    description: {
      projectIntroduce: `급하게 일손이 필요한 자리에 더 많은 시급을 제공해서 아르바이트생을 구할 수 있는 서비스입니다.`,
      projectTeamMembers: {
        frontend: ['이정윤', '임석준', '남궁수', '박세은'],
        backend: null,
        designer: null,
      },
      roles: [
        '사장님 페이지 전체 (디자인, 개발)',
        '검색 지도페이지',
        '메인 페이지 Hero 컴포넌트',
        '전체적인 페이지 문제 해결 및 수정',
      ],
      takeaways: `팀원간의 불화를 중재하고, 중간에 팀장이 없어지는 문제도 겪었었지만 제가 팀장을 맡아 프로젝트 진행 의욕이 떨어진 팀원들을 계속해서 이끌고 개발 실력이 낮은 팀원을 라이브쉐어를 통해 같이 코드를 작성하며 이끌어주는 경험을 하였습니다. 가장 어려움이 많았던 프로젝트였지만 그만큼 많은 것을 배울 수 있었던 프로젝트였습니다.`,
      solvedProblems: null,
    },
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
    description: {
      projectIntroduce: `롤링페이퍼라는 주제로 사람들이 서로에게 감사나 축하 또는 전달하고 싶은 메시지를 전달할 수 있는 디지털 플랫폼입니다.`,
      projectTeamMembers: {
        frontend: ['이정윤', '이규호', '정진호', '손지은', '조연아'],
        backend: null,
        designer: null,
      },
      roles: [
        'Header 컴포넌트',
        'HeaderService 컴포넌트',
        '롤링페이퍼 목록 페이지(/list) 전체',
        'CardList 컴포넌트',
        '전체적인 페이지 문제 해결 및 수정',
      ],
      takeaways: `처음으로 팀 프로젝트를 진행하면서 팀원들과의 협업 방식을 배울 수 있었습니다.`,
      solvedProblems: [
        {
          problem:
            '화면 너비가 바뀌어도 스크롤되는 거리가 같아, 각각 다른 화면 너비에서 스크롤 시 보이는 리스트의 크기에 비해 너무 많은 거리를 이동을 하는 문제',
          solution:
            '화면 너비를 기준으로 보이는 카드의 개수를 결정하는 getVisibleCardCount 함수를 구현하고, 현재 인덱스와 카드 너비를 곱한 값을 터치한 X 좌표와 터치를 시작한 X 좌표의 차이를 더해 translateX의 px값으로 계산하여 이동 거리를 조절하는 calculateTransform 함수를 구현 함으로써 해결하였습니다.',
        },
      ],
    },
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
