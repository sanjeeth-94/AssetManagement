import React from 'react'
import AmcServiceadd from './AmcServiceadd'
import DataTable from './AmcServiceview'

const Serviceadd = () => {
  return (
    <div>
      <div className='add'>
        <AmcServiceadd/>
      </div>
      <DataTable/>
    </div>
  )
}

export default Serviceadd;
