import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; 

function Reveal(props) {
  const [ref, inView] = useInView({
    threshold: 0.2, 
    triggerOnce: true, 
  });

  return (
    <div ref={ref}>
      <motion.div
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'} 
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {props.children}
      </motion.div>
    </div>
  );
}

export default Reveal;
