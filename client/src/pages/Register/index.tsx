import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useFormik } from 'formik';
const axios = require('axios');

import './index.css';

const Register = () => {
  const [success, setSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },

    onSubmit: values => {
      axios({
        method: 'post',
        url: 'http://localhost:3003/register',
        data: {
          login: values.login,
          password: values.password,
        }
      }).then((res) => {
        if (res.status === 200) {
          setSuccess(true);
        }
      });
    },
  });

  return (
    <div className="register">
      {success && <Redirect to='/login' />}
      <form onSubmit={formik.handleSubmit}>
        <h1>Registration form</h1>
        <label htmlFor="login">Login</label>
        <input
          id="login"
          name="login"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.login}
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;