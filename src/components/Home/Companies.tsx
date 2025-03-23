const Companies = () => {
  const logos = [
    '/img/companies/layers.svg',
    '/img/companies/sisyphus.svg',
    '/img/companies/circooles.svg',
    '/img/companies/catalog.svg',
    '/img/companies/quotient.svg',
  ]

  return (
    <div className="flex min-h-[120px] flex-col items-center justify-center overflow-x-hidden bg-white md:min-h-[150px]">
      {/* Title */}
      <h2 className="mb-3 mt-4 text-center text-sm font-semibold text-gray-600 md:text-sm">
        Join 4,000+ companies already growing
      </h2>

      {/* Scrolling Logos */}
      <div className="relative w-full overflow-hidden px-2">
        <div className="animate-marquee flex gap-14 whitespace-nowrap md:gap-28">
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="Company Logo"
              className="h-12 flex-shrink-0 object-contain opacity-90 md:h-20"
              style={{ minWidth: '120px' }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Companies
