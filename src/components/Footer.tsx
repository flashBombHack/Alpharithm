const Footer = () => {
  return (
    <footer className="bg-[#04142B] px-6 py-6 text-white md:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between text-center md:flex-row md:text-left">
        {/* Logo */}
        <div className="mb-3 flex items-center gap-3 md:mb-0">
          <img src="/logo.png" alt="Logo" className="h-10 w-10" />
          <span className="text-lg font-semibold">Alpharithm</span>
        </div>

        {/* Copyright */}
        <p className="text-sm">
          © {new Date().getFullYear()} Alpharithm. All Rights Reserved | Abdullahi Ismail - FE -
          Assessment.
        </p>
      </div>
    </footer>
  )
}

export default Footer
