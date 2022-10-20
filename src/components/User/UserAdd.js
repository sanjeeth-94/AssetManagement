import React from 'react'
import Adding from './Adding'
import './Adding.css'
import DataTable from './Viewtable'

const useradd = () => {
  return (
    <div>
      <h1>Manage user</h1>
      <hr style={{bottom:'solid'}}/>
      <div style={{marginLeft:'85%', marginBottom:'20px'}}>
        <Adding/>
      </div>    
     <DataTable/>
    </div>
  )
}

export default useradd;
