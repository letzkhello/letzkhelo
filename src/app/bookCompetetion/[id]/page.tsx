import { BookCompetetionFormDynamic } from '@/components/BookCompetetionFormDynamic'
import React from 'react'

const BookCompetetionDynamic = ({ params }: any) => {

  return (
    <div>
        Hello 
        <BookCompetetionFormDynamic params={params}/>
    </div>
  )
}

export default BookCompetetionDynamic