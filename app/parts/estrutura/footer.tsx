
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faSquareFacebook, faInstagram, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import Image from 'next/image';
import ContentLinks from '../dados/contentLinks';

const Footer = () => {
    return (
        <footer className="bg-purple-700 py-2 md:py-12 block text-white p-4">
            <div className="container mx-auto px-4">
                <div className="flex items-center flex-col">
                    <h3 className="text-center text-xl md:text-3xl mb-4 font-playfair font-bold text-beige-500">Siga-nos no instagram</h3>
                    <Link href={ContentLinks.whatsapp}>
                        <button type="button" className="w-full border border-zinc-200 text-white transition font-medium rounded-full my-2 py-3 px-8 flex justify-center items-center text-base gap-3">
                            <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" /> 
                            <div> @projetomulheresdefrente</div>
                            
                        </button>
                    </Link>
                </div>
            </div>
        </footer>
    );
}
export default Footer;