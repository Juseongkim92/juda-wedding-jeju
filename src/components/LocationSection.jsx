import { motion } from 'framer-motion'

export default function LocationSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: '-100px' }}
      className="py-20 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">
          오시는 길
        </h2>

        <div className="space-y-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-2xl border-2 border-blue-300"
          >
            <h3 className="text-2xl font-bold text-blue-600 mb-4">결혼 예배</h3>
            <p className="text-gray-700 mb-4">호텔 인터불고 대구 웨딩인터빌리지홀</p>
            <p className="text-gray-600 text-sm">대구 수성구 팔현길 212</p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl border-2 border-orange-300"
          >
            <h3 className="text-2xl font-bold text-orange-600 mb-4">제주 피로연</h3>
            <p className="text-gray-700 mb-4">제주 파라다이스회관</p>
            <p className="text-gray-600 text-sm">제주 서귀포시 대포동</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
