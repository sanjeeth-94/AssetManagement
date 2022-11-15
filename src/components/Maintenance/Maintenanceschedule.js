import React from 'react'
import './Maintenance.css'
import Maintenanceview from './Maintenanceview';

const Maintenanceschedule = () => {
  return (
    <div>
        <div >
        <form>
            <div>
            MAINTENANCE STATUS
            <hr style={{bottom:'solid'}}/>
            </div>
            
        </form>

      <Maintenanceview />
      </div>
    </div>
  )
}

export default Maintenanceschedule;