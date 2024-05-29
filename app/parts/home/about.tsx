import Image from "next/image";
import Link from "next/link";
import ContentLinks from "../dados/contentLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const About = () => {
    return (
        <>
            <section className="z-10 relative">
                <div className="z-20 relative container mx-auto px-4">
                    <div className="block lg:flex items-end">
                        <div className="lg:w-2/6 lg:flex justify-content items-end px-4 hidden">
                            <Image src="/img/about.png" width={720} height={405} alt="Estúdio Grape" className="w-full mx-auto" />
                        </div>
                        <div className="lg:w-4/6 px-4">
                            <div className="text-base text-justify lg:text-right md:text-lg text-zinc-700 my-10 md:my-16">
                                <h2 className="text-center lg:text-right text-2xl lg:text-3xl xl:text-4xl py-4 text-purple-700 font-playfair font-semibold">Caminhada Juntas pela Igualdade</h2>
                                <p className="py-2 font-light">A <span className="font-bold">Caminhada pela Igualdade das Mulheres</span> é um <span className="font-bold">evento anual</span> que transcende sua natureza de reunião, emergindo como um <span className="font-bold">símbolo poderoso de esperança e determinação</span>. <span className="font-bold">Mulheres de diversas origens se unem</span>, seus passos ecoando uma sinfonia de mudança pelas ruas adornadas com <span className="font-bold">coragem feminina, almejando um futuro onde a igualdade seja tangível</span>.</p>

                                <Image src="/img/about.png" width={720} height={405} alt="Estúdio Grape" className="w-1/2 float-right block pl-3 lg:hidden" />

                                <p className="py-2 font-light">Além de ser uma marcha, o evento se destaca como um <span className="font-bold">espetáculo multifacetado</span>, abrangendo <span className="font-bold">discursos de ativistas, performances artísticas e atividades educativas</span>. Ativistas incitam à ação enquanto stands informativos oferecem <span className="font-bold">conhecimento e empoderamento</span>, tudo em prol da causa da <span className="font-bold">igualdade de gênero</span>.</p>

                                <p className="py-2 font-light">Esta jornada não é apenas uma <span className="font-bold">caminhada física</span>, mas uma busca coletiva por <span className="font-bold">equidade e justiça</span>. Homens e mulheres se unem como <span className="font-bold">guardiões dessa causa, desafiando fronteiras e plantando as sementes do progresso</span> em direção a um horizonte onde a <span className="font-bold">igualdade é uma realidade para todos</span>.</p>
                                <div className="flex justify-center md:justify-start lg:justify-end mt-4">
                                    <button type="submit" className="py-2 px-6 text-base rounded-full bg-beige-500 hover:bg-purple-600 transition ease-in-out duration-300 delay-300 text-purple-700 uppercase flex justify-center items-center gap-x-2"><FontAwesomeIcon icon={faArrowRight} />Quero Participar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default About;