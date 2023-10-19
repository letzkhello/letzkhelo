import ProfileComponent from '@/components/Profile'
import React from 'react'

const Profile = () => {
  return (
    <div><ProfileComponent/></div>
  )
}

export default Profile


export function generateMetadata(){
  return{
    title:"Profile",
    description:"Your profile is your sports story. Share your achievements, connect with teammates, and celebrate your love for the game.",
    keywords:"Sports Profile, Athlete Biography, Sporting Achievements, Personal Details, Athletic Journey, Sports Enthusiast, Athlete’s Story, Profile Information, Sporting Accomplishments, Player’s Bio",
    robots:"index, follow",
    language:"EN",

  }
}