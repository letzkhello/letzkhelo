import AllUserCard from '@/components/AllUserCard'
import React from 'react'

export default function ALLUsers() {
  return (
    <>
    <AllUserCard/>
    </>
  )
}


export function generateMetadata(){
  return{
    title:"All Members",
    description:"Meet the members: Explore player profiles, learn about their age, weight, and sports interests. Discover your teammates’ passions!",
    keywords:"Player Profiles, Athlete Info, Sports Interests, Team Roster, Athlete Details, Player Information, Sports Community, Team Members, Athlete Profiles, Team Player List",
    robots:"index, follow",
    language:"EN",

  }
}
