import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import ProfileCard from './ProfileCard'
import FuzzyText from './FuzzyText'
import RotatingText from './RotatingText'
import ScrambledText from './ScrambledText'
import Background from './Background'
import './Hero.css'

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero" style={{ position: 'relative', zIndex: 1 }}>
      <Background />
      <div className="hero-container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.h1 
              className="hero-greeting"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Hello, I'm
            </motion.h1>
            <motion.div
              className="hero-name-wrapper"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ marginBottom: '1rem' }}
            >
              <FuzzyText
                baseIntensity={0.2}
                hoverIntensity={0.5}
                enableHover={true}
                fontSize="clamp(1.8rem, 4vw, 3.5rem)"
                fontWeight={900}
                color="#fff"
              >
                Reddipalli Sai Charish
              </FuzzyText>
            </motion.div>
            <motion.h3 
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}
            >
              <span>I'm a</span>
              <span style={{ display: 'inline-block', position: 'relative', minHeight: '2.5rem', verticalAlign: 'top' }}>
              <RotatingText
                texts={['ML Engineer', 'Full Stack Developer']}
                mainClassName="typing-text"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
              </span>
            </motion.h3>
            <motion.div 
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <ScrambledText
                className="scrambled-text-demo"
                radius={30}
                duration={1.2}
                speed={0.5}
                scrambleChars=".:"
                style={{ margin: 0, maxWidth: '100%', fontFamily: 'inherit', fontSize: 'inherit', color: 'inherit' }}
              >
                Passionate about building real-world software that delivers impact at scale. Interested in integrating AI/ML technologies into production systems to create solutions that are faster, smarter, and more efficient.
              </ScrambledText>
            </motion.div>
            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <motion.button 
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.button>
              <motion.button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </motion.div>
            <motion.div 
              className="hero-social"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              {[
                { href: 'https://github.com', icon: <FaGithub />, label: 'GitHub' },
                { href: 'https://linkedin.com/in/reddipalli-sai-charish', icon: <FaLinkedin />, label: 'LinkedIn' },
                { href: 'https://leetcode.com', icon: <SiLeetcode />, label: 'Leetcode' },
                { href: 'mailto:charish230@gmail.com', icon: <FaEnvelope />, label: 'Email' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <ProfileCard />
          </motion.div>
        </div>
        <motion.div 
          className="scroll-indicator" 
          onClick={() => scrollToSection('about')}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.2 }}
        >
          <FaArrowDown />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
