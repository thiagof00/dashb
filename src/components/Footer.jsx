import react from 'react'

export function Footer(){
    return(
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
    )
}