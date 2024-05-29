import { faCheckSquare, faCreditCard, faIndustry } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import ContentLinks from "../dados/contentLinks";
import FormContato from "../estrutura/formContato";

export default function Banner() {
    return (
        <>
            <div id="banner" className="bg-cover bg-banner bg-center min-h-[20rem] md:h-[36rem] lg:h-[38rem] 2xl:h-[52rem]">
                <div className="container mx-auto px-10 md:px-4 h-full">
                    <div className="md:flex items-center justify-center h-full">
                        <div className="w-full md:w-1/2 h-full flex flex-col justify-center ">
                            <div className=" container mx-auto max-w-lg">

                                <Image className="w-1/3 mx-auto" width={624} height={535} alt="Logo - Mulheres de Frente - Juntas Pela Igualdade" src="/img/logo.png" />
                                <h3 className="text-white sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-left md:text-center my-6 font-poppins font-medium">VENHA PARTICIPAR DESSE MOMENTO <br />IMPORTANTE E TRAGA SUA FAMÍLIA!</h3>
                                <FormContato color="white" />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 bg-feature bg-contain bg-bottom bg-no-repeat h-full">
                            <Image src="/img/img-banner.png" width={752} height={652} className="w-3/4 invisible" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}