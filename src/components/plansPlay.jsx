import react from 'react'

import startHD from '../assets/startHD/startHD.svg'
import channelsStart from '../assets/startHD/channels.svg'

import topHD from '../assets/topHD/topHD.svg'
import channelsTop from '../assets/topHD/channels.svg' 

import premiumHD from '../assets/premiumHD/premiumHD.svg'
import channelsPremium from '../assets/premiumHD/channels.svg' 
import '../style/plansPlay.css'
export function PlansPlay(){
    return(
<div id="plansPlay">

    <div className="planPlay">

        <div className='order'>
            <div className="playContent">
                <img src={startHD} alt="" />
                <img src={channelsStart} alt="" />
            </div>
            <div className="valourPlay" style={{paddingLeft:'2rem'}}>
                    <div className='valourCurrent'><h2>R$</h2></div>
                    <div className='price'><h2>69</h2></div>
                    <div className="valourCent"><h2>,90</h2></div>
            </div>
        </div>
        <div className="morebuttons">
            <button>MAIS CANAIS</button>
            <button>QUERO ASSINAR</button>
        </div>
    </div>

        <div className="planPlay">

        <div className='order'>
            <div className="playContent">
                <img src={topHD} alt="" />
                <img src={channelsTop} alt="" />
            </div>
            <div className="valourPlay">
                    <div className='valourCurrent'><h2>R$</h2></div>
                    <div className='price'><h2>109</h2></div>
                    <div className="valourCent"><h2>,90</h2></div>
            </div>
        </div>
        <div className="morebuttons">
            <button>MAIS CANAIS</button>
            <button>QUERO ASSINAR</button>
        </div>
    </div>

    <div className="planPlay">

        <div className='order'>
            <div className="playContent">
                <img src={premiumHD} alt="" />
                <img src={channelsPremium} alt="" />
            </div>
            <div className="valourPlay">
                    <div className='valourCurrent'><h2>R$</h2></div>
                    <div className='price'><h2>129</h2></div>
                    <div className="valourCent"><h2>,90</h2></div>
            </div>
        </div>
        <div className="morebuttons">
            <button>MAIS CANAIS</button>
            <button>QUERO ASSINAR</button>
        </div>
    </div>
      
</div>
    )
}