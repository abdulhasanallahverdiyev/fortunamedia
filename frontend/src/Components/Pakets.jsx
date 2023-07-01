import React from 'react';
import '../Css/Pakets.scss';
import { BsCurrencyDollar } from 'react-icons/bs';
const Pakets = ({ data }) => {
  return (
    <div className="pakets_section">
      <div className="container">
        <div className="pakets_title">
          <h4>paketlər</h4>
        </div>
        <div className="row">
          {data.services_package &&
            data.services_package?.map((e, index) => (
              <div
                key={index}
                className="col-4 col-lg-4 col-md-6 col-s-8 col-xs-12"
              >
                <div className="pakets">
                  <div className="text_center">
                    <h2 className="heading">{e?.package_name}</h2>
                    <div className="price">
                      <sup>
                        <BsCurrencyDollar />
                      </sup>
                      <span className="number">
                        {e?.price}
                        <small className="per">/{e?.price_period}</small>
                      </span>
                    </div>
                    <h3 className="excerpt">Enjoy All The Features</h3>
                    <ul className="pricing_text">
                      {e?.package_property &&
                        e?.package_property.map((property, uid) => (
                          <li key={uid}>
                            <p>{property?.property}</p>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Pakets;
