import {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
const axios = require('axios');

import Card from '../../components/Card'
import { useUser } from '../../contexts/User';

import lock from '../../images/lock.jpeg';
import './index.css';

const Home = () => {
  const [secretPeople, setSecretPeople] = useState([]);
  const { isAuthenticated, token } = useUser();

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:3003/info',
      headers: {
        Authorization: token,
      }
    }).then((res) => {
      setSecretPeople(res.data);
    });
  }, [isAuthenticated])

  return (
    <div className="home">
      {isAuthenticated && secretPeople.length &&
        secretPeople.map((person) => <Card {...person} />)
      }
      { !isAuthenticated && 
        <div className="home">
          <img className="home__lock" src={lock} alt="lock image"></img>
          <h1>This page is locked!</h1>
          <Link className="home__login" to="/login">login</Link>
        </div>
      }
    </div>
  );
};

export default Home;