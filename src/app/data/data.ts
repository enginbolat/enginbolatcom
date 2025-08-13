import { EducationModel } from "app/model/education.model";
import {
  Experience,
  ProjectModel,
  SocialMediaModel,
  TechStack,
} from "../model";

export const projects: ProjectModel[] = [
  {
    id: 0,
    name: "Metaggio",
    link: "https://metaggio.com/",
    image: "/images/metaggio.jpg",
  },
  {
    id: 1,
    name: "Antalya Sektörel",
    link: "https://apps.apple.com/us/app/antalya-sekt%C3%B6rel/id6451334484",
    image: "/images/ant-sektorel.jpg",
  },
  {
    id: 2,
    name: "Antalya Kart",
    link: "https://github.com/EnginBolat/antalya_kart_redesign",
    image: "/images/ant-kart.jpg",
  },
  {
    id: 3,
    name: "Todo App",
    link: "https://github.com/EnginBolat/RNTodoApp/tree/master/app",
    image: "/images/todo-app.jpg",
  },
];

export const socialMedia: SocialMediaModel[] = [
  {
    id: 0,
    icon: "instagram",
    link: "https://instagram.com/enginn.blt",
  },
  {
    id: 1,
    icon: "x",
    link: "https://x.com/enginnblt",
  },
  {
    id: 2,
    icon: "youtube",
    link: "https://www.youtube.com/@enginbolat",
  },
  {
    id: 3,
    icon: "github",
    link: "https://github.com/enginbolat",
  },
  {
    id: 4,
    icon: "linkedin",
    link: " https://www.linkedin.com/in/enginbolat/",
  },
  {
    id: 5,
    icon: "spotify",
    link: "https://open.spotify.com/user/ztio5fucs86aweqzu5exufjab",
  },
  {
    id: 6,
    icon: "medium",
    link: "https://medium.com/@engi.bolat",
  },
];

export const techStack: TechStack[] = [
  {
    id: 0,
    name: "React Native",
    imagePath: "./ic/ic_react.png",
  },
  {
    id: 1,
    name: "Swift",
    imagePath: "./ic/ic_swift.png",
  },
  {
    id: 2,
    name: "Flutter",
    imagePath: "./ic/ic_flutter.png",
  },
  {
    id: 3,
    name: "NextJS",
    imagePath: "./ic/ic_next.png",
  },
  {
    id: 4,
    name: "Redux",
    imagePath: "./ic/ic_redux.png",
  },
  {
    id: 5,
    name: "Tailwind/Nativewind",
    imagePath: "./ic/ic_tailwind.png",
  },
  {
    id: 6,
    name: "MYSQL",
    imagePath: "./ic/ic_mysql.png",
  },
  {
    id: 7,
    name: "Javascript",
    imagePath: "./ic/ic_javascript.png",
  },
  {
    id: 8,
    name: "Typescript",
    imagePath: "./ic/ic_typescript.png",
  },
  {
    id: 9,
    name: "Jest",
    imagePath: "./ic/ic_jest.png",
  },
  {
    id: 10,
    name: ".NET Core",
    imagePath: "./ic/ic_net.png",
  },
  {
    id: 11,
    name: "pnpm",
    imagePath: "./ic/ic_pnpm.png",
  },
  {
    id: 12,
    name: "npm",
    imagePath: "./ic/ic_npm.png",
  },
  {
    id: 13,
    name: "GIT",
    imagePath: "./ic/ic_git.png",
  },
  {
    id: 14,
    name: "Figma",
    imagePath: "./ic/ic_figma.png",
  },
  {
    id: 15,
    name: "HTML",
    imagePath: "./ic/ic_html.png",
  },
  {
    id: 16,
    name: "CSS",
    imagePath: "./ic/ic_css.png",
  },
];

export const experiences: Experience[] = [
  {
    id: 0,
    companyName: "Param Tech (Current)",
    link: "https://param.com.tr",
    date: "June 2024",
    job: "React Native Developer",
    location: "Istanbul, Turkey (Hybrid)",
    description:
      "I develop and maintain the Param Mobile App and Kredim Mobile App using React Native, focusing on new features, performance optimization, and application stability. I work on identifying and resolving performance bottlenecks, enhancing user experience and scalability. Collaborating with different teams, I ensure the applicatio remain efficient and reliable. This role strengthens my expertise in React Nati mobile performance optimization, and large-scale fintech application",
    isCurrent: true,
  },
  {
    id: 1,
    link: "http://metagrade.com",
    companyName: "MetaGrade Corp.",
    date: "September 2023  - June 2024",
    job: "Mobile Developer",
    location: "NewYork, USA (Remote)",
    description:
      "During my tenure at Metagrade, I developed a React Native mobile application using tRPC, focusing on UI implementation, API integration, and performance optimization. I translated Figma designs into a functional interface, implemented Google and Coinbase authentication, and managed state efficiently using Redux. Additionally developed an Augmented Reality (AR) package with ARKit and integrated the Sketchfab API for enhanced 3D visualization. This role strengthened my expertise in React Native, AR development, authentication systems, and state management, while improving my ability to build scalable and high-performance applications.",
  },
  {
    id: 2,
    companyName: "PhD Teknoloji",
    link: "https://www.phd.com.tr",
    date: "January 2023 - June 2024",
    job: "Mobile Developer",
    location: "Antalya, Turkey",
    description:
      "During my tenure at PHD Teknoloji, I developed a mobile application using Flutter and built a web service with ASP.NET Core, ensuring seamless access to news content. To enhance data security and integrity, I created a C#-based database backup automation, ensuring reliable data transfers. This role strengthened my expertise in cross-platform mobile development, backend services, and database security, while improving my ability to design scalable and maintainable systems.",
  },
];

export const education: EducationModel[] = [
  {
    id: 0,
    title: "Anadolu University (Current)",
    date: "2023-Still",
    location: "Eskisehir, Turkey (Remote)",
    isCurrent: true,
  },
  {
    id: 1,
    title: "Akdeniz University",
    date: "2021-2023",
    location: "Antalya, Turkey",
  },
  {
    id: 2,
    title: "Halkalı Vocational Technical Anatolian High School",
    date: "2017-2021",
    location: "Istanbul, Turkey",
  },
];
