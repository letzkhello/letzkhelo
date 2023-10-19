import AddTeam from '@/components/AddTeam'
import React from 'react'

export default function CreateTeam() {
  return (
    <>
    <AddTeam/>
    </>
  )
}


export function generateMetadata(){
  return{
    title:"Create Team",
    description:"Craft your perfect sports team! Choose the sport, players, location, captain, and more. Start your team’s journey today!",
    keywords:"Create Team, Sports Team Creation, Team Building, Team Creation Form, Sports Squad, Build a Team, Sports Group, Team Captain, Sports Location, Invite Players",
    robots:"index, follow",
    language:"EN",

  }
}