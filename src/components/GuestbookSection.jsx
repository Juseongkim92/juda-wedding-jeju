import { motion } from 'framer-motion'

export default function GuestbookSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: '-100px' }}
      className="py-20 px-4 bg-blue-50"
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-blue-600">
          축하 메시지
        </h2>
        <p className="text-center text-gray-600 mb-8">
          따뜻한 축하 메시지를 남겨주세요
        </p>
        <div className="bg-white p-8 rounded-2xl border border-blue-200 text-center">
          <p className="text-gray-500">축하 메시지 작성 기능이 준비 중입니다</p>
        </div>
      </div>
    </motion.section>
  )
}
