import visa from "../assets/visa.png";
import mastercard from "../assets/mastercard.png";
import pse from "../assets/pse.png";
import efecty from "../assets/efecty.png";
import addi from "../assets/addione.png";
import americanExpress from "../assets/americanexpress.png";
import dinersclub from "../assets/dinersclub.png"
import colombia from "../assets/colombiaIcon.png";
import { CameraIcon, ChevronDownIcon, PlayIcon } from "@heroicons/react/24/outline";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="bg-black text-white text-center px-4 py-3">
        <p className="text-lg font-semibold">
          Regístrate y recibe un 10% de descuento en tu próxima compra.
        </p>
        <p className="text-lg font-semibold mb-4">
          Además celebramos contigo, en el mes de tu cumpleaños disfruta del 25% de descuento.
        </p>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-20">
          Suscríbete
        </button>
        <p className="text-xs mt-4">
          *Los descuentos de registro y de cumpleaños no son acumulables.
        </p>
         <p className="text-xs">
          Aplican términos y condiciones.
        </p>
      </div>
      <div className="max-w-7xl mx-auto bg-white text-black border-t border-gray-200 px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-sm">
        <div>
          <p className="font-bold mb-2">SERVICIO AL CLIENTE</p>
          <ul className="space-y-1 font-semibold">
            <li>Envíos y entregas</li>
            <li>Servicio al cliente</li>
            <li>Cambios y devoluciones</li>
            <li>Encuentra tu tienda</li>
            <li>Escríbenos por WhatsApp</li>
            <li>Keypago</li>
            <li>Aviso de privacidad</li>
            <li>Promociones vigentes</li>
          </ul>
        </div>
        <div>
          <p className="font-bold mb-2">SÉ PARTE DE TOTTO</p>
          <ul className="space-y-1 font-semibold">
            <li>Colaboradores</li>
            <li>Negocios empresariales</li>
            <li>Totto Crea</li>
          </ul>
        </div>
        <div>
          <p className="font-bold mb-2">NOSOTROS</p>
          <ul className="space-y-1 font-semibold">
            <li>Quiénes somos</li>
            <li>Línea ética</li>
            <li>Sostenibilidad</li>
            <li>Prensa</li>
          </ul>
        </div>
        <div>
          <p className="font-bold mb-2">CATEGORÍAS</p>
          <ul className="space-y-1 font-semibold">
            <li>Morrales</li>
            <li>Mujer</li>
            <li>Hombre</li>
            <li>Niño</li>
            <li>Niña</li>
            <li>Mascotas</li>
            <li>Personajes</li>
            <li>Unisex</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 font-bold px-3 w-fit cursor-pointer">
            <span>Colombia</span>
              <img src={colombia} alt="ColombiaIcon" className="h-5 w-auto" />
            <span className="ml-auto">
              <ChevronDownIcon className="w-5 h-5 stroke-2" />
            </span>
          </div>
        </div>
        <div>
          <p className="font-bold mb-2">MEDIOS DE PAGO</p>
          <div className="grid grid-cols-4 gap-1 mt-2">
            <img src={pse} alt="PSE" width={35} height={15} />
            <img src={mastercard} alt="MasterCard" width={40} height={20} />
            <img src={visa} alt="Visa" width={40} height={20} />
            <img src={americanExpress} alt="American Express" width={40} height={20} />
            <img src={dinersclub} alt="Dinners club" width={40} height={20} />
            <img src={efecty} alt="Efecty" width={40} height={20} />
            <img src={addi} alt="Addi" width={40} height={20} />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-[1fr_1fr_1.5fr_1fr_0.5fr] gap-6 text-center md:text-left text-sm items-center border-t border-gray-200">
        <div className="flex justify-center gap-3 md:justify-start">
          <div className="w-8 h-8 rounded-full bg-black text-base text-white font-semibold flex items-center justify-center">f</div>
          <div className="w-8 h-8 rounded-full bg-black text-white font-semibold flex items-center justify-center">
            <PlayIcon className="w-5 h-5 stroke-2" />
          </div>
          <div className="w-8 h-8 rounded-full bg-black text-white font-semibold flex items-center justify-center">
            <CameraIcon className="w-5 h-5 stroke-2" />
          </div>
          <div className="w-8 h-8 rounded-full bg-black text-base text-white font-semibold flex items-center justify-center">T</div>
        </div>

        <p className="hover:underline font-semibold">PROMOCIONES VIGENTES</p>
        <p className="hover:underline font-semibold">POLÍTICA DE TRATAMIENTO DE DATOS</p>
        <p className="hover:underline font-semibold">TÉRMINOS Y CONDICIONES</p>
        <p className="text-xs font-semibold">© 2025 Totto</p>
      </div>

    </footer>
  );
};

export default Footer;

