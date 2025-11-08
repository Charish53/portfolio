import { ReactNode } from 'react'
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'
import AnimatedSection from './AnimatedSection'
import AnimatedCard from './AnimatedCard'
import Background from './Background'
import './Experience.css'

interface ExperienceItem {
  title: string
  company: string
  location: string
  duration: string
  description: string[]
  technologies: string[]
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      title: 'ML + Backend Engineer',
      company: 'Tejoule Software System Pvt Ltd',
      location: 'Remote',
      duration: '2024 - Present',
      description: [
        'Building scalable AI/ML pipelines and robust backend systems with 99% uptime',
        'Integrating LLMs, Elasticsearch, ClickHouse, and FastAPI to create efficient production systems',
        'Optimizing system performance by 30-40% through intelligent design and optimization',
        'Working on real-time data processing and machine learning model deployment'
      ],
      technologies: ['Python', 'FastAPI', 'LLMs', 'Elasticsearch', 'ClickHouse', 'Docker', 'Kubernetes']
    }
  ]

  return (
    <section id="experience" className="experience" style={{ position: 'relative', zIndex: 1 }}>
      <Background />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <AnimatedSection>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            My professional journey and contributions
          </p>
        </AnimatedSection>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <AnimatedCard key={index} delay={0.2 + index * 0.1}>
              <div className="experience-item">
                <div className="experience-header">
                  <div className="experience-icon">
                    <FaBriefcase />
                  </div>
                  <div className="experience-info">
                    <h3 className="experience-title">{exp.title}</h3>
                    <h4 className="experience-company">{exp.company}</h4>
                    <div className="experience-meta">
                      <span className="experience-location">
                        <FaMapMarkerAlt /> {exp.location}
                      </span>
                      <span className="experience-duration">
                        <FaCalendarAlt /> {exp.duration}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="experience-content">
                  <ul className="experience-description">
                    {exp.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                  <div className="experience-technologies">
                    {exp.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

