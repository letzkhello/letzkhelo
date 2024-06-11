import Link from 'next/link'
import React from 'react'
import {Modal} from '@/components/GiveAccessModal';


function UserStats({ params }: any) {
  return (
   <Modal params={params}/>
  )
}

export default UserStats