import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Diferencial = () => {
    return (
        <section className="py-20 bg-cover bg-center">
            <div className="container mx-auto px-4">

                <div className="block lg:flex">
                    <div className="lg:w-3/6 px-4">
                        <div className="text-base text-justify md:text-left md:text-lg">
                            <h2 className="text-left text-xl md:text-4xl py-4 font-playfair font-semibold text-purple-700">Nosso Diferencial</h2>
                            <p className="py-2 font-light">Na cidade do <span className="font-bold"> Rio de Janeiro</span> existe uma vasta quantidade e opções de <span className="font-bold">projetos sociais e redes de apoio</span> com foco em diversas áreas;</p>

                            <p className="py-2 font-light">Mas só o <span className="font-bold">Projeto Mulheres de Frente</span> considera exclusivamente as necessidades Delas e tem foco nas particularidades de cada situação, <span className="font-bold">Mulheres em situação de vulnerabilidade socioeconômica, vítimas de violência, mães solo, jovens em busca de oportunidades educacionais e profissionais e Mulheres empreendedoras em geral</span>, são potenciais alvos e objetivos deste Projeto.</p>
                            <h2 className="text-left text-xl md:text-4xl py-4 font-playfair font-semibold text-purple-700">Nosso Objetivos</h2>
                            <p className="py-2 font-light">Nosso objetivo é proporcionar <span className="font-bold">apoio, educação, capacitação e recursos financeiros para melhorar as condições de vida destas mulheres</span> e promover a <span className="font-bold">igualdade de oportunidades </span>.</p>

                            <h2 className="text-left text-xl md:text-4xl py-4 font-playfair font-semibold text-purple-700">Propósito do Projeto</h2>
                            <p className="py-2 font-light">Empreendedorismo feminino é uma estratégia eficaz para combater a violência contra as mulheres, pois promove o <span className="font-bold">empoderamento econômico, a criação de oportunidades, a redução da dependência, o engajamento comunitário e a inovação</span>. Ao <span className="font-bold">capacitar as mulheres e criar um ambiente mais equitativo</span>, o empreendedorismo feminino desempenha um papel vital na <span className="font-bold">criação de uma sociedade livre de violência de gênero e mais igualitária</span>.</p>
                        </div>
                    </div>

                    <div className="lg:w-3/6 px-4">
                        <Image src="/img/onu.png" width={720} height={405} alt="Estúdio Grape" className="w-full rounded-3xl" />
                    </div>
                </div>

                <div className="flex justify-center mt-4">
                    <button type="submit" className="py-2 px-6 text-base rounded-full bg-purple-700 hover:bg-purple-600 transition ease-in-out duration-300 delay-300 text-beige-500 uppercase flex justify-center items-center gap-x-2"><FontAwesomeIcon icon={faArrowRight} />Quero Participar</button>
                </div>
            </div>
        </section>
    );
}
export default Diferencial;