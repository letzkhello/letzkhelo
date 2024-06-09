import React from 'react'
import ShowEvents from "@/components/ShowEvents"

function ShowEvent({ params }: any) {
  return (
    <div>
        <ShowEvents params={params}/>
    </div>
  )
}

export default ShowEvent;