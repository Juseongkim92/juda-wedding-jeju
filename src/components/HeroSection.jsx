import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative w-full h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-white overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="/images/main.jpg"
          alt="Wedding Hero"
          className="w-full h-full object-cover"
        />
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="relative z-10 text-center text-white"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          조다빈 · 김주성
        </h1>
        <p className="text-xl md:text-2xl font-light">
          결혼합니다
        </p>
      </motion.div>
    </motion.section>
  )
}
