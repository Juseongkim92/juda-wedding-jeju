import { motion } from 'framer-motion'

export default function ShareSection() {
  const handleKakaoShare = () => {
    if (window.Kakao && window.Kakao.isInitialized()) {
      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: '조다빈 · 김주성 결혼합니다',
          description: '2026년 8월 8일 · 제주 파라다이스회관',
          imageUrl: window.location.origin + '/images/main.jpg',
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
      })
    }
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    alert('링크가 복사되었습니다!')
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: '-100px' }}
      className="py-20 px-4 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-blue-600">
          청첩장 공유하기
        </h2>
        <p className="text-center text-gray-600 mb-12">
          소중한 분들께 저희의 소식을 전해주세요.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleKakaoShare}
            className="px-8 py-4 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition"
          >
            🙬 카카오톡 공유하기
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCopyLink}
            className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition"
          >
            🔗 링크 복사하기
          </motion.button>
        </div>
      </div>
    </motion.section>
  )
}
