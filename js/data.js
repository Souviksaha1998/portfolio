// NeuralPortfolio - Data Configuration
// Edit this file to update all content

const portfolioData = {
    // PROFILE
    profile: {
        name: "Souvik Saha",
        greeting: "Hello, I'm",
        roles: ["Machine Learning Engineer", "Data Scientist", "AI Researcher"],
        bio: "Passionate about building intelligent systems. I specialize in computer vision, NLP, and deploying ML models at scale.",
        photo: "assets\\souvik.jpg",
        resumeLink: "#",
        email: "ssouvik.191@gmail.com"
    },

    // EDUCATION
    education: [
        {
            degree: "Master of Science in Machine Learning",
            institution: "Stanford University",
            year: "2021 - 2023",
            description: "Specialized in Deep Learning and Computer Vision.",
            icon: "🎓"
        },
        {
            degree: "Bachelor of Technology in Computer Science",
            institution: "Indian Institute of Technology",
            year: "2017 - 2021",
            description: "First Class with Distinction. Focus on AI fundamentals.",
            icon: "📚"
        },
        {
            degree: "T.T.S",
            institution: "Indian Institute of Technology",
            year: "2017 - 2021",
            description: "First Class with Distinction. Focus on AI fundamentals.",
            icon: "📚"
        }
    ],

    // CAREER
    career: [
        {
            role: "Senior ML Engineer",
            company: "Google DeepMind",
            period: "2023 - Present",
            location: "San Francisco, CA",
            description: "Leading development of multimodal AI systems. Building scalable training pipelines for LLMs.",
            techStack: ["Python", "JAX", "TPUs", "Transformers", "Kubernetes"]
        },
        {
            role: "Machine Learning Engineer",
            company: "OpenAI",
            period: "2022 - 2023",
            location: "San Francisco, CA",
            description: "Developed fine-tuning pipelines for GPT models. Implemented RLHF systems.",
            techStack: ["Python", "PyTorch", "CUDA", "Redis", "Docker"]
        },
        {
            role: "Data Scientist",
            company: "Meta AI",
            period: "2021 - 2022",
            location: "Menlo Park, CA",
            description: "Built recommendation systems serving billions of users.",
            techStack: ["Python", "PyTorch", "SQL", "Spark", "Presto"]
        }
    ],

    // SKILLS
    skills: {
        languages: [
            { name: "Python", level: 95 },
            { name: "JavaScript", level: 75 },
            { name: "SQL", level: 85 },
            { name: "C++", level: 70 }
        ],
        frameworks: [
            { name: "PyTorch", level: 95 },
            { name: "TensorFlow", level: 85 },
            { name: "JAX", level: 80 },
            { name: "Hugging Face", level: 90 }
        ],
        mlDomains: ["Computer Vision", "NLP", "Generative AI", "Reinforcement Learning", "MLOps"],
        tools: ["Docker", "Kubernetes", "MLflow", "W&B", "Git", "AWS", "GCP"]
    },

    // PROJECTS
    projects: [
        {
            title: "Neural Style Transfer App",
            description: "Real-time style transfer using optimized VGG networks with live camera processing.",
            image: "assets/project1.jpg",
            techStack: ["PyTorch", "FastAPI", "React"],
            demoLink: "#",
            codeLink: "https://github.com/username/style-transfer"
        },
        {
            title: "Conversational AI Assistant",
            description: "Domain-specific chatbot using fine-tuned LLaMA with RAG architecture.",
            image: "assets/project2.jpg",
            techStack: ["LangChain", "Pinecone", "FastAPI"],
            demoLink: "#",
            codeLink: "https://github.com/username/ai-assistant"
        },
        {
            title: "Medical Image Segmentation",
            description: "U-Net model for tumor detection in MRI scans with 0.92 Dice score.",
            image: "assets/project3.jpg",
            techStack: ["PyTorch", "MONAI", "Docker"],
            demoLink: "#",
            codeLink: "https://github.com/username/medical-seg"
        }
    ],

    // CONTACT
    contact: {
        email: "ssouvik.191@gmail.com",
        phone: "+1 (555) 123-4567",
        location: "San Francisco, California",
        social: {
            github: "https://github.com/username",
            linkedin: "https://linkedin.com/in/username",
            twitter: "https://twitter.com/username"
        }
    },

    // NAVIGATION
    navLinks: [
        { name: "About", href: "index.html" },
        { name: "Education", href: "education.html" },
        { name: "Career", href: "career.html" },
        { name: "Skills", href: "skills.html" },
        { name: "Projects", href: "projects.html" },
        { name: "Contact", href: "contact.html" }
    ]
};
