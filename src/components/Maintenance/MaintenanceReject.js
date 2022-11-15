import React from 'react'
import './Maintenance.css'
import Rejectview from './Rejectview';

const MaintenanceReject = () => {
  return (
    <div>
      <div>
        <form>
          <div>
            MAINTENANCE STATUS
            <hr style={{bottom:'solid'}}/>
          </div>     
        </form>
        <Rejectview />
      </div>
    </div>
  )
}

export default MaintenanceReject;