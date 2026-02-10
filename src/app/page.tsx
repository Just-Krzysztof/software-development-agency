import Image from 'next/image'
import Hero from '../../public/Hero.jpg'
export default function Home() {
  return (
    <main>
      <section className="">
        <div className="relative h-full flex justify-end">
          <div className=" w-full md:w-4/5 ">
            <Image src={Hero} alt="Hero image" className="w-full fade-edges" />
          </div>
          <div className="absolute top-[50%] left-10 w-4/5 lg:w-[50%] ">
            <h1 className="text-2xl md:text-5xl font-bold text-heading  leading-7 md:leading-14 text-wrap">
              Tworzę skalowalne aplikacje webowe i mobilne, które rozwijają
              biznes
            </h1>
            <p className="my-4 text-lg md:text-xl">
              Full-Stack Developer & Architekt. Zamieniam Twoje pomysły w
              działające produkty, używając najnowszych technologii: React,
              Next.js, Node.js.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
