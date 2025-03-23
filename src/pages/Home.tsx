import { motion } from 'framer-motion'
import Navbar from '../components/Navbar.tsx'
import Footer from '../components/Footer.tsx'
import Hero from '../components/Home/Hero'
import Companies from '../components/Home/Companies.tsx'
import BusinessNeeds from '../components/Home/BusinessNeeds.tsx'

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 10, y: 10, transition: { duration: 1.5 } },
}

const App = () => {
  return (
    <div className="flex min-h-screen w-full max-w-[100vw] flex-col overflow-x-hidden">
      <Navbar />
      <div className="w-full flex-grow">
        <Hero />

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariants}
          viewport={{ once: true }}
        >
          <Companies />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariants}
          viewport={{ once: false }}
        >
          <BusinessNeeds />
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}

export default App
