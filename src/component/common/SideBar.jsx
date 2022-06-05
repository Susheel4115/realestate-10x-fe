import React from 'react'
import './sidebar.css'
import Property from '../../images/imgs/house.png'
import bell from '../../images/imgs/bell.png'
import received from '../../images/imgs/received.png'
import sentIntrest from '../../images/imgs/sentInterest.png'
import eye from '../../images/imgs/eye.png'
import tariff from '../../images/imgs/tariff.png'
const SideBar = () => {
  return (
    <aside className='sidebar-container'>
      <div className='sidebar-head'>
        <p className='logo'>Logo</p>
        </div>
      <div className='sidedata'>
      <div className='imges'>
          
      
          <img className='property imgs' src={Property} alt='proper'/>
          <img className='bell imgs' src={bell} alt='property' />
          <img className='received imgs' src={received} alt='property' />
          <img className='sent imgs' src={sentIntrest} alt='property' />
          <img className='views imgs' src={eye} alt='property' /> 
          <img className='tariff imgs' src={tariff} alt='property' />
          </div>
          <ol className="sidbar-text-container">
          <li className="sidebar-text">Property</li>
         <li className="sidebar-text">Assistance</li>
         <li className="sidebar-text">Received Interest</li>
          <li className="sidebar-text">sent Interest</li>
          <li className='sidebar-text'>Property Views</li>
         <li className="sidebar-text">Tariff Plan</li>
    
          </ol>
      </div>
      
      
    </aside>
  )
}

export default SideBar