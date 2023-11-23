import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
    <div className='overlay'></div>
      <div className='body-content'>
      <div className='header-content'>
        <h1>Thanksgiving 2023</h1>
      </div>
        <div className='h2-container'>
        <h2>Cocktail Hour</h2>
        </div>
          <div className='menu-card'>
            <div className='menu-content'>
            <h4>Clarified New York Sour</h4>
            <p>Bourbon, Simple Syrup, Lemon, Millk Punch</p>
            </div>
            <div className='menu-content'>
            <h4>Kirkland Signature</h4>
            <p>Brut Champagne</p>
            </div>
          </div>
          <div className='h2-container'>
            <h2>Tasting Menu</h2>
          </div>
          <div className='menu-card'>
            <div className='menu-content'>
              <h4>Oyster & Tuna Amuse-Bouche</h4>
              <p>Oyster, Toro, Ponzu Sauce</p>
            </div>
            <div className='menu-content'>
              <h4>Spiced Butternut & Kabocha Squash Soup</h4>
              <p>Butternut, Kabocha, Spices, Goat Cheese</p>
            </div>
            <div className='menu-content'>
              <h4>Leek & Mushroom Tartlet</h4>
              <p>Green Medley</p>
            </div>
            <div className='menu-content'>
              <h4>Turkey Duo</h4>
              <p>Roulade: Fennel Chestnut Stuffing, Fondant Potatoes, Crispy Brussel Sprouts</p>
            </div>
            <div className='menu-content'>
              <h4>Lemon Sorbet</h4>
              <p>Raspberry Foam</p>
            </div>
            <div className='menu-content'>
              <h4>Sweet Bing Cherries</h4>
              <p>Kirsch Chantilly, Sicipan Pistachio Ice Cream</p>
            </div>
            <div className='footer'>Billy Rogers  © 2023</div>
          </div>
      </div>
    </>
  )
}

export default App
