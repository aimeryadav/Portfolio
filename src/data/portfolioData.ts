export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  image: string;
  images?: string[];
  videoUrl?: string;
  iframeUrl?: string;
  github?: string;
  live?: string;
}

export const portfolioData = {
  personalInfo: {
    name: "AMIT",
    aka: "AIMER YADAV",
    title: "Multidisciplinary Creative Technologist",
    bio: [
      "I am a final-year Computer Science & Engineering student at RV Institute of Technology & Management, Bengaluru.",
      "I am a multidisciplinary creator working across technology, music, storytelling and visual production.",
      "My creative work encompasses roles as a Writer, Director, Singer, Rapper, Songwriter, Composer, Music Producer, Post-Production Specialist, Designer, and Developer."
    ],
    resumeUrl: "/Amit_Resume.pdf",
    social: {
      email: "mailto:aimeryadav@gmail.com",
      phone: "+91 8840050560",
      github: "https://github.com/aimeryadav",
      linkedin: "https://linkedin.com/in/aimeryadav",
      instagram: "https://instagram.com/aimeryadav",
      youtube: "https://youtube.com/@Aimeryadav"
    }
  },
  skills: [
    {
      category: "Computer Science & Development",
      items: [
        "React", "Node.js", "Express.js", "MongoDB", "Mongoose", "RESTful APIs", "JWT Authentication",
        "TypeScript", "Tailwind CSS", "Vite", "Framer Motion", "JavaScript (ES6+)", "HTML5", "CSS3", 
        "Full-Stack Web Development", "Responsive UI/UX Design", "C", "C++", "Python", 
        "Data Structures & Algorithms", "Object-Oriented Programming", "GitHub", "Git", 
        "Machine Learning", "NumPy", "Blockchain", "Cloud Computing", "Computer Networks", "Operating Systems"
      ]
    },
    {
      category: "AI & Generative AI",
      items: [
        "Generative AI", "Prompt Engineering", "AI-assisted Content Creation", 
        "AI-assisted Writing", "AI-assisted Coding", "AI Image Generation", 
        "AI Video Generation", "AI Music Generation", "AI Research & Productivity", 
        "AI Workflow Design", "AI Creative Automation", "AI Tools & Platforms"
      ]
    },
    {
      category: "Film, Video & Post-Production",
      items: [
        "Video Editing", "Advanced Video Editing", "Complete Post-Production", 
        "Color Correction", "Color Grading", "Motion Graphics", "VFX", 
        "Compositing", "Green Screen / Chroma Key", "Visual Effects", 
        "Video Finishing", "Sound Design", "Audio Editing", 
        "Music Video Post-Production", "Trailer Editing", "Promo Editing", 
        "Short-form Video Editing", "Cinematic Editing", "Creative Direction", 
        "Visual Storytelling"
      ]
    },
    {
      category: "Music & Audio",
      items: [
        "Singing", "Rap", "Songwriting", "Lyrics Writing", "Song Composition", 
        "Music Production", "Recording", "Audio Editing", "Sound Design", 
        "Mixing", "Mastering"
      ]
    },
    {
      category: "Design",
      items: [
        "Graphic Design", "UI/UX Design", "Visual Design", "Poster Design", 
        "Album Cover Design", "Cover Art", "YouTube Thumbnail Design", 
        "Social Media Creatives", "Branding", "Presentation Design"
      ]
    },
    {
      category: "Microsoft & Professional Tools",
      items: [
        "Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint", 
        "Microsoft Outlook", "Microsoft Teams", "Microsoft Office Suite", 
        "Document Creation", "Document Formatting", "Spreadsheet Management", 
        "Data Presentation", "Presentation / Pitch Deck Creation"
      ]
    },
    {
      category: "Marketing & Digital",
      items: [
        "Digital Marketing", "Social Media Marketing", "Content Strategy", 
        "Personal Branding", "Creative Marketing", "Social Media Content Creation"
      ]
    },
    {
      category: "Writing & Filmmaking",
      items: [
        "Writing", "Songwriting", "Story Writing", "Screenwriting", 
        "Dialogue Writing", "Script Writing", "Poetry / Shayari", 
        "Concept Development", "Direction", "Film Direction", 
        "Music Video Direction", "Creative Direction", "Visual Direction", 
        "Storytelling"
      ]
    },
    {
      category: "Software",
      items: [
        "Adobe Premiere Pro", "Adobe After Effects", "Adobe Photoshop", 
        "DaVinci Resolve", "Ableton Live", "Pro Tools", "Canva", "Figma", "Blender"
      ]
    }
  ],
  projects: [
    {
      id: "project-1",
      title: "Aimer Studios",
      description: "A creative studio portfolio demonstrating modern UI/UX principles, featuring dynamic content and a responsive design.",
      category: "Development",
      technologies: [
        "React 19",
        "TypeScript",
        "Tailwind CSS v4",
        "Vite",
        "Framer Motion",
        "Lenis Scroll",
        "Lucide Icons",
        "HTML5 & CSS3",
        "JavaScript (ES6+)",
        "Responsive UI/UX",
        "Git & GitHub"
      ],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
      videoUrl: "/aimer-studios.mp4?v=2",
      github: "https://github.com/aimeryadav",
      live: "https://www.aimerstudios.in"
    },
    {
      id: "project-2",
      title: "RVITM CSE Department Website",
      category: "Full-Stack Development",
      description: "Modern Computer Science & Engineering department web platform built with a clean, responsive interface to showcase academic resources, faculty directory, student placements, and dynamic notice boards.",
      technologies: [
        "React 19",
        "Node.js",
        "Express 5",
        "MongoDB",
        "Mongoose ODM",
        "REST APIs",
        "JWT Auth",
        "Bcrypt",
        "Axios",
        "React Router",
        "Context API",
        "Vite",
        "Role-Based Access (RBAC)",
        "Responsive UI/UX"
      ],
      image: "/college-website-1.jpg",
      images: [
        "/college-website-1.jpg",
        "/college-website-2.jpg",
        "/college-website-3.jpg",
        "/college-website-4.jpg"
      ],
      github: "https://github.com/aimeryadav/College-Website",
      live: "https://college-website-flax-ten.vercel.app/"
    },
    {
      id: "project-3",
      title: "Creative Developer Portfolio",
      description: "Interactive personal portfolio featuring dynamic theme switching, fluid animations, custom cursor mechanics, responsive architecture, and modular sections.",
      category: "Frontend Engineering",
      technologies: [
        "React 19",
        "TypeScript",
        "Tailwind CSS v4",
        "Vite",
        "Framer Motion",
        "Lenis Scroll",
        "Lucide Icons",
        "HTML5 & CSS3",
        "JavaScript (ES6+)",
        "Dark / Light Theming",
        "Custom Cursor Engine",
        "Responsive UI/UX",
        "Git & GitHub",
        "Vercel Deployment"
      ],
      image: "/portfolio-preview.jpg",
      github: "https://github.com/aimeryadav/Portfolio",
      live: "https://portfolio-aimer-yadav.vercel.app/"
    },
    {
      id: "project-4",
      title: "Debut EP Production",
      description: "Written, composed, produced, mixed, and mastered a 5-track EP blending hip-hop and electronic elements.",
      category: "Music",
      technologies: ["Ableton Live", "Pro Tools", "Vocals", "Synths"],
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop",
      live: "https://spotify.com"
    }
  ] as Project[],
  certificates: [
    {
      id: "be10x-ai-tools",
      title: "AI Tools & Claude Workshop",
      subtitle: "Certificate of Completion",
      issuer: "be10x",
      date: "September 13th, 2026",
      type: "certification" as const,
      badge: "Verified Workshop Credential",
      recipient: "Amit",
      description: "Hands-on certification in prompt engineering, Claude workflows, rapid presentation generation, data analysis, and AI-assisted coding and debugging.",
      skills: ["Claude AI", "Prompt Engineering", "AI Presentation Creation", "Data Analysis with AI", "AI Coding & Debugging"],
      bulletPoints: [
        "Create presentations using AI in under 5 min",
        "Analyse data using AI in under 30 min",
        "Code and Debug using AI in under 10 min"
      ],
      image: "/cert-be10x.png",
      url: "/cert-be10x-ai-tools.pdf",
      docType: "PDF Document",
      signatories: ["Aditya Goenka (Co-founder)", "Aditya Kachave (Co-founder)"]
    },
    {
      id: "analytixlabs-internship",
      title: "Executive Leadership Program",
      subtitle: "Certificate of Internship",
      issuer: "AnalytixLabs",
      date: "March 2025 – May 2025",
      type: "internship" as const,
      badge: "Internship Certificate",
      recipient: "Amit",
      description: "Awarded for successful completion of a 2-month internship under the Executive Leadership Program at AnalytixLabs, actively driving community engagement and campus initiatives.",
      skills: ["Executive Leadership", "Campus Outreach", "Event Coordination", "Community Management", "Program Execution"],
      bulletPoints: [
        "Successfully completed 2-month leadership internship",
        "Spearheaded student-driven pan-India leadership initiatives",
        "Organized outreach programs and campus community engagement"
      ],
      image: "/cert-analytixlabs.jpg",
      url: "/cert-analytixlabs.jpg",
      docType: "Certificate Image",
      signatories: ["Sumeet Bansal (Co-founder)", "Sumit Shukla (Director)"]
    },
    {
      id: "analytixlabs-lor",
      title: "Letter of Recommendation",
      subtitle: "Executive Leadership Program Endorsement",
      issuer: "AnalytixLabs",
      date: "June 26, 2025",
      type: "recommendation" as const,
      badge: "Official Endorsement",
      recipient: "Amit",
      description: "Official Letter of Recommendation by AnalytixLabs leadership commending Amit's professionalism, proactive initiative, communication skills, and collaborative team mindset.",
      skills: ["Team Leadership", "Campus Outreach", "Content Creation", "Community Management", "Program Execution"],
      bulletPoints: [
        "Led team leadership, campus outreach, event coordination, content creation, and program execution",
        "Played an important role in strengthening community and driving engagement among student participants",
        "Consistently demonstrated professionalism, strong communication skills, and collaborative mindset"
      ],
      quote: "Amit consistently demonstrated professionalism, strong communication skills, and a collaborative mindset throughout their internship. His ability to take initiative, manage responsibilities independently, and work well within a team environment made him a valuable member of the program.",
      image: "/lor-analytixlabs.jpg",
      url: "/lor-analytixlabs.jpg",
      docType: "Document Letter",
      signatories: ["Sumit Shukla (Director)", "Raunak Verma (Founder's Office)"]
    }
  ],
  aiResponses: {
    "What certificates does Amit have?": "Amit holds a verified Certificate of Completion in the AI Tools & Claude Workshop from be10x, a Certificate of Internship in the Executive Leadership Program from AnalytixLabs, and an official Letter of Recommendation from AnalytixLabs leadership.",
    "Tell me about his internship and recommendation.": "Amit completed an internship under the Executive Leadership Program at AnalytixLabs (March–May 2025). He led campus outreach, event coordination, content creation, and community management. He received an official Letter of Recommendation from Director Sumit Shukla and Raunak Verma from the Founder's Office commending his leadership and initiative.",
    "What technologies does Amit know?": "I am proficient in C, C++, Python, JavaScript, HTML, CSS, React, and various tools for AI and media production.",
    "Tell me about Amit.": "I am a final-year CS student and a multidisciplinary creator spanning technology, music, filmmaking, and design.",
    "Tell me about his experience.": "Amit brings over 7 years of social media strategy and digital growth, 5+ years of content writing and creative copywriting, 2+ years of music production and composition, along with freelance consulting experience working with Modicare and political campaigns.",
    "What are his creative skills?": "I work as a Writer, Director, Singer, Rapper, Composer, Music Producer, Post-Production Specialist, and Designer.",
    "What software does he use?": "My primary software stack includes Adobe Premiere Pro, After Effects, Photoshop, DaVinci Resolve, Ableton Live, Pro Tools, Canva, and Figma.",
    "Show me his projects.": "You can explore my projects in the Projects section below, which includes web development, filmmaking, music production, and AI art.",
    "What does Amit do?": "I blend technology and creativity—building software, producing music, directing films, and exploring Generative AI workflows.",
    "What AI skills does he have?": "I specialize in Generative AI, Prompt Engineering, AI-assisted Coding and Writing, as well as AI Image, Video, and Music Generation."
  }
};
