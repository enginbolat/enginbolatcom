import { ProjectModel, SocialMediaModel, TechStack } from "../model";

export const projects: ProjectModel[] = [
  {
    "id": 0,
    "name": "Metaggio",
    "link": "https://metaggio.com/",
    "image": "/images/metaggio.jpg",
  },
  {
    "id": 1,
    "name": "Antalya Sektörel",
    "link": "https://apps.apple.com/us/app/antalya-sekt%C3%B6rel/id6451334484",
    "image": "/images/ant-sektorel.jpg",
  },
  {
    "id": 2,
    "name": "Antalya Kart",
    "link": "https://github.com/EnginBolat/antalya_kart_redesign",
    "image": "/images/ant-kart.jpg",
  },
  {
    "id": 3,
    "name": "Todo App",
    "link": "https://github.com/EnginBolat/RNTodoApp/tree/master/app",
    "image": "/images/todo-app.jpg",
  },
]


export const socialMedia: SocialMediaModel[] = [
  {
    id: 0,
    path: "./ic/ic_instagram.png",
    link: "https://instagram.com/enginn.blt",
  },
  {
    id: 1,
    path: "./ic/ic_x.png",
    link: "https://twitter.com/enginnblt",
  },
  {
    id: 2,
    path: "./ic/ic_youtube.png",
    link: "https://www.youtube.com/@enginbolat",
  },
  {
    id: 3,
    path: "./ic/ic_github.png",
    link: "https://github.com/enginbolat",
  },
  {
    id: 4,
    path: "./ic/ic_linkedin.png",
    link: " https://www.linkedin.com/in/enginbolat/",
  },
  {
    id: 5,
    path: "./ic/ic_spotify.png",
    link: "https://open.spotify.com/user/ztio5fucs86aweqzu5exufjab"
  },
  {
    id: 6,
    path: "./ic/ic_medium.png",
    link: "https://medium.com/@engi.bolat"
  }
];

export const techStack: TechStack[] = [
  {
    id: 0,
    name: "React Native",
    imagePath: "./ic/ic_react.png"
  },
  {
    id: 1,
    name: "Swift",
    imagePath: "./ic/ic_swift.png"
  },
  {
    id: 2,
    name: "Flutter",
    imagePath: "./ic/ic_flutter.png"
  },
  {
    id: 3,
    name: "NextJS",
    imagePath: "./ic/ic_next.png"
  },
  {
    id: 4,
    name: "Redux",
    imagePath: "./ic/ic_redux.png"
  },
  {
    id: 5,
    name: "Tailwind/Nativewind",
    imagePath: "./ic/ic_tailwind.png"
  },
  {
    id: 6,
    name: "MYSQL",
    imagePath: "./ic/ic_mysql.png"
  },
  {
    id: 7,
    name: "Javascript",
    imagePath: "./ic/ic_javascript.png"
  },
  {
    id: 8,
    name: "Typescript",
    imagePath: "./ic/ic_typescript.png"
  },
  {
    id: 9,
    name: "Jest",
    imagePath: "./ic/ic_jest.png"
  },
  {
    id: 10,
    name: ".NET Core",
    imagePath: "./ic/ic_net.png"
  },
  {
    id: 11,
    name: "pnpm",
    imagePath: "./ic/ic_pnpm.png"
  },
  {
    id: 12,
    name: "npm",
    imagePath: "./ic/ic_npm.png"
  },
  {
    id: 13,
    name: "GIT",
    imagePath: "./ic/ic_git.png"
  },
  {
    id: 14,
    name: "Figma",
    imagePath: "./ic/ic_figma.png"
  },
  {
    id: 15,
    name: "HTML",
    imagePath: "./ic/ic_html.png"
  },
  {
    id: 16,
    name: "CSS",
    imagePath: "./ic/ic_css.png"
  },
]

export const experiences = [
  {
    id: 0,
    companyName: "MetaGrade Corp. (Current)",
    date: 'September 2023',
    job: 'Mobile Developer',
    location: 'NewYork, USA (Remote)',
    description: "I'm developing a mobile application integrating augmented reality using React Native and Native components, for a market platform."
  },
  {
    id: 1,
    companyName: "PhD Teknoloji (Current)",
    date: 'January 2023',
    job: 'Mobile Developer',
    location: 'Antalya,Turkey',
    description: "I created a mobile application using Flutter, while developing its API with .NET Core WebAPI, ensuring seamless interaction between the frontend and backend for a comprehensive user experience."
  },
]

export const education = [
  {
    id: 0,
    title: "Anadolu University (Current)",
    date: '2023-Still',
    location: 'Eskisehir, Turkey (Remote)',
    description: "After graduating from Akdeniz University, I continued my undergraduate education in the Department of Management Systems to complete my bachelor's degree."
  },
  {
    id: 1,
    title: "Akdeniz University",
    date: '2021-2023',
    location: 'Antalya, Turkey',
    description: "I finished my associate degree in Computer Programming. GPA: 3.2"
  },
  {
    id: 2,
    title: "Halkalı Vocational Technical Anatolian High School",
    date: '2017-2021',
    location: 'Istanbul, Turkey',
    description: "I graduated from database programming"
  },
]