import React from 'react'
import './Maintenance.css'
import Pendingview from './Pendingview';

const MaintenancePending = () => {
  return (
    <div>
      <div >
        <form>
          <div style={{marginLeft:'90px'}}>
            MAINTENANCE STATUS
            <hr style={{bottom:'solid'}}/>
          </div>  
        </form>
      <Pendingview />
      </div>
    </div>
  )
}

export default MaintenancePending;