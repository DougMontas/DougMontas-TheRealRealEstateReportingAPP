import { motion as m } from 'framer-motion'

function AnimatedPage({children}) {
    const animations = {
        initial: {opacity: 0, x: 100},
        animate: {opacity: 1, x: 0},
        exit: {opacity: 0, x: -100},

    }

  return (
    <m.div variants={animations} initial={'initial'} animate={'animate'} exit={'exit'} transition={{duration: 1}}>
        {children}

    </m.div>
  )
}

export default AnimatedPage