import Image from 'next/image'
import Logo from '../../../public/Logo.png'

export const Navbar = () => {
  return (
    <div className="border-b-2 border-sda-gray py-4 md:py-4">
      <div className="max-w-[1400px] w-full mx-auto flex justify-around md:justify-between">
        <Image
          src={Logo}
          alt="Just_dev logo of agency"
          className=" w-25 md:w-35"
        ></Image>
        <ul className="flex items-center justify-between gap-6 text-md md:text-lg">
          <li className="cursor-pointer">Welcome</li>
          <li className="cursor-pointer">O mnie</li>
          <li className="cursor-pointer">Usługi</li>
          <li className="cursor-pointer">Proces</li>
        </ul>
        <button className=" hidden md:block py-2 px-4 bg-sda-blue rounded-xl shadow-card cursor-pointer">
          Darmowa Wycena
        </button>
      </div>
    </div>
  )
}
