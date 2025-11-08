import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface AnimatedTextProps {
  children: ReactNode
  className?: string
  delay?: number
  type?: 'fade' | 'slide' | 'scale'
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  children, 
  className = '', 
  delay = 0,
  type = 'fade'
}) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const variants = {
    fade: {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: { duration: 0.6, delay }
      }
    },
    slide: {
      hidden: { opacity: 0, x: -50 },
      visible: { 
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }
      }
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { 
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants[type]}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedText

