import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { FaReact, FaNode, FaPython, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaDatabase } from 'react-icons/fa'
import { SiTypescript, SiPostgresql, SiDocker, SiPytorch, SiTensorflow, SiOpencv, SiFastapi } from 'react-icons/si'
import AnimatedSection from './AnimatedSection'
import AnimatedCard from './AnimatedCard'
import Background from './Background'
import './Skills.css'

interface Skill {
  name: string
  icon: ReactNode
  level: number
}

interface SkillCategory {
  title: string
  skills: Skill[]
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Machine Learning & AI',
      skills: [
        { name: 'PyTorch', icon: <SiPytorch />, level: 90 },
        { name: 'TensorFlow', icon: <SiTensorflow />, level: 85 },
        { name: 'Transformers', icon: <FaPython />, level: 88 },
        { name: 'LangChain', icon: <FaPython />, level: 85 },
        { name: 'OpenCV', icon: <SiOpencv />, level: 82 }
      ]
    },
    {
      title: 'Backend & APIs',
      skills: [
        { name: 'Python', icon: <FaPython />, level: 92 },
        { name: 'FastAPI', icon: <SiFastapi />, level: 90 },
        { name: 'Node.js', icon: <FaNode />, level: 85 },
        { name: 'Express', icon: <FaNode />, level: 85 },
        { name: 'Elasticsearch', icon: <FaDatabase />, level: 88 }
      ]
    },
    {
      title: 'Frontend & Databases',
      skills: [
        { name: 'React', icon: <FaReact />, level: 88 },
        { name: 'TypeScript', icon: <SiTypescript />, level: 85 },
        { name: 'JavaScript', icon: <FaJs />, level: 90 },
        { name: 'ClickHouse', icon: <SiPostgresql />, level: 80 },
        { name: 'PostgreSQL', icon: <SiPostgresql />, level: 82 }
      ]
    },
    {
      title: 'Tools & DevOps',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, level: 90 },
        { name: 'Docker', icon: <SiDocker />, level: 85 },
        { name: 'ONNX', icon: <FaPython />, level: 80 },
        { name: 'TensorRT', icon: <FaPython />, level: 75 }
      ]
    }
  ]

  return (
    <section id="skills" className="skills" style={{ position: 'relative', zIndex: 1 }}>
      <Background />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <AnimatedSection>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Here are some of the technologies I work with
          </p>
        </AnimatedSection>
        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <AnimatedCard key={categoryIndex} delay={categoryIndex * 0.1}>
              <motion.div 
                className="skill-category"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="category-title">{category.title}</h3>
                <div className="skill-items">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skillIndex} 
                      className="skill-item"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: skillIndex * 0.1 }}
                    >
                      <div className="skill-header">
                        <motion.div 
                          className="skill-icon"
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          {skill.icon}
                        </motion.div>
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div 
                          className="skill-progress"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: skillIndex * 0.1, ease: "easeOut" }}
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

