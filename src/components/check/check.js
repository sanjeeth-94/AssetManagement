import React from 'react';
// import FileCopyIcon from '@mui/icons-material/FileCopy';
// import AddBoxIcon from '@mui/icons-material/AddBox';
// import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import BuildIcon from '@mui/icons-material/Build';
import Table from './Table';

const Check = () => {
  return (
    <div>
        <div className="main__cards">
            <div className="card">
                <div className="card_inner" style={{
                    color: 'white',
                    display: 'inline'    
                }}>
                    <p className="text-primary-p" >MAINTENANCE</p>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <span className="font-bold text-title"></span>
                        <BuildIcon className='check-icon' />
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card_inner" style={{
                        color: 'white',
                        display: 'inline'
                    }}>
                        <p className="text-primary-p">WARRANTY DUES</p>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <span className="font-bold text-title"></span>
                            <BuildIcon className='check-icon' /> 
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card_inner" style={{
                        color: 'white',
                        display: 'inline'
                    }}>
                        <p className="text-primary-p">AMC DUES</p>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <span className="font-bold text-title"></span>
                            <BuildIcon className='check-icon' />
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className='card_inner' style={{
                        color: 'white',
                        display: 'inline'
                    }}>
                        <p className='text-primary-p'>CERTIFICATION DUES</p>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <span className='font-bold text-title'></span>
                            <BuildIcon className='check-icon' />
                        </div>
                    </div>
                </div>
            </div>
            <Table />
        </div> 
    )
}

export default Check;