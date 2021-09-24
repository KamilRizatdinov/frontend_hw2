import { useFormik } from 'formik';
import { Redirect } from 'react-router-dom';
const axios = require('axios');

import { useUser } from '../../contexts/User';

import './index.css';

interface Credentials {
  login: string;
  password: string;
}

const Login = () => {
  const { isAuthenticated, signIn } = useUser();

  const formik = useFormik<Credentials>({
    initialValues: {
      login: '',
      password: '',
    },

    onSubmit: values => {
      axios({
        method: 'post',
        url: 'http://localhost:3003/login',
        data: {
          login: values.login,
          password: values.password,
        }
      }).then((res) => {
        signIn(res.data);
      });
    },
  });

  return (
    <div className="login">
      {isAuthenticated && <Redirect to='/' />}
      <form onSubmit={formik.handleSubmit}>
        <h1>Login form</h1>
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

export default Login;