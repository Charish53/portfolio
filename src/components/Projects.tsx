import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import AnimatedSection from './AnimatedSection'
import AnimatedCard from './AnimatedCard'
import TiltedCard from './TiltedCard'
import Background from './Background'
import './Projects.css'

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  github: string
  demo: string
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Peppo AI – Video Generation Platform',
      description: 'Full-stack AI-powered video generation platform with React frontend and Node.js backend. Integrated Replicate API for AI-driven video creation with secure Supabase authentication and responsive TailwindCSS UI.',
      image: '/video_generation.png',
      technologies: ['Node.js', 'Express', 'Supabase', 'React', 'Tailwind', 'Replicate API'],
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      id: 2,
      title: 'Document Insights Generator using RAG',
      description: 'Web-based application for querying multi-format documents (PDF, CSV, TXT) using Retrieval-Augmented Generation pipelines. Integrated LangChain, ChromaDB, and multiple LLMs (OpenAI, Cohere, Llama3) with interactive Streamlit frontend.',
      image: '/rag.png',
      technologies: ['LangChain', 'ChromaDB', 'Streamlit', 'OpenAI', 'Cohere', 'Python', 'Llama3'],
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      id: 3,
      title: 'ViTalia: Malaria Detection using Vision Transformers',
      description: 'Vision Transformer solution for malaria detection achieving 97.53% accuracy, surpassing CNN models by 2.13%. Utilized pre-trained ViT models with efficient data preprocessing and augmentation techniques.',
      image: '/malaria.png',
      technologies: ['Transformers', 'PyTorch', 'TorchVision', 'TensorFlow'],
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      id: 4,
      title: 'Object Detection using Deep Learning',
      description: 'Implemented YOLOv8 and Faster R-CNN models for real-world applications including license plate recognition and wheat grain detection. Optimized inference using ONNX runtime and TensorRT for production deployment.',
      image: '/object_detection.png',
      technologies: ['PyTorch', 'OpenCV', 'ONNX', 'TensorRT', 'Torchvision'],
      github: 'https://github.com',
      demo: 'https://example.com'
    }
  ]

  return (
    <section id="projects" className="projects" style={{ position: 'relative', zIndex: 1 }}>
      <Background />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <AnimatedSection>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </AnimatedSection>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <AnimatedCard key={project.id} delay={index * 0.1}>
              <TiltedCard className="project-card" intensity={10}>
                <div className="project-image">
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div 
                    className="project-overlay"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="project-links">
                      <motion.a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaGithub />
                      </motion.a>
                      <motion.a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Live Demo"
                        whileHover={{ scale: 1.2, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaExternalLinkAlt />
                      </motion.a>
                    </div>
                  </motion.div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span 
                        key={techIndex} 
                        className="tech-tag"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: techIndex * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </TiltedCard>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

