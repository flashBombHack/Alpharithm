import { useEffect } from 'react'
import { motion } from 'framer-motion'

const SplashScreen = ({ onFinish }: { onFinish: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onFinish, 4000)
    return () => clearTimeout(timer)
  }, [onFinish])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 0.2 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="absolute h-64 w-64 rounded-full bg-gradient-to-r from-blue-300 to-blue-100 blur-2xl"
      />

      <motion.img
        src="/logo.svg"
        alt="Logo"
        style={{ width: '150px', height: '150px' }}
        initial={{ opacity: 0, scale: 0.9, rotate: -50 }}
        animate={{ opacity: 1, scale: 1.3, rotate: 0 }}
        exit={{ opacity: 0, scale: 1.5, rotate: 10 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      />

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-20 ml-10 text-2xl italic text-gray-600"
      >
        <div>
          AI Models, Landing Page -{' '}
          <span className="font-semibold text-[#1774FD]"> Alpharithm</span>
        </div>
        <div> Assessment: Abdullahi Ismail</div>
        <div>Role: Frontend Developer</div>
      </motion.p>
    </div>
  )
}

export default SplashScreen
