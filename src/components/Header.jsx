import { MagnifyingGlassIcon, UserIcon, ShoppingCartIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import totto from '../assets/Totto.svg'

const Header = () => {
  return (
    <header className="w-full text-sm font-sans">
      <div className="bg-gray-100 text-gray px-4 py-2 text-xs font-bold">
        <div className="max-w-full mx-auto flex justify-between">
          <div className="space-x-1">
            <span className="hover:underline cursor-pointer">Totto Travel</span>
            <span className="text-gray-400">|</span>
            <span className="hover:underline cursor-pointer">Totto Kids</span>
            <span className="text-gray-400">|</span>
            <span className="hover:underline cursor-pointer">Totto Pets</span>
          </div>
          <div className="space-x-1">
            <span className="hover:underline cursor-pointer">Escríbenos por WhatsApp</span>
            <span className="text-gray-400">|</span>
            <span className="hover:underline cursor-pointer">Servicio al Cliente</span>
          </div>
        </div>
      </div>
      <div className="bg-black text-white py-3 text-center text-sm tracking-wide font-medium">
        Envío gratis por compras superiores a $149.900. Aplican TYC
      </div>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 py-4 px-4">
          <div className="w-full md:flex-1 flex justify-start pr-2">
            <div className='flex items-center px-6 py-2 border-b border-black  w-full'>
              <span className="text-lg mr-5">
                <MagnifyingGlassIcon className='w-5 h-5 stroke-3'/>
              </span>
              <input
                type="text"
                placeholder="¿Qué estás buscando?"
                className="flex-1 outline-none placeholder-gray-500 placeholder:text-black placeholder:font-bold text-sm bg-transparent uppercase"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img src={totto} alt="Logo" className="h-12 w-auto" />
          </div>
          <div className="w-full md:w-1/4 flex justify-end items-center space-x-6 text-xl text-gray-800">
            <button title="Mi cuenta" className="hover:text-black">
              <UserIcon className="w-8 h-8" />
            </button>
            <button title="Carrito" className="hover:text-black">
              <ShoppingBagIcon className='w-8 h-8'/>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white border-t border-gray-200 border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-4 py-4 overflow-x-auto">
          <ul className="flex justify-center gap-10 text-black text-xs font-bold tracking-widest uppercase">
            {[
              'Descubre',
              'Morrales',
              'Mujer',
              'Hombre',
              'Niña',
              'Niño',
              'Viaje',
              'Mascotas',
              'Personajes',
              'Sale',
            ].map((item) => (
              <li key={item}>
                <span className="cursor-pointer hover:text-gray-600 transition">{item}</span>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );

}

export default Header; 
