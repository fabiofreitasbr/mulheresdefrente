import About from "./parts/home/about";
import Contato from "./parts/home/contato";
import Footer from "./parts/estrutura/footer";
import Banner from "./parts/home/banner";
import Header from "./parts/estrutura/header";
import Projeto from "./parts/home/projeto";
import Missao from "./parts/home/missao";
import Diferencial from "./parts/home/diferencial";
import Vantagens from "./parts/home/vantagens";

export default function Home() {
    return (
        <main>
            <Header />
            <Banner />
            <About />
            <Projeto />
            <Missao />
            <Diferencial />
            <Vantagens />
            <Contato />
            <Footer />
        </main>
    );
}
