import { Helmet } from 'react-helmet';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BASE_URL } from '../httpRequest/httpRequest';
import { useParams } from 'react-router';
import DetailHero from '../Components/DetailHero';
import Pakets from '../Components/Pakets';
import DetailWork from '../Components/DetailWork';

const Detail = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}service-api/services/` + id
        );
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getData();
  }, [id]);
  return (
    <div style={{paddingTop:"75px"}}>
      <Helmet>
        <title>Detail</title>
      </Helmet>
      <DetailHero data={data} />
      <Pakets  data={data}/>
      <DetailWork />
    </div>
  );
};

export default Detail;
