import Image from "next/image";
import Link from "next/link";
import ContentLinks from "../dados/contentLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
    return (
        <>
            <header className="absolute w-full">
                <div className="container mx-auto px-4 text-white h-full">
                    <div className="flex justify-end items-center h-full">
                        <div>
                            <Link href={ContentLinks.whatsapp}>
                                <button type="button" className="bg-purple-600 hover:bg-purple-700 transition text-beige-500 border-2 border-beige-500 font-medium rounded-full my-4 py-2 px-4 text-base mx-auto uppercase flex justify-center items-center gap-1">
                                    <FontAwesomeIcon icon={faWhatsapp} className="h-6 w-6" /> 
                                    <div> (21) 96701-3300</div>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}