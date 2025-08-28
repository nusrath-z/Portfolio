// data/projects.ts
export interface Project {
  slug: string; // unique identifier for URL
  title: string;
  category: string;
  summary: string; // short one-liner
  about: string;   // detailed description / context
  tech: string[];
  contributions: string[];
  achievements: string[];
  videos?: { title: string; src: string }[];
  github?: string;
  demo?: string;
  drive?: string;
  image: string; // optional thumbnail for listing view
}

export const projects: Project[] = [
  {
    slug: "sports-club-management",
    title: "Sportganise-Capstone",
     image: "poster.png",
    category: "Web",
    summary: "Full-stack web & mobile platform for streamlining sports club operations.",
    about:
      "Sportganise is a full-stack web and mobile platform built for Accès Badminton, a non-profit organization in Montreal, designed to streamline sports club operations. The platform enables players, coaches, and administrators to register, log in, and access information on training sessions, events, competitions, and feedback.",
    tech: ["React", "TypeScript", "JavaScript", "Spring Boot", "PostgreSQL", "Docker", "Jest", "Vitest"],
    contributions: [
      "Built responsive front-end with role-based access control and API integration.",
      "Defined and maintained TypeScript types/interfaces for React–Java communication.",
      "Debugged backend–frontend data inconsistencies (e.g., postal code mismatch).",
      "Collaborated on Docker containerization for deployment.",
      "Conducted frontend testing with Jest & Vitest for UI reliability."
    ],
    achievements: [
      "Delivered the Training Program feature on time by taking ownership of teammate’s pending tasks.",
      "Adapted quickly to frequent design changes without delaying project timelines.",
      "Optimized Forum filtering and search pages, reducing unnecessary re-renders and improving performance."
    ],
    videos: [
      { title: "My Contribution Part 1", src: "/videos/sp1.mp4" },
      { title: "My Contribution Part 2", src: "/videos/sp2.mp4" }
    ],
    github: "https://github.com/Sisahga/Sportganise",
    drive: "https://drive.google.com/drive/folders/14jw__ADDVr6kwlnhtIaqQ0_GjmR9aSDS?usp=drive_link",
   
  },

  {
    slug: "condo-management-system",
    title: "Condo Management System",
     category: "Web",
    summary: "Agile mini-capstone project centralizing condo operations for residents and managers.",
    about:
      "As part of a 10-member team in a mini-capstone course, we developed a full-stack Condo Management System following the Agile (Scrum) methodology, with our Teaching Assistant acting as the client to provide requirements and feedback each sprint. The project addressed common condo management challenges such as fragmented communication, inefficient request handling, and lack of transparency by centralizing operations into a single platform. Key features included a Financial System Page, Property Profile Page, Request Page, Reservation Page, Chat Page, and an OpenAI-powered chatbot for FAQs and automation.",
    tech: ["React Native", "Node.js", "Express.js", "PostgreSQL", "Firebase", "AWS S3", "Cypress"],
    contributions: [
      "Designed and implemented RESTful APIs with Express.js and integrated PostgreSQL for backend data management.",
      "Developed responsive frontend interfaces with real-time data synchronization via Firebase and AWS S3 storage.",
      "Implemented role-based access control (RBAC) and secured API communication between frontend and backend.",
      "Created feature pages including Financial System, Chat Page, Request Page, Property Profile, and Reservation Page.",
      "Integrated OpenAI-powered chatbot for resident support and interactive communication.",
      "Executed end-to-end testing using Cypress to validate feature completeness and robustness."
    ],
    achievements: [
      "Successfully deployed real-time chat and request handling system improving resident–management response efficiency.",
      "Enhanced user experience by integrating an AI chatbot for automated query resolution.",
      "Delivered a modular and scalable architecture, enabling easy integration of new features."
    ],
    github: "https://github.com/AndyChhuon/SOEN390",
    demo: "https://6631cdc7b1c1fb7fa941a152--neon-lebkuchen-4543ff.netlify.app/",
    image: "condo.png"
  },

  {
    slug: "ml-course-project",
     category: "ML and Data Analytics",
    title: "Medical Image Classification",
    summary: "Applied CNNs and Transfer Learning to colorectal cancer dataset for image classification.",
    about:
      "This course project focused on applying deep learning techniques, specifically Convolutional Neural Networks (CNN), to image classification tasks using real-world datasets in computational pathology and computer vision. The project involved training, fine-tuning, and evaluating CNN models, as well as exploring Transfer Learning to improve model performance across datasets. Key datasets included Colorectal Cancer Classification, Prostate Cancer Classification, and Animal Faces Classification.",
    tech: ["PyTorch", "scikit-learn", "NumPy", "Pandas", "Matplotlib", "t-SNE", "CNN"],
    contributions: [
      "Trained and fine-tuned CNN models (ResNet18) for image classification on multiple datasets.",
      "Applied t-SNE for dimensionality reduction and visualized feature embeddings.",
      "Performed Transfer Learning to extract features from models trained on one dataset and applied them to others.",
      "Implemented classical ML classifiers (Logistic Regression, Random Forest) on CNN-extracted features.",
      "Analyzed and visualized model performance using accuracy metrics, confusion matrices, and training curves."
    ],
    achievements: [
      "Successfully trained and evaluated models achieving high accuracy on multiple datasets.",
      "Demonstrated effective use of Transfer Learning to leverage pre-trained models for new datasets.",
      "Produced clear visualizations of feature embeddings using t-SNE to interpret CNN outputs."
    ],
    github: "https://github.com/nusrath-z/Machine-Learning-Coursework/tree/main/Project",
    image: "medical.png"
  },

  {
  slug: "cpu-scheduling-simulator",
  title: "CPU Scheduling Simulation with Priority Queues",
  category: "CS Fundamentals",
  image: "cpu.png", 
  summary:
    "Java simulator that executes jobs using four custom priority queues (sorted list, unsorted list, pointer-heap, vector-heap) with starvation avoidance and full performance reporting.",

  about:
    "I developed a CPU Scheduling Simulator in Java from scratch, implementing four priority queue variants (Sorted List, Unsorted List, Pointer-based Min-Heap, and Vector-based Min-Heap). The simulator processed jobs defined by attributes such as name, length, priority, and timestamps, executing them in discrete CPU cycles while selecting the highest-priority job with FCFS tie-breaking. It incorporated a starvation-avoidance mechanism that dynamically escalated the oldest unexecuted job’s priority, ensuring fairness. For varying workload sizes (from 100 up to 1,000,000 jobs), the system produced performance metrics including execution time, average waiting time, total priority changes, and wall-clock runtime. Results were stored for the performance metrics and Documented the time and space complexity analysis of all operations.",
  tech: [
    "Java",
    "Data Structures",
    "Algorithm",
    "Big-O Analysis",
    "CPU Scheduling",
    "File I/O",
  ],

  contributions: [
    "Implemented four priority queue variants without java.util collections",
    "Built the discrete-time CPU simulation loop with FCFS tie-breaker and accurate timing (entry, end, wait).",
    "Added starvation-avoidance policy that promotes the oldest never-executed job to priority 1 every 30 terminations.",
    "Simulated workloads of up to 1,000,000 jobs and generated performance metrics including wait time, system time, and priority changes. ",

  ],

  achievements: [
    "Demonstrated clear performance differences between heap-based and list-based PQs at larger scales.",
    "Applied knowledge of cpu scheduling and, data structures and algorithm",
    "Produced reproducible experiments by generating one jobs array per scale and reusing it for all PQs."
  ],


},

{
  slug: "big-data-analysis-movies",
  title: "Big Data Analysis: SQL & NoSQL",
  category: "ML and Data Analytics",
  summary: "Analyzed movie datasets using PostgreSQL and MongoDB, comparing SQL vs. NoSQL performance.",
  about:
    "Collected and integrated real-world movie datasets from Kaggle and designed both relational schemas (PostgreSQL) and document-based models (MongoDB). Created ER and NoSQL model diagrams to provide clear data structure visualizations. Conducted multiple queries to extract insights, benchmarked performance, and analyzed indexing strategies to understand the strengths and trade-offs of SQL vs. NoSQL systems in big data contexts.",
  tech: ["PostgreSQL", "MongoDB", "Data Modeling", "Indexing", "Query Optimization"],
  contributions: [
    "Collected and integrated large-scale movie datasets from Kaggle.",
    "Designed relational and document-based data models with clear ER and NoSQL diagrams.",
    "Implemented 10+ queries for actionable insights such as top-rated movies per genre, director performance, and actor collaborations.",
    "Benchmarked query performance and optimized indexing to reduce query times by 20%.",
    "Delivered a live demo comparing SQL vs. NoSQL queries, highlighting efficiency, scalability, and system trade-offs."
  ],
  achievements: [
    "Improved query performance by 20% using effective indexing strategies.",
    "Demonstrated differences in query flexibility and scalability between SQL and NoSQL systems.",
    "Provided a clear, reproducible framework for analyzing large-scale movie datasets."
  ],
  
  image: "big.png"
},


];
