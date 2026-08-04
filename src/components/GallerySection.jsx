import { motion } from 'framer-motion'
import { useState } from 'react'

export default function GallerySection() {
  const images = Array.from({ length: 23 }, (_, i) => ({
    id: i,
    thumb: `/images/gallery/thumb/img${i}.webp`,
    full: `/images/gallery/full/img${i}.webp`,
  }))

  const [selectedId, setSelectedId] = useState(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true, margin: '-100px' }}
      className="py-20 px-4 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">
          갤러리
        </h2>

        <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <motion.div
              key={img.id}
              variants={itemVariants}
              whileHover={{ scale: 1.15, rotate: 2, zIndex: 10 }}
              onClick={() => setSelectedId(img.id)}
              className="cursor-pointer rounded-lg overflow-hidden aspect-square shadow-lg"
            >
              <img
                src={img.thumb}
                alt={`gallery-${img.id}`}
                className="w-full h-full object-cover hover:opacity-80 transition"
              />
            </motion.div>
          ))}
        </motion.div>

        {selectedId !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          >
            <motion.img
              src={images[selectedId].full}
              alt="Full view"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="max-w-2xl max-h-screen object-contain rounded-lg"
            />
          </motion.div>
        )}
      </div>
    </motion.section>
  )
}
