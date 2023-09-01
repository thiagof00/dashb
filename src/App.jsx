import Carousel02 from './assets/carroussel02.jpg'
import Carousel01 from './assets/carroussel01.png'
import iconGP1 from './assets/cheap-2.svg'
import iconGP2 from './assets/shape.svg'
import iconGP3 from './assets/shape_velocity.svg'
import Logo from './assets/logo.png'
import { Carousel, CarouselItem } from './components/carousel';
import { Contracts } from './components/contracts'

function App() {
  
  return (
    <>
    <header>
      <div className="topHeader">
        <div className="buttonsFor">
        <button type="button" className="fy pulse-grow-on-hover">Para você</button>
        <button type="button" className="fc pulse-grow-on-hover">Para empresa</button>
        </div>
        
        <div className="buttons">
            <button className='velocityTest pulse-grow-on-hover'/>
            <button className='ticket pulse-grow-on-hover'/>
        </div>
      </div>

      <div className="bottomHeader">
      <img src={Logo} alt="" className="logo"/>

      <div className="nav">
        <ul>
          <li><a href="">Início</a></li>
          <li><a href="">Fibra Empresas</a></li>
          <li><a href="">Sobre a Bnet</a></li>
          <li><a href=""> Indique um amigo</a></li>
        </ul>
      </div>
      </div>
    </header>

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
      <img src="" alt="" />
      <p>De um play e assista os melhores canais de TV, conheço nossos planos</p>
    </div>
    <div id="plansPlay">

      {/*
      <div className="planPlay">
      <div></div>
      <div className="value">
      </div>
      <div className="options">
      <button>MAIS CANAIS</button>
      <button>QUERO ASSINAR</button>
      </div>
      </div>
      */}
      <div className="planPLay">
        <div className="titles">
          <h2>BnetPlay</h2>
          <h3 className="titlePlan"></h3>
        </div>
        <div className="channels">
          <h2></h2>
          <p></p>
        </div>
        <div className="content"></div>
      </div>
      <div className="planPLay">
        <div className="titles">
          <h2>BnetPlay</h2>
          <h3 className="titlePlan"></h3>
        </div>
        <div className="channels">
          <h2></h2>
          <p></p>
        </div>
        <div className="content"></div>
      </div>
      <div className="planPLay">
        <div className="titles">
          <h2>BnetPlay</h2>
          <h3 className="titlePlan"></h3>
        </div>
        <div className="channels">
          <h2></h2>
          <p></p>
        </div>
        <div className="content"></div>
      </div>
    </div>
    </main>
    <div id="box-goodpoints-02">
      <img src="" alt="" />
      <div className="box-points-02">
        <img src="" alt="" />
        <p>Wi-fi Grátis</p>
      </div>
      <div className="box-points-02">
        <img src="" alt="" />
        <p>Mais Estabilidade</p>
      </div>
      <div className="box-points-02">
        <img src="" alt="" />
        <p>Instalação Rápida</p>
      </div>
      <div className="box-points-02">
        <img src="" alt="" />
        <p>Suporte Premium</p>
      </div>
    </div>
    <footer>
    <div id="contact">
      <div className="logo">
        <a href="">
          <img src="" alt="" />
        </a>
      </div>
      <div className="contact-number">
        <h3>FALE COM A GENTE</h3>
        <div id="number"><h2>(55) 3411-6350</h2></div>
      </div>
    </div>

    <div id="infos">
      <div id="local">
        <span>Local de atendimento ao cliente:</span>
        <div id="cities">
          <div className="city"><span>Uruguaiana:</span> Rua Domingos José de Almeida, 2017 - Centro</div>
          <div className="city"><span>Rosário do Sul:</span> Rua Marechal Floriano Peixoto, 2431 - Centro</div>
          <div className="city"><span>Maçambara:</span> Rua Wilsom Píres Gavião, 601 - Centro</div>
        </div>
      </div>
      <div id="time">
        <span>Horários</span>
        <div id="times">
          <div className="opening-hours">Segunda a Sexta-Feira:<span> 9h às 12h e das 14h às 18h20</span></div>
          <div className="opening-hours">Sábado:<span> 9h às 13h e das 14h às 17h20</span></div>
        </div>
      </div>
      <div className="service-phones">
        <span>Telefones de atendimento ao Cliente:</span>
        <div id="phones">
          <div className="phone">Fixo: <span>(55) 3411-6350</span></div>
          <div className="phone">WhatsApp: <span>(55) 99929 6350</span></div>
        </div>
      </div>
      <div id="service-phones-time">
        <span>Horários</span>
        <div id="times">
          <div className="opening-hours">Segunda a Sexta-Feira: <span>7h às 23h59</span></div>
          <div className="opening-hours">Sábado: <span>8h às 23h59</span></div>
          <div className="opening-hours">Domingo: <span>10h às 23h59</span></div>
        </div>
      </div>
    </div>
    <div className="social-and-secondaries">
      <button>
      <img src="" alt="" />
      teste de velocidade
      </button>
      <button>
      <img src="" alt="" />
      segunda via do boleto
      </button>
      <div id="social-buttons">
      <button className='social'>ig</button>
      <button className='social'>fb</button>
      <button className='social'>wps</button>
      </div>
    </div>
    </footer>
    </>
  );
}

export default App;
