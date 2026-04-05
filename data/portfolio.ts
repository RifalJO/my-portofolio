export const personal = {
  name: 'Muhamad Rizki Rifaldi',
  handle: 'Rifaldi',
  title: 'Data Enthusiast & ML Practitioner',
  tagline: 'I turn raw data into actionable insights using Python, SQL, and Machine Learning.',
  bio: [
    "I'm a final-semester Information Systems student at Gunadarma University (GPA 3.84/4.00). I specialize in building end-to-end data solutions — from raw data preprocessing and feature engineering to ML model deployment and interactive dashboards.",
    "My projects span customer segmentation with K-Means, food recommendation systems with KNN, and my undergraduate thesis MoCal — an AI-powered calorie estimator using LLMs and fuzzy matching. I believe data should tell a story, not just fill a table.",
  ],
  location: 'Ciracas, Jakarta Timur',
  email: 'rizkirifaldi0602@gmail.com',
  phone: '(+62) 812-1229-8742',
  linkedin: 'https://www.linkedin.com/in/rifaldi706',
  github: 'https://github.com/RifalJO',
  cvPath: '/cv.pdf',
  available: true,
  stats: [
    { value: '3+', label: 'Years', sub: 'Learning & Building' },
    { value: '4', label: 'Projects', sub: 'Shipped End-to-End' },
    { value: '3', label: 'Certs', sub: 'Dicoding ML Track' },
  ],
}

export const skills = [
  {
    category: 'Data Analysis',
    items: ['Python', 'SQL', 'Pandas', 'NumPy', 'EDA', 'Statistical Analysis', 'Feature Engineering'],
  },
  {
    category: 'Machine Learning',
    items: ['Scikit-learn', 'Supervised Learning', 'Unsupervised Learning', 'Deep Learning', 'NLP', 'KNN', 'K-Means', 'RFM Analysis'],
  },
  {
    category: 'Visualization',
    items: ['Tableau', 'Power BI', 'Matplotlib', 'Seaborn', 'Grafana'],
  },
  {
    category: 'Tools & Infra',
    items: ['Docker', 'FastAPI', 'Jupyter Notebook', 'Git', 'VS Code', 'PostgreSQL', 'Prometheus', 'RStudio', 'Notion'],
  },
]

export interface Project {
  id: string
  featured: boolean
  title: string
  subtitle: string
  period: string
  description: string
  tags: string[]
  link: string
  badge: string | null
  image: string
}

export const projects: Project[] = [
  {
    id: 'mocal',
    featured: true,
    title: 'MoCal: AI-Powered Calorie Estimator',
    subtitle: 'Undergraduate Thesis · Gunadarma University',
    period: 'Jan 2026 – Apr 2026',
    description: 'Built a free-text calorie estimation web app using FastAPI and React 18, integrating Groq API (LLaMA 3.1-8b) as the NLP parser. Designed a 4-layer food matching pipeline — exact match → fuzzy match → USDA API fallback → LLM estimation — against a PostgreSQL database of 2,955 food entries. Evaluated with MAE and SUS questionnaire; deployed on Vercel.',
    tags: ['FastAPI', 'React 18', 'LLaMA 3.1', 'PostgreSQL', 'RapidFuzz', 'USDA API'],
    link: 'https://mo-cal.vercel.app/',
    badge: null,
    image: '/assets/mocal.png',
  },
  {
    id: 'rfm-kmeans',
    featured: false,
    title: 'Customer Segmentation — RFM + K-Means',
    subtitle: 'Asah Program led by Dicoding',
    period: 'Sep 2025 – Jan 2026',
    description: 'Preprocessed the Online Retail II UCI dataset — handling duplicates, missing values, invalid transactions, and engineering a TotalPrice feature for RFM computation. Built a K-Means clustering model (Scikit-learn) with StandardScaler normalization; determined k=5 as optimal via Elbow Method and Silhouette Score of 0.600, segmenting customers into 5 behavioral profiles. Visualized RFM-based cluster distributions using Seaborn, identifying actionable segments from high-value actives to at-risk and churned groups.',
    tags: ['Python', 'Scikit-learn', 'K-Means', 'RFM', 'Seaborn', 'UCI Dataset'],
    link: 'https://visualizationcapstonea25cs282.streamlit.app/',
    badge: '🏆 Top Capstone',
    image: '/assets/RFM.png',
  },
  {
    id: 'food-knn',
    featured: false,
    title: 'Food Recommendation System — KNN',
    subtitle: 'Academic Research · Gunadarma University',
    period: 'May 2025 – Jul 2025',
    description: 'Collected and preprocessed 1,138 food records via web scraping (Python, BeautifulSoup), including data cleaning and nutritional feature engineering. Built a KNN-based recommendation model (Scikit-learn) with content-based filtering to deliver personalized dietary suggestions based on users\' nutritional profiles. Deployed the system as a web-based application, integrating data processing, ML inference, and user interaction in a single end-to-end pipeline.',
    tags: ['Python', 'KNN', 'Scikit-learn', 'BeautifulSoup', 'Content-Based Filtering'],
    link: 'https://re-fit.vercel.app/',
    badge: null,
    image: '/assets/Refit.png',
  },
  {
    id: 'beijing-air',
    featured: false,
    title: 'Beijing Air Quality Dashboard',
    subtitle: 'Dicoding Data Analysis Course',
    period: '2025',
    description: 'Performed end-to-end exploratory data analysis on multi-station Beijing air quality data using Python and Pandas. Built an interactive multi-tab Streamlit dashboard with Folium-based geospatial visualizations to surface pollution patterns across stations and time periods. Identified seasonal trends and station-level anomalies, translating raw sensor data into actionable environmental insights.',
    tags: ['Python', 'Streamlit', 'Folium', 'Pandas', 'EDA', 'Geospatial'],
    link: 'https://rifaldikualitasudara.streamlit.app/',
    badge: null,
    image: '/assets/airbeijing.png',
  },
]

export interface ExperienceItem {
  id: string
  period: string
  role: string
  org: string
  gpa: string | null
  bullets: string[]
}

export const experience: ExperienceItem[] = [
  {
    id: 'dicoding-cohort',
    period: 'Aug 2025 – Jan 2026',
    role: 'Machine Learning Cohort Participant',
    org: 'Asah Program led by Dicoding',
    gpa: null,
    bullets: [
      'Recognized as Top Capstone Project for delivering a high-impact customer segmentation solution aligned with the program theme.',
      'Implemented supervised and unsupervised learning algorithms on real-world datasets using Python and Scikit-learn, covering the full ML pipeline from preprocessing and feature engineering to model evaluation.',
      'Optimized model performance through feature engineering and evaluation techniques while collaborating in a structured team environment simulating professional data science workflows.',
    ],
  },
  {
    id: 'gunadarma',
    period: '2022 – Present',
    role: "Bachelor's Degree in Information Systems",
    org: 'Gunadarma University',
    gpa: '3.84 / 4.00',
    bullets: [
      'Relevant Coursework: Statistics, Data Mining Concepts, Big Data Computing, Introduction to Data Science, Data Modeling & Visualization, Database Systems I & II, Artificial Intelligence, Decision Support Systems.',
      'Delivered 4 end-to-end data and ML projects across academic and bootcamp tracks, including an undergraduate thesis deployed to production on Vercel.',
    ],
  },
]

export interface Achievement {
  id: string
  title: string
  org: string
  year: string
  description: string
  certImages: string[]
}

export const achievements: Achievement[] = [
  {
    id: 'top-capstone',
    title: 'Top Capstone Project',
    org: 'Asah Program led by Dicoding',
    year: '2026',
    description: 'Awarded for delivering a high-impact customer segmentation solution demonstrating strong analytical, technical, and problem-solving skills.',
    certImages: ['/assets/serti/[Asah 2025] Best Capstone.jpg'],
  },
  {
    id: 'cert-ml-pemula',
    title: 'Belajar Machine Learning untuk Pemula',
    org: 'Dicoding Indonesia',
    year: '2025',
    description: 'Certified in foundational machine learning concepts including supervised learning, unsupervised learning, and model evaluation.',
    certImages: [
      '/assets/serti/belajar-machine-learning/belajar machine learning_page-0001.jpg',
      '/assets/serti/belajar-machine-learning/belajar machine learning_page-0002.jpg',
      '/assets/serti/belajar-machine-learning/belajar machine learning_page-0003.jpg',
    ],
  },
  {
    id: 'cert-deep-learning',
    title: 'Belajar Fundamental Deep Learning',
    org: 'Dicoding Indonesia',
    year: '2025',
    description: 'Certified in deep learning fundamentals including neural networks, CNNs, and practical implementation with Python.',
    certImages: [
      '/assets/serti/fundamental-deep-learning/fundamental deep learning_page-0001.jpg',
      '/assets/serti/fundamental-deep-learning/fundamental deep learning_page-0002.jpg',
      '/assets/serti/fundamental-deep-learning/fundamental deep learning_page-0003.jpg',
    ],
  },
  {
    id: 'cert-ml-system',
    title: 'Membangun Sistem Machine Learning',
    org: 'Dicoding Indonesia',
    year: '2025',
    description: 'Certified in building production-grade ML systems including end-to-end pipelines, deployment strategies, and model monitoring.',
    certImages: [
      '/assets/serti/Membangun-sistem-machine-learning/membangun sistem machine learning_page-0001.jpg',
      '/assets/serti/Membangun-sistem-machine-learning/membangun sistem machine learning_page-0002.jpg',
    ],
  },
]

export interface BlogPost {
  id: number
  tag: string
  title: string
  excerpt: string
  date: string
  image: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    tag: 'Data Analysis',
    title: 'EDA Itu Seni, Bukan Sekadar Statistik',
    excerpt: 'Exploratory Data Analysis yang baik bukan tentang berapa banyak chart yang kamu buat, tapi seberapa dalam pertanyaan yang kamu ajukan ke data.',
    date: 'Mar 2026',
    image: 'https://placehold.co/800x450/e8e8e6/999999?text=Blog+Post+1',
  },
  {
    id: 2,
    tag: 'Machine Learning',
    title: 'Kenapa K-Means Gagal di Dataset Saya?',
    excerpt: 'Tiga kesalahan umum saat menggunakan K-Means yang hampir semua orang lakukan di proyek pertama mereka — dan cara menghindarinya.',
    date: 'Feb 2026',
    image: 'https://placehold.co/800x450/e8e8e6/999999?text=Blog+Post+2',
  },
  {
    id: 3,
    tag: 'Project Story',
    title: 'Dari Skripsi ke Produk: Lessons from MoCal',
    excerpt: 'Membangun MoCal mengajarkan saya bahwa skripsi terbaik adalah yang bisa dipakai orang lain. Ini ceritanya.',
    date: 'Jan 2026',
    image: 'https://placehold.co/800x450/e8e8e6/999999?text=Blog+Post+3',
  },
]
