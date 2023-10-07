import react from 'react'
import Logo from '../assets/logo.png'
export function Header(){

    return (
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
    )
}