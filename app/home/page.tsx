import AboutUs from '@/components/aboutus'
import Footer from '@/components/Footer'
import MemoriesGallery from '@/components/GalleryComponent'
import Hero from '@/components/heroSection'
import Navbar from '@/components/Navbar'
import Partnerships from '@/components/slider'
import MeetOurTeam from '@/components/Team'
import WhatWeDo from '@/components/WhatWeDo'
import React from 'react'

const page = () => {
  return (
   <>
   <Navbar></Navbar>
   <Hero></Hero>
<AboutUs></AboutUs>
   <WhatWeDo></WhatWeDo>
<MemoriesGallery></MemoriesGallery>
   <Partnerships></Partnerships>
   

 <Footer></Footer>
   </>
  )
}

export default page
