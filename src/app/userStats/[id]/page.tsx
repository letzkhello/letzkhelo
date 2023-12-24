import Link from 'next/link'
import React from 'react'
import {UserStatistics} from '@/components/UserStats'


function UserStats({ params }: any) {
  return (
   <UserStatistics params={params}/>
  )
}

export default UserStats