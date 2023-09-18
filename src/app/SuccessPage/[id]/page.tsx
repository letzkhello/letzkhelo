import { SuccessPageComponent } from '@/components/SuccessPageComponent'
import React from 'react'

const SuccessPageDynamic = ({ params }: any) => {
  return (
    <div>
      <SuccessPageComponent params={params}/>
    </div>
  )
}

export default SuccessPageDynamic