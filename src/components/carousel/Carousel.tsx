'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { EmblaOptionsType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'

type TechnologySlide = {
  src: string
  alt: string
}

type PropType = {
  slides: TechnologySlide[]
  options?: EmblaOptionsType
}

const EmblaCarousel = (props: PropType) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ])

  useEffect(() => {
    if (!emblaApi) return
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    autoplay.play()
  }, [emblaApi])

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__img">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
