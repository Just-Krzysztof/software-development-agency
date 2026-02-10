import Image from 'next/image'
import Hero from '../../public/Hero.jpg'
import EmblaCarousel from '@/components/carousel/Carousel'

const technologySlides = [
  { src: '/technology/react.png', alt: 'React' },
  { src: '/technology/next.png', alt: 'Next.js' },
  { src: '/technology/react.png', alt: 'React' },
  { src: '/technology/next.png', alt: 'Next.js' },
  { src: '/technology/react.png', alt: 'React' },
  { src: '/technology/next.png', alt: 'Next.js' },
  { src: '/technology/react.png', alt: 'React' },
  { src: '/technology/next.png', alt: 'Next.js' },
]

export default function Home() {
  return (
    <main>
      <section className="relative h-[calc(100vh-70px)] flex justify-end">
        <div className=" w-full md:w-4/5 ">
          <Image src={Hero} alt="Hero image" className="w-full fade-edges" />
        </div>
        <div className="absolute top-[50%] left-10 w-4/5 lg:w-[50%] ">
          <h1 className="text-2xl md:text-5xl font-bold text-heading  leading-7 md:leading-14 text-wrap">
            Tworzę skalowalne aplikacje webowe i mobilne, które rozwijają biznes
          </h1>
          <p className="my-4 text-md md:text-xl">
            Full-Stack Developer & Architekt. Zamieniam Twoje pomysły w
            działające produkty, używając najnowszych technologii: React,
            Next.js, Node.js.
          </p>
          <button className="py-2 px-4 border-2 text-sda-blue border-sda-blue rounded-xl font-bold shadow-card cursor-pointer">
            Porozmawiajmy o projekcie
          </button>
        </div>
      </section>

      <section className="py-16 px-4">
        <EmblaCarousel
          slides={technologySlides}
          options={{ loop: true, align: 'start' }}
        />
      </section>
    </main>
  )
}
