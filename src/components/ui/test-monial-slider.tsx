"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote, Star, Sparkles, MessageCircle, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Testimonial {
  id: number
  name: string
  company: string
  position: string
  review: string
  image: string
  rating: number
  gradient: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "TechCorp Solutions",
    position: "CEO & Founder",
    review:
      "Working with this team has been absolutely transformative for our business. Their attention to detail and innovative approach helped us achieve results beyond our expectations. The professionalism and expertise they bring to every project is unmatched.",
    image: "/placeholder.svg?height=120&width=120",
    rating: 5,
    gradient: "from-purple-600 via-pink-600 to-red-600",
  },
  {
    id: 2,
    name: "Michael Chen",
    company: "Digital Innovations",
    position: "Chief Technology Officer",
    review:
      "The level of technical expertise and creative problem-solving we experienced was exceptional. They delivered on time, within budget, and exceeded all our requirements. I would highly recommend their services to any organization.",
    image: "/placeholder.svg?height=120&width=120",
    rating: 5,
    gradient: "from-blue-600 via-cyan-600 to-teal-600",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    company: "Growth Dynamics",
    position: "Marketing Director",
    review:
      "From the initial consultation to the final delivery, every interaction was professional and results-driven. They understood our vision perfectly and brought it to life in ways we never imagined possible. Truly outstanding work.",
    image: "/placeholder.svg?height=120&width=120",
    rating: 5,
    gradient: "from-green-600 via-emerald-600 to-cyan-600",
  },
  {
    id: 4,
    name: "David Thompson",
    company: "Future Enterprises",
    position: "Founder & CEO",
    review:
      "The strategic insights and execution quality we received were game-changing for our startup. Their team's dedication and expertise helped us scale rapidly while maintaining the highest standards of quality and innovation.",
    image: "/placeholder.svg?height=120&width=120",
    rating: 5,
    gradient: "from-orange-600 via-red-600 to-pink-600",
  },
  {
    id: 5,
    name: "Lisa Wang",
    company: "Creative Studios",
    position: "Creative Director",
    review:
      "Exceptional creativity combined with technical excellence. They transformed our ideas into reality with precision and artistry. The collaborative process was smooth, and the final results exceeded our highest expectations.",
    image: "/placeholder.svg?height=120&width=120",
    rating: 5,
    gradient: "from-indigo-600 via-purple-600 to-pink-600",
  },
]

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
      setIsAnimating(false)
    }, 300)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
      setIsAnimating(false)
    }, 300)
  }

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex(index)
      setIsAnimating(false)
    }, 300)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-black/5 animate-pulse"></div>
        {/* Floating particles - reduced for mobile performance */}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="hidden sm:block absolute w-1 h-1 bg-black/10 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main slider container */}
      <div className="relative min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] overflow-visible">
        <div
          className={`transition-all duration-500 ease-in-out ${
            isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
        >
          <TestimonialCard testimonial={testimonials[currentIndex]} />
        </div>
      </div>

      {/* Enhanced navigation */}
      <div className="flex items-center justify-between mt-6 sm:mt-8 lg:mt-12">
        <Button
          onClick={prevSlide}
          disabled={isAnimating}
          className="group relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-black hover:bg-gray-800 text-white shadow-2xl hover:shadow-black/50 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" />
          <Sparkles
            className="absolute top-1 left-1 w-4 h-4 sm:w-5 sm:h-5 text-white/50 group-hover:text-white animate-spin"
            style={{ animationDuration: "3s" }}
          />
        </Button>

        {/* Animated dots */}
        <div className="flex space-x-2 sm:space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isAnimating}
              className={`relative transition-all duration-500 disabled:cursor-not-allowed group ${
                index === currentIndex ? "w-8 sm:w-10 lg:w-12 h-3 sm:h-4" : "w-3 h-3 sm:w-4 sm:h-4 hover:scale-125"
              }`}
            >
              <div
                className={`absolute inset-0 rounded-full transition-all duration-500 ${
                  index === currentIndex
                    ? `bg-gradient-to-r ${testimonials[index].gradient} shadow-lg`
                    : "bg-gray-300 group-hover:bg-gray-400"
                }`}
              />
              {index === currentIndex && (
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/50 to-white/0 animate-pulse"></div>
              )}
              {index === currentIndex && (
                <Sparkles
                  className="absolute -top-2 -right-2 w-3 h-3 sm:w-4 sm:h-4 text-white animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                />
              )}
            </button>
          ))}
        </div>

        <Button
          onClick={nextSlide}
          disabled={isAnimating}
          className="group relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-black hover:bg-gray-800 text-white shadow-2xl hover:shadow-black/50 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" />
          <Sparkles
            className="absolute bottom-1 right-1 w-4 h-4 sm:w-5 sm:h-5 text-white/50 group-hover:text-white animate-spin"
            style={{ animationDuration: "3s" }}
          />
        </Button>
      </div>

      {/* Progress indicator */}
      <div className="mt-6 sm:mt-8 relative">
        <div className="w-full h-1.5 sm:h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r ${testimonials[currentIndex].gradient} rounded-full transition-all duration-1000 ease-out relative`}
            style={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse"></div>
            <Heart
              className="absolute right-1 top-1/2 -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 text-white animate-pulse"
              style={{ animationDelay: "0.3s" }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="relative w-full min-h-[300px] sm:min-h-[350px]">
      {/* Main card */}
      <div className="relative bg-white rounded-3xl shadow-2xl overflow-visible border border-gray-100">
        {/* Gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-5`}></div>

        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-24 sm:w-32 h-24 sm:h-32 bg-black rounded-full -translate-x-12 sm:-translate-x-16 -translate-y-12 sm:-translate-y-16 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-20 sm:w-24 h-20 sm:h-24 bg-black rounded-full translate-x-10 sm:translate-x-12 translate-y-10 sm:translate-y-12 animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 p-4 sm:p-6 lg:p-8 flex flex-col">
          {/* Quote icon with sparkles */}
          <div className="mb-3 sm:mb-4 relative">
            <div className={`inline-flex p-2 sm:p-3 lg:p-4 rounded-2xl bg-gradient-to-br ${testimonial.gradient} shadow-lg`}>
              <Quote className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
            </div>
            <Sparkles
              className="absolute top-0 right-0 w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-yellow-400 animate-pulse"
              style={{ animationDelay: "0.2s" }}
            />
            <Sparkles
              className="absolute bottom-0 left-0 w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 text-yellow-400 animate-pulse"
              style={{ animationDelay: "0.4s" }}
            />
          </div>

          {/* Review text with message circle */}
          <div className="flex-1 mb-4 sm:mb-6 relative">
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-800 font-light">"{testimonial.review}"</p>
            {/* <MessageCircle
              className="absolute bottom-0 right-0 w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-gray-400 animate-bounce"
              style={{ animationDuration: "2s", animationDelay: "0.6s" }}
            /> */}
          </div>

          {/* Rating */}
          <div className="flex items-center mb-4 sm:mb-6 space-x-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-yellow-400 fill-current animate-pulse"
                style={{ animationDelay: `${i * 100}ms` }}
              />
            ))}
          </div>

          {/* Client info with heart */}
          <div className="flex items-center relative">
            <div className="relative">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} rounded-full animate-spin`}
                style={{ animationDuration: "8s" }}
              ></div>
              <img
                src={testimonial.image || "/placeholder.svg"}
                alt={testimonial.name}
                className="relative w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full object-cover border-4 border-white shadow-xl"
              />
            </div>
            <div className="ml-3 sm:ml-4 lg:ml-6">
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-1">{testimonial.name}</h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 font-medium mb-1">{testimonial.position}</p>
              <p
                className={`text-xs sm:text-sm lg:text-base font-semibold bg-gradient-to-r ${testimonial.gradient} bg-clip-text text-transparent`}
              >
                {testimonial.company}
              </p>
            </div>
            {/* <Heart
              className="absolute top-0 right-0 w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-red-400 animate-pulse"
              style={{ animationDelay: "0.8s" }}
            /> */}
          </div>
        </div>

        {/* Animated border */}
        <div
          className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${testimonial.gradient} opacity-20 animate-pulse`}
          style={{ padding: "2px" }}
        >
          <div className="w-full h-full bg-white rounded-3xl"></div>
        </div>
      </div>
    </div>
  )
}