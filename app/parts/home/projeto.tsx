import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Projeto = () => {
    return (
        <section className="py-20 bg-cover bg-center bg-purple-700">
            <div className="container mx-auto px-4">

                <div className="block lg:flex">
                    <div className="lg:w-3/6 px-4">
                        <div className="text-base text-justify md:text-left md:text-lg text-zinc-200 my-10 md:my-16">
                            <h2 className="text-left text-xl md:text-4xl py-4 text-beige-500 font-playfair font-semibold">O que é o projeto?</h2>
                            <p className="py-2 font-light">O empreendorismo feminino é o maior aliado ao combate a violência contra a mulher. Quando investimentos em mulheres melhoramos a economia do estado em 20%</p>

                            <p className="py-2 font-light">E o nosso sonho é termos mulheres com famílias prosperas, com dignidade e liberdade de escolha. Nosso projeto já impactou mais de 1000 mulheres na capital do Rio de Janeiro.</p>

                            <p className="py-2 font-light">O nosso objetivo é levarmos essa missão para todo estado do Rio.</p>

                            <h2 className="text-left text-xl md:text-4xl py-4 text-beige-500 font-playfair font-semibold">Nosso Ecossistema</h2>
                            <div className="my-2 flex flex-wrap gap-3">
                                <div>
                                    <span className="inline-block my-1 mx-1 py-2 px-2 md:px-4 rounded-md text-xs md:text-lg text-zinc-200 border border-beige-500">Inovação</span>
                                </div>
                                <div>
                                    <span className="inline-block my-1 mx-1 py-2 px-2 md:px-4 rounded-md text-xs md:text-lg text-zinc-200 border border-beige-500">Tecnologia</span>
                                </div>
                                <div>
                                    <span className="inline-block my-1 mx-1 py-2 px-2 md:px-4 rounded-md text-xs md:text-lg text-zinc-200 border border-beige-500">Direito da Mulher</span>
                                </div>
                                <div>
                                    <span className="inline-block my-1 mx-1 py-2 px-2 md:px-4 rounded-md text-xs md:text-lg text-zinc-200 border border-beige-500">Acesso ao Crédito</span>
                                </div>
                                <div>
                                    <span className="inline-block my-1 mx-1 py-2 px-2 md:px-4 rounded-md text-xs md:text-lg text-zinc-200 border border-beige-500">Equilíbrio</span>
                                </div>
                            </div>
                            <div className="flex justify-start mt-4">
                                <button type="submit" className="py-2 px-6 text-base rounded-full bg-beige-500 hover:bg-purple-600 transition ease-in-out duration-300 delay-300 text-purple-700 uppercase flex justify-center items-center gap-x-2"><FontAwesomeIcon icon={faArrowRight} />Quero Participar</button>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-3/6 flex justify-content items-end px-4">
                        <Image src="/img/onu.png" width={720} height={405} alt="Estúdio Grape" className="w-full mx-auto rounded-3xl" />
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Projeto;