import React, { useContext } from 'react'
import "../Css/LatestWork.scss"
import { mainContext } from '../Context/Context'
import { Link } from "react-router-dom"
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import {AiOutlineArrowRight} from "react-icons/ai"
const antIcon = <LoadingOutlined style={{ fontSize: 24, color: "#E67118" }} spin />;
const LatestWork = () => {
    const { latest, visible, showMoreWork, spinLoad } = useContext(mainContext)
    return (
        <div className='latest_work'>
            <div className="container">
                <div className="latest_work_title">
                    <h2>Son işlərimiz</h2>
                </div>
                <div className="row">
                    {latest && latest
                        .slice(0, visible)
                        .map((work, item) => (
                            <div className="col-4 col-lg-4 col-md-6 col-s-6 col-xs-12" key={item}>
                                   <div className="single_work">
                                <Link to="" className='thumbnail'>
                                    <img src={work.proje_photo} alt={work.project_name} />
                                </Link>
                                <div className="content-wrapper">
                                    <h5 className='title'>
                                        {work?.project_name}
                                    </h5>
                                    <Link target='_blank' to={work?.proje_link}>View Work <AiOutlineArrowRight /></Link>
                                </div>
                            </div>
                            </div>
                        ))}
                    <div className="col-12 col-lg-12 col-md-12 col-s-12 col-xs-12">
                        <div className="prevButton">
                            <button onClick={showMoreWork}>
                                {spinLoad && <span><Spin indicator={antIcon} /></span>}
                                {!spinLoad && <span> Load more</span>}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestWork
