import AboutUs from '@/components/AboutUs';
import React from 'react'

export default function About() {
  return (
    <div>
      <AboutUs/>
    </div>
  )
}

export function generateMetadata(){
  return{
    title:"About",
    description:"Letzkhelo fosters an inclusive community for athletes of all levels, where you can connect, compete, and grow, whether you’re a pro or a beginner.",
    keywords:" About, About Us, Our Mission, Sports Community, Athletic Enthusiasts, Inclusive, Athlete Support, Sports Platform, Connecting Athletes.",
    robots:"index, follow",
    language:"EN",

  }
}

 