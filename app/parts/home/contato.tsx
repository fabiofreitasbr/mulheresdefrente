import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import ContentLinks from "../dados/contentLinks";
import FormContato from "../estrutura/formContato";
import Image from "next/image";

const Contato = () => {
    return (
        <>
            <section id="contato" className="min-h-[35rem] py-4 md:py-20 bg-beige-500">
                <div className="container mx-auto px-6">
                    <div className="flex gap-x-4">
                        <div className="w-7/12 text-sm md:text-xl text-black rounded-xl">
                            <div className="relative text-md md:text-lg py-6 md:p-6 my-3 md:mt-0 h-full flex flex-col justify-center items-start">
                                <div className="text-lg md:text-xl pb-8">
                                    <h3 className="font-medium text-purple-700 font-playfair text-5xl">Quem é <span className="font-bold">Daiane Luna</span>?</h3>
                                </div>
                                <div className="bg-purple-700 px-8 pt-8 rounded-3xl text-white text-xl pb-8 pr-64 mr-20">
                                    <p className="font-light">Daiane Luna é uma líder visionária que promove o empoderamento econômico feminino para combater a violência, proporcionando educação, capacitação e recursos financeiros para mulheres vulneráveis no Rio de Janeiro.</p>
                                </div>
                                <Image src="/img/onu-transparente.png" className="absolute -right-10 -bottom-20" width={383} height={629} alt="" />
                            </div>
                        </div>
                        <div className="w-5/12 text-sm md:text-xl rounded-xl text-black">
                            <div className="text-md md:text-lg p-4 md:p-6 my-3 md:mt-0">
                                <div className="">
                                    <h3 className=" text-2xl md:text-4xl pb-6 text-center text-purple-700 font-playfair font-bold">Faça parte do projeto!</h3>
                                    <h4 className=" text-xl md:text-2xl pb-6 text-center font-light text-purple-700">Participe do nosso evento preenchendo os dados abaixo.</h4>
                                    <FormContato color="purple" />
                                </div>
                                <div className="flex justify-center items-center my-3">
                                    <hr className="border border-gray-100 w-full" />
                                    <div className="p-4 font-medium">ou</div>
                                    <hr className="border border-gray-100 w-full" />
                                </div>
                                <div className="w-max-md gap-4">
                                    <Link className="block" href={ContentLinks.whatsapp}><button type="button" className="w-full bg-purple-600 hover:bg-purple-700 text-white transition font-medium rounded-full py-3 px-2 block text-base "><FontAwesomeIcon icon={faWhatsapp} className="px-1" /> Envie-nos uma mensagem!</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Contato; 