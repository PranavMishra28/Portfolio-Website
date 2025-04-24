import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  deloitte,
  sparc,
  psu,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "/resume",
    title: "Resume",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Development Intern",
    company_name: "SPARC Foundation",
    icon: sparc,
    iconBg: "#383E56",
    date: "Jan 2025 - Present",
    points: [
      "Built a MERN stack app with React Native and AWS for skill development at Penn State",
      "Crafted 4+ RESTful APIs with Node.js and MongoDB, boosting performance by 20%",
      "Enhanced AWS deployment with analytics, lifting engagement by 30%",
    ],
  },
  {
    title: "Technology and Strategy Consulting Intern",
    company_name: "Deloitte",
    icon: deloitte,
    iconBg: "#E6DEDD",
    date: "May 2024 - Aug 2024",
    points: [
      "Analyzed 10K+ data points using Python and SQL to forecast acquisition outcomes across 3 industries",
      "Optimized financial analysis with VBA and ETL pipelines, achieving 95% data accuracy and 30% faster processing",
      "Engineered Power BI dashboards tracking M&A metrics, reducing reporting time by 40% while improving data visibility",
    ],
  },
  {
    title: "Software Engineering Intern",
    company_name: "Penn State Nittany AI Advance",
    icon: psu,
    iconBg: "#383E56",
    date: "Aug 2023 - Jan 2024",
    points: [
      "Developed scalable OCR system with Amazon Textract and Vue.js, reducing processing time by 60%",
      "Led automation initiatives improving accuracy by 40% through iterative Scrum framework refinements",
      "Implemented ML-based document classification achieving 90% accuracy across 5+ document types",
    ],
  },
  {
    title: "Software Engineering Intern",
    company_name: "Deloitte",
    icon: deloitte,
    iconBg: "#E6DEDD",
    date: "Jun 2022 - Aug 2022",
    points: [
      "Developed and deployed microservices using Docker and CI/CD, enhancing system scalability and reliability",
      "Integrated AWS Lambda for serverless computing, optimizing resource efficiency and reducing operational overhead",
      "Built an automated testing suite with 85% coverage, significantly reducing deployment failures",
    ],
  },
];

const projects = [
  {
    name: "React Video Call App",
    description: "A real-time video communication platform built with WebRTC technology, supporting high-quality video calls with low latency and seamless user authentication.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "webrtc",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "orange-text-gradient",
      },
    ],
    source_code_link: "https://github.com/PranavMishra28/React-Video-Call-App",
  },
  {
    name: "TensorFlow Object Detection",
    description: "High-performance object detection system leveraging TensorFlow and NVIDIA cuDNN for real-time processing, achieving exceptional accuracy across diverse image datasets.",
    tags: [
      {
        name: "tensorflow",
        color: "blue-text-gradient",
      },
      {
        name: "opencv",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
      {
        name: "cuda",
        color: "orange-text-gradient",
      },
    ],
    source_code_link: "https://github.com/PranavMishra28/Tensorflow-Object-Detection",
  },
  {
    name: "Decentralized Banking",
    description: "Innovative decentralized banking platform built on Internet Computer Protocol, enabling secure and efficient financial transactions through smart contracts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "motoko",
        color: "green-text-gradient",
      },
      {
        name: "icp",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/PranavMishra28/DApp-on-ICP-Project",
  },
  {
    name: "5-Stage MIPS CPU",
    description: "Advanced pipelined 32-bit CPU implementation featuring sophisticated branch prediction and forwarding mechanisms, designed and tested using industry-standard tools.",
    tags: [
      {
        name: "verilog",
        color: "blue-text-gradient",
      },
      {
        name: "mips",
        color: "green-text-gradient",
      },
      {
        name: "fpga",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/PranavMishra28/CMPSC311-C-Projects",
  },
];

export { technologies, experiences, projects };