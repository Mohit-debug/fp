import React from 'react'
import Navbar from '../Navbar.js';
import Footer from '../Footer.js';
import Header from './Header.js';
import OurVision from './OurVision.js';
import Transformer from './Transformer.js';
import BuyerSellerServices from './BuyerSellerServices.js';
import OurTeam from '../ourteam/OurTeamPage.js';
function Home() {
  return (
    <>
    <Navbar />
    <Header />
    <OurVision />
    <Transformer />
    <BuyerSellerServices />
    {/* Add ID for scrolling */}
    <div id="our-team-section">
        <OurTeam />
      </div>
    <Footer />
    </>
  )
}

export default Home
