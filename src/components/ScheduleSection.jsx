import { motion } from 'framer-motion'

export default function ScheduleSection() {
  const ceremonies = [
    {
      title: '결혼 예배',
      date: '2026년 8월 8일 금요일',
      location: '호텔 인터불고 대구 웨딩인터빌리지홀',
    },
    {
      title: '제주 피로연',
      date: '2026년 8월 8일 금요일 오전 10시 30분 ~ 오후 5시 30분',
      location: '제주 파라다이스회관',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, rotateX: -20 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
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
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">
          예식 일정
        </h2>

        <div className="space-y-8">
          {ceremonies.map((ceremony, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.02, translateY: -5 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200 cursor-pointer"
            >
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                {ceremony.title}
              </h3>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">날짜:</span> {ceremony.date}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">장소:</span> {ceremony.location}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
