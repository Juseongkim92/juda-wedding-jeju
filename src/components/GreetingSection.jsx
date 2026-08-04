import { motion } from 'framer-motion'

export default function GreetingSection() {
  const greetingLines = [
    '서로를 향한',
    '오늘의 찬란한 사랑을',
    '함께 축복해주시면',
    '더없이 행복하겠습니다.',
  ]

  const lineVariants = {
    hidden: { opacity: 0, y: 20, rotateX: -30 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true, margin: '-100px' }}
      className="py-20 px-4"
    >
      <div className="max-w-2xl mx-auto text-center">
        <motion.div className="space-y-4">
          {greetingLines.map((line, idx) => (
            <motion.p
              key={idx}
              variants={lineVariants}
              className="text-xl md:text-2xl text-gray-700 font-light"
            >
              {line}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
