import { motion } from 'framer-motion'

export default function FamilySection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: '-100px' }}
      className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">
          신랑 · 신부
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="mb-6">
              <div className="text-5xl mb-2">🤵</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">신랑</h3>
              <p className="text-gray-600">김주성</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">
                홍길동의 아들<br />
                박희숙 · 김한섭
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="mb-6">
              <div className="text-5xl mb-2">👰</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">신부</h3>
              <p className="text-gray-600">조다빈</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">
                홍길동의 딸<br />
                박희숙 · 김한섭
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
