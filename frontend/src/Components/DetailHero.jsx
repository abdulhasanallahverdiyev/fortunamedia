import '../Css/DetailHero.scss';
import { Link } from 'react-router-dom';
const DetailHero = ({ data }) => {
  return (
    <div className="detail_hero">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-12 col-md-12 col-s-12 col-xs-12">
            <h1 className="detail_title">{data.name}</h1>
          </div>
          <div className="col-lg-12 col-md-12 col-s-12 col-xs-12">
            <h4 className="detail_routes">
              <Link to="/services">Xidmətlər</Link>
              <span>/{data.name}</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailHero;
