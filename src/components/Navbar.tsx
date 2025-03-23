import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed left-0 top-0 z-50 flex w-full items-center justify-between px-6 py-3 transition-all duration-300 md:px-10 ${
        isScrolled ? 'bg-white text-[#22263F] shadow-lg' : 'mt-3 bg-transparent text-white'
      }`}
    >
      {/* Logo */}
      <img src="/logo.png" alt="Logo" className="h-10" />

      {/* Desktop Menu */}
      <div className="absolute left-1/2 hidden -translate-x-1/2 gap-4 text-xs font-normal md:flex">
        {['Models', 'Pricing', 'About Us', 'Contact Us', 'Custom Models'].map((item) => (
          <span
            key={item}
            className="relative cursor-pointer rounded-md px-3 py-2 transition-all duration-300 hover:scale-105 hover:bg-white/20"
          >
            {item}
            <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-white transition-all duration-300 hover:w-full"></span>
          </span>
        ))}
      </div>

      {/* Buttons (Hidden on mobile) */}
      <div className="hidden gap-3 md:flex">
        <button
          className={`rounded-md border px-3 py-2 text-xs transition ${
            isScrolled
              ? 'border-[#22263F] bg-white text-[#22263F] hover:bg-gray-200'
              : 'border-white bg-transparent text-white hover:bg-white hover:text-black'
          }`}
        >
          Login
        </button>
        <button
          className={`rounded-md px-3 py-2 text-xs transition ${
            isScrolled
              ? 'bg-[#22263F] text-white hover:bg-[#3A3F6E]'
              : 'bg-white text-black hover:bg-gray-200'
          }`}
        >
          Get Started Now
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <button className="text-black md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X size={28} /> : <Menu size={16} />}
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`fixed right-0 top-0 z-50 h-full w-64 transform bg-white shadow-lg transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-start space-y-6 p-6">
          {['Models', 'Pricing', 'About Us', 'Contact Us', 'Custom Models'].map((item) => (
            <span
              key={item}
              className="cursor-pointer text-lg font-medium text-[#22263F] transition hover:text-[#3A3F6E]"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </span>
          ))}
          <button className="w-full rounded-md border border-[#22263F] px-4 py-2 text-sm text-[#22263F] transition hover:bg-[#3A3F6E] hover:text-white">
            Login
          </button>
          <button className="w-full rounded-md bg-[#22263F] px-4 py-2 text-sm text-white transition hover:bg-[#3A3F6E]">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
