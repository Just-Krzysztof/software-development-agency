import Image from 'next/image'
import Logo from '../../../public/Logo.png'

export const Navbar = () => {
  return (
    <div className="border-b-2 border-sda-gray py-2 md:py-4">
      <div className="max-w-[1400px] w-full mx-auto  flex justify-between">
        <Image
          src={Logo}
          alt="Just_dev logo of agency"
          className="w-25 md:w-35"
        ></Image>
        <ul className="flex items-center justify-between gap-4 text-md md:text-lg">
          <li className="cursor-pointer">Welcome</li>
          <li className="cursor-pointer">O mnie</li>
          <li className="cursor-pointer">Usługi</li>
          <li className="cursor-pointer">Projekty</li>
        </ul>
        <button className="py-2 px-4 bg-sda-blue rounded-xl shadow-card cursor-pointer">
          Wycena
        </button>
      </div>
    </div>
  )
}
