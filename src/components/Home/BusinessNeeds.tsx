import { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import { Swiper as SwiperCore } from 'swiper'

const businessNeeds = [
  {
    id: 'market-prediction',
    title: 'Market Prediction',
    description: 'Use AI insights for smarter business decisions and stay competitive.',
    image: '/img/business/market-prediction.png',
  },
  {
    id: 'finance',
    title: 'Finance',
    description: 'Our AI models analyze financial data for confident investments.',
    image: '/img/business/finance.png',
  },
  {
    id: 'analytics',
    title: 'Analytics',
    description: 'Transform data into insights with AI analytics that enhance decisions.',
    image: '/img/business/analytics.png',
  },
  {
    id: 'content-generation',
    title: 'Content Generation',
    description: 'Create quality content easily with AI that knows your brand and audience.',
    image: '/img/business/content-generation.png',
  },
  {
    id: 'customer-support',
    title: 'Customer Support',
    description: 'Use AI chatbots for instant, personalized customer support.',
    image: '/img/business/customer-support.png',
  },
]

const BusinessNeeds = () => {
  const [selectedTab, setSelectedTab] = useState(businessNeeds[0].id)
  const swiperRef = useRef<SwiperCore | null>(null)

  const handleTabClick = (id: string, index: number) => {
    setSelectedTab(id)
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index)
    }
  }

  return (
    <section className="mt-5 w-full px-4 py-12 md:px-16">
      {/* Heading */}
      <div className="mb-6 flex flex-col items-center justify-center text-center">
        <h2 className="max-w-[80%] text-3xl font-semibold md:max-w-[60%] md:text-4xl lg:max-w-[50%]">
          AI Models tailored for your business needs
        </h2>
        <p className="mt-3 max-w-[90%] text-[#828282] md:max-w-[70%] lg:max-w-[55%]">
          Leverage the power of AI to automate, analyze, and optimize your workflows. Our
          specialized models are designed to fit different business needs.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center py-5">
        <div className="scrollbar-hide flex gap-2 overflow-x-auto rounded-lg border px-1 py-1 md:gap-4">
          {businessNeeds.map((item, index) => (
            <button
              key={item.id}
              className={`whitespace-nowrap rounded-md px-3 py-1.5 text-sm transition focus:outline-none ${
                selectedTab === item.id
                  ? 'bg-[#03217F] text-white'
                  : 'bg-transparent text-[#A7A7A7] hover:bg-gray-100 hover:text-black'
              }`}
              onClick={() => handleTabClick(item.id, index)}
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={40}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        breakpoints={{
          768: { slidesPerView: 'auto' },
        }}
        onSlideChange={(swiper) => {
          const newIndex = swiper.realIndex
          setSelectedTab(businessNeeds[newIndex].id)
        }}
        className="w-full"
      >
        {businessNeeds.map((item) => (
          <SwiperSlide
            key={item.id}
            className="flex max-h-[700px] max-w-[700px] shrink-0 items-center justify-center transition-all duration-300"
          >
            <div
              className={`relative flex h-full w-[100%] flex-col-reverse items-center rounded-lg border bg-[#F6FAF3] pb-5 pt-5 shadow-lg transition-transform duration-500 ease-in-out md:w-[80%] md:flex-row md:pl-5 lg:w-full lg:pb-0 ${selectedTab === item.id ? 'scale-100' : 'scale-90'}`}
            >
              <div className="mt-3 w-full p-5 text-center md:mt-0 md:w-[50%] md:p-0 md:pr-6 md:text-left">
                <h3 className="text-xs font-semibold text-[#828282]">{item.title}</h3>
                <p className="mt-2 text-xl font-bold text-[#22263F] md:text-2xl">
                  {item.description}
                </p>
                <button className="mt-4 rounded-md bg-[#03217F] px-4 py-2 text-xs text-white">
                  Learn More
                </button>
              </div>

              <div className="flex w-full items-center justify-center md:w-[50%] md:items-end md:justify-end">
                <img
                  src={item.image}
                  alt={item.title}
                  className="md:rounded-0 rounded-lg-tl h-auto w-[90%] max-w-[400px] rounded-lg rounded-br-lg md:max-w-[500px]"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default BusinessNeeds
