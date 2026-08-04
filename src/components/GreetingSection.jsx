import { motion } from 'framer-motion'

export default function GreetingSection() {
  const greetingLines = [
    '서로를 향한',
    '오늘의 찬란한 사랑을',
    '함께 축복해주시면',
    '더없이 행복하겠습니다.',
  ]

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: '-100px' }}
      className="py-20 px-4"
    >
      <div className="max-w-2xl mx-auto text-center">
        <motion.div className="space-y-4">
          {greetingLines.map((line, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
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
