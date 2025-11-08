import { ReactNode } from 'react'
import { FaCode, FaRocket, FaHeart } from 'react-icons/fa'
import AnimatedSection from './AnimatedSection'
import AnimatedCard from './AnimatedCard'
import Background from './Background'
import './About.css'

interface Feature {
  icon: ReactNode
  title: string
  description: string
}

const About: React.FC = () => {
  const features: Feature[] = [
    {
      icon: <FaCode />,
      title: 'ML & Backend Engineering',
      description: 'Building scalable AI/ML pipelines and robust backend systems with 99% uptime'
    },
    {
      icon: <FaRocket />,
      title: 'Performance Optimization',
      description: 'Enhancing system performance by 30-40% through intelligent design and optimization'
    },
    {
      icon: <FaHeart />,
      title: 'Real-World Impact',
      description: 'Passionate about creating solutions that deliver measurable impact at scale'
    }
  ]

  return (
    <section id="about" className="about" style={{ position: 'relative', zIndex: 1 }}>
      <Background />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <AnimatedSection>
          <h2 className="section-title">About Me</h2>
        </AnimatedSection>
        <div className="about-content">
          <AnimatedSection delay={0.2}>
            <div className="about-text">
              <p>
                I'm a ML + Backend Engineer at Tejoule Software System Pvt Ltd, where I work on 
                integrating AI/ML technologies into production systems. I specialize in building 
                scalable solutions using LLMs, Elasticsearch, ClickHouse, and FastAPI to create 
                systems that are faster, smarter, and more efficient.
              </p>
              <p>
                Currently pursuing my Bachelor of Technology in Computer Science and Engineering 
                at IIITDM Kancheepuram with a CGPA of 8.63/10. My academic journey has been complemented 
                by hands-on experience in machine learning, backend development, and system design.
              </p>
              <p>
                Beyond technical work, I serve as the General Affairs Secretary at IIITDM Kancheepuram, 
                leading initiatives that bridge the gap between students and administration. I'm passionate 
                about creating real-world impact through technology and always eager to tackle complex 
                challenges.
              </p>
              <div className="about-stats">
                {[
                  { value: '4+', label: 'Major Projects' },
                  { value: '8.63', label: 'CGPA' },
                  { value: '99%', label: 'Uptime' }
                ].map((stat, index) => (
                  <AnimatedCard key={index} delay={0.4 + index * 0.1}>
                    <div className="stat-item">
                      <h3>{stat.value}</h3>
                      <p>{stat.label}</p>
                    </div>
                  </AnimatedCard>
                ))}
              </div>
            </div>
          </AnimatedSection>
          <div className="about-features">
            {features.map((feature, index) => (
              <AnimatedCard key={index} delay={0.3 + index * 0.1}>
                <div className="feature-card">
                  <div className="feature-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

