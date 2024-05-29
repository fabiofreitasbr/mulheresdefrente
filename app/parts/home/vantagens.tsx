
const Vantagens = () => {
    return (
        <section className="bg-purple-700">
            <div className="bg-gradient-to-r from-purple-700 to-purple-500 h-4"></div>
            <div className="container mx-auto px-4 py-16">
                <h2 className="text-xl md:text-4xl py-6 text-center text-beige-500 font-playfair">VANTAGENS</h2>
                <hr className="w-20 border-beige-500 mx-auto mb-6" />
                <div className="mt-3 mb-8 md:flex justify-center flex-wrap">
                    <div className="md:w-1/2 lg:w-1/3 p-2">
                        <div className="w-full h-full p-2 md:p-3 rounded-md text-center text-xs md:text-lg lg:text-xl bg-gradient-to-r from-purple-700 to-purple-500 text-beige-500 border-purple-500 font-playfair uppercase font-bold border">Empoderamento Econômico</div>
                    </div>
                    <div className="md:w-1/2 lg:w-1/3 p-2">
                        <div className="w-full h-full p-2 md:p-3 rounded-md text-center text-xs md:text-lg lg:text-xl bg-gradient-to-r from-purple-700 to-purple-500 text-beige-500 border-purple-500 font-playfair uppercase font-bold border">Oportunidades</div>
                    </div>
                    <div className="md:w-1/2 lg:w-1/3 p-2">
                        <div className="w-full h-full p-2 md:p-3 rounded-md text-center text-xs md:text-lg lg:text-xl bg-gradient-to-r from-purple-700 to-purple-500 text-beige-500 border-purple-500 font-playfair uppercase font-bold border">Redução da Dependência</div>
                    </div>
                    <div className="md:w-1/2 lg:w-1/3 p-2">
                        <div className="w-full h-full p-2 md:p-3 rounded-md text-center text-xs md:text-lg lg:text-xl bg-gradient-to-r from-purple-700 to-purple-500 text-beige-500 border-purple-500 font-playfair uppercase font-bold border">Engajamento Comunitário</div>
                    </div>
                    <div className="md:w-1/2 lg:w-1/3 p-2">
                        <div className="w-full h-full p-2 md:p-3 rounded-md text-center text-xs md:text-lg lg:text-xl bg-gradient-to-r from-purple-700 to-purple-500 text-beige-500 border-purple-500 font-playfair uppercase font-bold border">Inovação e Soluções</div>
                    </div>
                </div>
                
                
                <h2 className="text-xl md:text-4xl py-6 text-center text-beige-500 font-playfair">ESTATÍSTICAS</h2>
                <hr className="w-20 border-beige-500 mx-auto mb-6" />
                <div className="my-2 md:flex justify-center flex-wrap">
                    <div className="md:w-1/2 p-2">
                        <div className="w-full h-full p-2 md:p-3 rounded-md bg-gradient-to-r from-purple-700 to-purple-500 border border-purple-500 uppercase font-bold flex items-center gap-3">
                            <div className="text-beige-500 font-playfair text-6xl w-52 text-center">51,5%</div>
                            <div className="text-zinc-200 text-xs md:text-lg lg:text-3xl text-left">Da população é Feminina</div>
                        </div>
                    </div>
                    <div className="md:w-1/2 p-2">
                        <div className="w-full h-full p-2 md:p-3 rounded-md bg-gradient-to-r from-purple-700 to-purple-500 border border-purple-500 uppercase font-bold flex items-center gap-3">
                            <div className="text-beige-500 font-playfair text-6xl w-52 text-center">38%</div>
                            <div className="text-zinc-200 text-xs md:text-lg lg:text-3xl text-left">Dos Líderes Brasileiros são Mulheres</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-purple-700 h-4"></div>
        </section>
    );
}
export default Vantagens;