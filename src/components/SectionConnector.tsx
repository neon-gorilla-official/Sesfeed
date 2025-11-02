import { motion } from 'motion/react';

export function SectionConnector() {
  return (
    <div className="relative h-16 sm:h-24 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Animated data line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="w-px h-full bg-gradient-to-b from-transparent via-primary/50 to-transparent origin-top"
        />
        
        {/* Pulse dot */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 rounded-full bg-accent"
          />
        </motion.div>
      </div>
    </div>
  );
}
