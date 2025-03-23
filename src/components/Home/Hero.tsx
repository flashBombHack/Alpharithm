import { useEffect, useState } from 'react'
import 'animate.css'

interface Shape {
  id: number
  top: string
  left: string
  size: string
  opacity: number
  animationDelay: string
  animationDuration: string
  shapeType: 'hexagon' | 'ring' | 'triangle' | 'square' | 'star'
}

const Hero = () => {
  const [shapes, setShapes] = useState<Shape[]>([])
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const generateShapes = (): Shape[] => {
      const shapeTypes: Shape['shapeType'][] = ['hexagon', 'ring', 'triangle', 'square', 'star']
      const shapeCount = isMobile ? 100 : 300 // Reduce the number of shapes on mobile

      return Array.from({ length: shapeCount }).map((_, index) => ({
        id: index,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: `${isMobile ? 3 + Math.random() * 10 : 5 + Math.random() * 12}px`, // Smaller shapes on mobile
        opacity: 0.03 + Math.random() * 0.12,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${2 + Math.random() * 2}s`,
        shapeType: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
      }))
    }

    setShapes(generateShapes())
  }, [isMobile])

  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#04142B] px-6 text-center text-white">
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className={`absolute z-10 flex items-center justify-center ${
            shape.shapeType === 'ring' ? 'border border-white opacity-30' : ''
          }`}
          style={{
            top: shape.top,
            left: shape.left,
            width: shape.size,
            height: shape.size,
            opacity: shape.opacity,
            animation: `floatSmooth ${shape.animationDuration} ease-in-out infinite alternate,
                        rotateSlow ${shape.animationDuration} linear infinite`,
            animationDelay: shape.animationDelay,
          }}
        >
          {shape.shapeType === 'hexagon' && (
            <svg width="100%" height="100%" viewBox="0 0 100 100">
              <polygon
                points="50,0 100,25 100,75 50,100 0,75 0,25"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
            </svg>
          )}
          {shape.shapeType === 'ring' && (
            <div className="h-full w-full rounded-full border border-white opacity-20"></div>
          )}
          {shape.shapeType === 'triangle' && (
            <svg width="100%" height="100%" viewBox="0 0 100 100">
              <polygon points="50,0 100,100 0,100" fill="none" stroke="white" strokeWidth="1" />
            </svg>
          )}
          {shape.shapeType === 'square' && (
            <svg width="100%" height="100%" viewBox="0 0 100 100">
              <rect width="100" height="100" fill="none" stroke="white" strokeWidth="1" />
            </svg>
          )}
          {shape.shapeType === 'star' && (
            <svg width="100%" height="100%" viewBox="0 0 100 100">
              <polygon
                points="50,5 61,38 95,38 67,58 78,91 50,70 22,91 33,58 5,38 39,38"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
            </svg>
          )}
        </div>
      ))}

      <div className="pointer-events-none absolute bottom-0 left-0 z-0 h-[65vh] w-full bg-[radial-gradient(ellipse_at_bottom,_rgba(0,55,255,0.4)_0%,_rgba(4,20,43,1)_75%)]" />
      <div className="relative z-20">
        <p className="animate__animated animate__fadeIn animate__delay-1s mb-3 text-sm font-semibold tracking-wide text-[#7191FF]">
          Leverage on Automation
        </p>
        <h1 className="animate__animated animate__fadeInUp animate__delay-0s text-4xl font-bold leading-tight md:text-6xl">
          AI Models for <br />
          <span className="wipe-effect relative inline-block text-white">Business Solutions</span>
        </h1>
        <p className="animate__animated animate__fadeInUp animate__delay-0s mt-4 max-w-2xl text-base text-white md:text-lg">
          Leverage the power of AI to automate, analyze, and optimize your workflows. Our
          specialized models are designed to fit different business needs.
        </p>
        <button className="md:text-md animate__animated animate__fadeInUp animate__delay-0s mt-6 transform rounded-[1rem] bg-white from-[#007AFF] to-[#00E0FF] px-5 py-3 text-sm font-semibold text-black transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-gradient-to-r hover:text-white hover:shadow-xl focus:outline-none md:px-6">
          Get Started Now
        </button>
      </div>
      <style>
        {`
          @keyframes floatSmooth {
            0% { transform: translateY(0px) scale(1); }
            50% { transform: translateY(-10px) scale(1.05); }
            100% { transform: translateY(0px) scale(1); }
          }

          @keyframes rotateSlow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </section>
  )
}

export default Hero
