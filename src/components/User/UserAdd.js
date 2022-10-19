import React from 'react'
import Adding from './Adding'
import './Adding.css'
import DataTable from './Viewtable'

const useradd = () => {
  return (
    <div>
      <h1>Manage user</h1>
      <div className='add'>
        <Adding/>
      </div>    
     <DataTable/>
    </div>
  )
}

export default useradd;
