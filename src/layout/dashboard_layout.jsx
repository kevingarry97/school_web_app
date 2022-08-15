import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa'
import {TbChartInfographic, TbLayoutGridAdd, TbChecklist} from 'react-icons/tb';
import {BiLogIn} from 'react-icons/bi';
import {IoIosArrowDropright, IoIosArrowDropleft} from 'react-icons/io'
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import DashboardMain from '../pages/dashboard_main';
import DashboardList from '../pages/dashboard_list';
import { activeMenu } from '../utils/helper';

const DashboardLayout = ({children}) => {
    const [collapsed, setCollapsed] = useState(true)
    return (
        <div className='d-flex h-100'>
            <div className={`sidebar ${collapsed == true ? 'collapsed' : 'uncollapsed'}`}>
                <button className={`btn toggleBtn ${collapsed && 'ml_5'}`} onClick={() => setCollapsed(!collapsed)}>
                    <a href="#">
                        {collapsed ? <IoIosArrowDropright size={25} color={'#FFCF8A'} /> : <IoIosArrowDropleft size={25} color={'#FFCF8A'} />}
                    </a>
                </button>
                <ul className="list-group">
                    <Link to={'/admin'} className="noHover">
                        <li className={`list-group-item my-3 ${activeMenu('/admin/main')}`}>
                            <TbLayoutGridAdd size={28} color={'#3D3B59'} /> &nbsp; 
                            {!collapsed && <small className='text-muted'>My Dashboard</small>}
                        </li>
                    </Link>
                    <Link to={'/admin/list'} className="noHover">
                        <li className={`list-group-item my-3 ${activeMenu('/admin/list')}`}>
                            <TbChecklist size={28} color={'#3D3B59'} /> &nbsp; 
                            {!collapsed && <small className='text-muted'>My Tasks</small>}
                        </li>
                    </Link>
                    <li className="list-group-item my-3"><TbChartInfographic size={28} color={'#3D3B59'} /> &nbsp; {!collapsed && <small className='text-muted'>View Reports</small>}</li>
                </ul>
                <div className='mb-4'>
                    <a href="#"><BiLogIn size={25} color={'#f5567B'} /> &nbsp; {!collapsed && <small className='text-muted'>Sign me Out</small>}</a>
                </div>
            </div>
            <div className='w-100'>
                <div className="container-fluid pr-0">
                    <div className="row p-4">
                        <div className="col-md-9 border-right">
                            <Switch>
                                <Route path={'/admin/main'} component={DashboardMain} />
                                <Route path={'/admin/list'} component={DashboardList} />
                                <Redirect from='/admin' to='/admin/main' />
                            </Switch>
                        </div>
                        <div className="col-md-3">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="media">
                                    <div className="media-body">
                                        {/* Image Render */}
                                        <p className='p-0 m-0'><small className='font-weight-bold'>Kevin G.</small></p>
                                        <small className='text-danger'>Software Eng.</small>
                                    </div>
                                </div>
                                <FaChevronDown />
                            </div>
                            <div className="card border-0 rounded mt-4">
                                <div className="card-body">
                                    <div className="d-flex align-items-center justify-content-between mb-4">
                                        <div className="media">
                                            <div className="media-body">
                                                <small className='text_smaller'>COURSES</small>
                                                <h6 className='text-center text-black-50'><b>10</b></h6>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <div className="media-body">
                                                <small className='text_smaller'>COMPLETED</small>
                                                <h6 className='text-center text-black-50'><b>9</b></h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mt-4">
                                        <div className="media">
                                            <div className="media-body">
                                                <small className='text_smaller'>LAST ACTIVE</small>
                                                <h6 className='text-center text-black-50'>1<b>d</b> 15<b>h</b></h6>
                                            </div>
                                        </div>
                                        <button className="btn btn-danger btn-sm">
                                            <small className='text_smaller text-white'><b>Edit Profile</b></small>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout;