
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faSquareFacebook, faInstagram, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import Image from 'next/image';
import ContentLinks from '../dados/contentLinks';

const Footer = () => {
    return (
        <footer className="bg-purple-700 py-2 md:py-8 block text-white p-4">
            <div className="container mx-auto px-4">
                <div className="flex items-center flex-col">
                    <Link href="">
                        <Image alt="Logo" width={225} height={104} src="/img/logo-deitada-white.png" />
                    </Link>
                    <div className="font-normal pb-4 md:text-lg flex justify-center gap-2">
                        <div className="hover:scale-105 transition duration-500">
                            <Link href={ContentLinks.facebook} className="text-white hover:text-purple-400 bg-black p-2 h-12 w-12 flex justify-center items-center rounded-lg" target="_blank">
                                <FontAwesomeIcon className="h-4 md:h-6" icon={faSquareFacebook} />
                            </Link>
                        </div>
                        <div className="hover:scale-105 transition duration-500">
                            <Link href={ContentLinks.instagram} className="text-white hover:text-purple-400 bg-black p-2 h-12 w-12 flex justify-center items-center rounded-lg" target="_blank">
                                <FontAwesomeIcon className="h-4 md:h-6" icon={faInstagram} />
                            </Link>
                        </div>
                    </div>
                    <div className="block">
                        <p className="font-light text-sm">
                            Todos os direitos reservados
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
