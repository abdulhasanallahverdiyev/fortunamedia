import React, {useEffect, useState } from 'react';
import '../Css/HomeNewWorks.scss';
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
import axios from 'axios';
import { BASE_URL } from '../httpRequest/httpRequest';
const HomeNewWorks = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await axios.get(`${BASE_URL}service-api/last_works/`);
    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="newWorks" data-aos="fade-up">
      <div className="container">
        <div className="home_work_title">
          <h2>Son işlərimiz</h2>
        </div>
        <div className="row">
          {data &&
            data
              .sort((a, b) => new Date(b?.created_at) - new Date(a?.created_at))
              .slice(0, 3)
              .map((work, item) => (
                <div
                  className="col-4 col-lg-4 col-md-6 col-s-6 col-xs-12"
                  key={item}
                >
                  <div className="single_work">
                    <Link to="" className="thumbnail">
                      <img src={work.proje_photo} alt={work.project_name} />
                    </Link>
                    <div className="content-wrapper">
                      <h5 className="title">{work?.project_name}</h5>
                      <Link target="_blank" to={work?.proje_link}>
                        View Work <AiOutlineArrowRight />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default HomeNewWorks;
