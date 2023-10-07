import { Carousel, CarouselItem } from './components/carousel';
import { Contracts } from './components/contracts'
import { PlansPlay } from './components/plansPlay'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

import Carousel02 from './assets/carroussel02.jpg'
import Carousel01 from './assets/carroussel01.png'
import iconGP1 from './assets/cheap-2.svg'
import iconGP2 from './assets/shape.svg'
import iconGP3 from './assets/shape_velocity.svg'
import Play from './assets/play.svg'

import FiberImg from './assets/goodPoints/barrinha.svg'
import wifi from './assets/goodPoints/wifi.svg'
import fastIns from './assets/goodPoints/fastIns.svg'
import support from './assets/goodPoints/support.svg'
import estable from './assets/goodPoints/estable.svg'




// principal
function App() {
  
  return (
    <>
    <Header/>
    <main>
      {/*carrossel de fotos da pagina*/}
    <Carousel>
      <CarouselItem><img src={Carousel01} alt="" /></CarouselItem>
      <CarouselItem><img src={Carousel02} alt="" /></CarouselItem>
      <CarouselItem>dasd</CarouselItem>
    </Carousel>

    <h1>PLANOS DE INTERNET FIBRA</h1>
    <p>Internet fibra com ultra velocidade que você precisa.</p>

    <div id="goodpoints">
      <div className="point">
        <img src={iconGP1} alt="" />
        <span>Preço fixo</span>
        <div className="description">
        <p>Sua fatura igual todos os meses, sem aquela surpresa no final do mês.</p>
        </div>
        
      </div>
      <div className="point">
        <img src={iconGP2} alt="" />
        <span>Instalação rápida</span>
        <div className="description">
        <p>No máximo em 24 horas, aqui você não fica esperando.</p>
        </div>
      </div>
      <div className="point">
        <img src={iconGP3} alt="" />
        <span>Velocidade e garantia</span>
        <div className="description">
        <p>Garantimos a entrega da velocidade contratada.</p>
        </div>
      </div>
    </div>

    {/* carrossel de planos de internet*/}

    <Contracts/>

    <div id="play">
      <div>
      <img src={Play} alt="" />
      <h1>De um play e assista os melhores canais de TV!</h1>
      </div>
    </div>

    <PlansPlay/>
    </main>

    <div id="box-goodpoints-02">
      <div className="fiberImg">
        <img src={FiberImg} alt="100% Fibra Ótica" />
        <div>
        <span>
Transforme sua experiência de navegação com a 
<br />
nossa tecnologia de ponta, proporcionando ultra 
<br />
velocidade e estabilidade em todos os momentos
        </span>
        </div>
      </div>
      
      <div className="box-points-02">
        <img src={wifi} alt="" />
        <p>Wi-fi Grátis</p>
      </div>
      <div className="box-points-02">
        <img src={estable} alt="" />
        <p>Mais Estabilidade</p>
      </div>
      <div className="box-points-02">
        <img src={fastIns} alt="" />
        <p>Instalação Rápida</p>
      </div>
      <div className="box-points-02">
        <img src={support} alt="" />
        <p>Suporte Premium</p>
      </div>
    </div>

      <Footer/>
    </>
  );
}

export default App;
