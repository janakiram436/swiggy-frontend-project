import React from 'react'
import TopBar from '../swiggyComponents/TopBar'
import ItemsDisplay from '../swiggyComponents/ItemsDisplay'
import Chains from '../swiggyComponents/Chains'
import FirmCollections from '../swiggyComponents/FirmCollections'

const LandingPage = () => {
  return (
    <div>
        <TopBar />
        <div className="landingSectionPage">
        <ItemsDisplay />
        <Chains />
        <FirmCollections />
        </div>
    </div>
  )
}

export default LandingPage