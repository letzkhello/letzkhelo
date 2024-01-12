import Productdetails from '@/components/ProductShow';
import React from 'react'

const Details = ({ params }: any) => {

  return (
    <div >
        <Productdetails params={params}/>
    </div>
  )
}

export default Details;
