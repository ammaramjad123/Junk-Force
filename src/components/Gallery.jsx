// src/components/Gallery.jsx
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1605600659879-0e6b7c3f0b1f?ixlib=rb-4.0.3",
    title: "Full House Cleanout",
    category: "Residential"
  },
  {
    url: "https://images.unsplash.com/photo-1583846783214-7229a91b20a6?ixlib=rb-4.0.3",
    title: "Office Furniture Removal",
    category: "Commercial"
  },
  {
    url: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3",
    title: "Garage Cleanout",
    category: "Residential"
  },
  {
    url: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3",
    title: "Construction Debris",
    category: "Construction"
  },
  {
    url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3",
    title: "Yard Waste Removal",
    category: "Yard"
  },
  {
    url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3",
    title: "Appliance Disposal",
    category: "Single Item"
  }
]

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openModal = (index) => {
    setCurrentIndex(index)
    setSelectedImage(galleryImages[index])
  }

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % galleryImages.length
    setCurrentIndex(newIndex)
    setSelectedImage(galleryImages[newIndex])
  }

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length
    setCurrentIndex(newIndex)
    setSelectedImage(galleryImages[newIndex])
  }

  return (
    <section id="gallery" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Work</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            See why Memphis trusts JunkForce for all their junk removal needs.
          </p>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group cursor-pointer overflow-hidden rounded-2xl"
              onClick={() => openModal(index)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-semibold">{image.title}</p>
                  <p className="text-accent text-sm">{image.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-accent transition"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            
            <button
              className="absolute left-4 text-white hover:text-accent transition"
              onClick={(e) => { e.stopPropagation(); prevImage() }}
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            
            <button
              className="absolute right-4 text-white hover:text-accent transition"
              onClick={(e) => { e.stopPropagation(); nextImage() }}
            >
              <ChevronRight className="w-10 h-10" />
            </button>
            
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage.url}
              alt={selectedImage.title}
              className="max-w-full max-h-[90vh] object-contain rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Gallery