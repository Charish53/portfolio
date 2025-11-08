import { useState, FormEvent, ChangeEvent, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import AnimatedSection from './AnimatedSection'
import AnimatedCard from './AnimatedCard'
import Background from './Background'
import './Contact.css'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface ContactInfo {
  icon: ReactNode
  title: string
  content: string
  link: string | null
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState<string>('')

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    // Here you would typically send the form data to a backend
    setStatus('success')
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setStatus(''), 3000)
  }

  const contactInfo: ContactInfo[] = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      content: 'charish230@gmail.com',
      link: 'mailto:charish230@gmail.com'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      content: '+91 96520-83641',
      link: 'tel:+919652083641'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      content: 'Visakhapatnam, India',
      link: null
    }
  ]

  return (
    <section id="contact" className="contact" style={{ position: 'relative', zIndex: 1 }}>
      <Background />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <AnimatedSection>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </AnimatedSection>
        <div className="contact-content">
          <AnimatedSection delay={0.2}>
            <div className="contact-info">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Let's talk about your project
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Feel free to reach out if you're looking for a developer, have a question,
                or just want to connect.
              </motion.p>
              <div className="contact-details">
                {contactInfo.map((info, index) => (
                  <AnimatedCard key={index} delay={0.2 + index * 0.1}>
                    <motion.div 
                      className="contact-item"
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div 
                        className="contact-icon"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {info.icon}
                      </motion.div>
                      <div className="contact-text">
                        <h4>{info.title}</h4>
                        {info.link ? (
                          <a href={info.link}>{info.content}</a>
                        ) : (
                          <p>{info.content}</p>
                        )}
                      </div>
                    </motion.div>
                  </AnimatedCard>
                ))}
              </div>
              <motion.div 
                className="contact-social"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {[
                  { href: 'https://linkedin.com/in/reddipalli-sai-charish', icon: <FaLinkedin />, label: 'LinkedIn' },
                  { href: 'https://github.com', icon: <FaGithub />, label: 'GitHub' },
                  { href: 'https://leetcode.com', icon: <SiLeetcode />, label: 'Leetcode' }
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
            </div>
          </AnimatedSection>
          <AnimatedCard delay={0.3}>
            <motion.form 
              className="contact-form" 
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {[
                { name: 'name', type: 'text', placeholder: 'Your Name' },
                { name: 'email', type: 'email', placeholder: 'Your Email' },
                { name: 'subject', type: 'text', placeholder: 'Subject' }
              ].map((field, index) => (
                <motion.div
                  key={field.name}
                  className="form-group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={formData[field.name as keyof FormData]}
                    onChange={handleChange}
                    required
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
              ))}
              <motion.div
                className="form-group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <motion.textarea
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                ></motion.textarea>
              </motion.div>
              <motion.button 
                type="submit" 
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
              {status === 'success' && (
                <motion.p 
                  className="form-status success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  Message sent successfully!
                </motion.p>
              )}
            </motion.form>
          </AnimatedCard>
        </div>
      </div>
    </section>
  )
}

export default Contact

