import React from 'react'
import {FaSearch} from 'react-icons/fa'
import DashboardLayout from '../layout/dashboard_layout';

const DashboardMain = () => {
    return (
        <>
            <div className="d-flex justify-content-between align-items-center mb-5">
                <div>
                    <h4 className='p-0 m-0'>Hello <span className='text_light'>Garry !</span></h4>
                    <p className='p-0 m-0'><small className='text-muted'>Let's do the best here</small></p>
                </div>
                <div className="input-group wa">
                    <input type="text" placeholder='Search here' className='form-control border-0 bg_light rounded-pill text_smaller' />
                    <div className="input-group-append">
                        <span className="input-group-text border-0 bg_light rounded-pill ml-2" id="basic-addon2">
                            <FaSearch size={13} />
                        </span>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-5">
                <small><b className='text_small'>Project Summary</b></small>
                <small className='text_small text-danger'><b>See all Project {'>'}</b></small>
            </div>
            <div className="row">
                <div className="col-md-5">

                </div>
                <div className="col-md-6 offset-md-1">
                    <small className='text_smaller font-weight-bold text_muted'>Project Summary</small>
                    <div className="card card_warning border-0 mt-2">
                        <div className="card-body">

                        </div>
                    </div>
                    <div className="card border-0 mt-2">
                        <div className="card-body">

                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-4">
                <div className="col-md-7">
                    <small>Project Graph</small>
                    <div className="card border-0">
                        <div className="card-body">

                        </div>
                    </div>
                </div>
                <div className="col-md-5 mt-3">
                    <small><b className='text_small'>Recent Tasks</b></small>
                    {[1, 2, 3, 4].map((item, key) => (
                        <div key={key} className="card border-0 my-2">
                            <div className="card-body">

                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <small><b className='text_small'>My Tasks</b></small>
            <div className="d-flex align-items-center my-3">
                <small className='text_smaller mr-5'><b>Acive</b></small>
                <small className='text_smaller mr-5'><b>In Preview</b></small>
                <small className='text_smaller mr-5'><b>Completed</b></small>
                <small className='text_smaller mr-5'><b>Canceled</b></small>
            </div>
            {[1, 2, 3, 4, 5].map((item, key) => (
                <div className="card border-0 my-1">
                    <div className="card-body">

                    </div>
                </div>
            ))}
        </>
    )
}

export default DashboardMain;