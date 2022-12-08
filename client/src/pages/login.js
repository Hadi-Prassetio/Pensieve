import * as React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { Success, Error } from "../helper/Toast";
import "../App.css";
import { API } from "../config/api";
import { useMutation } from "react-query";
import { userContext } from "../context/user";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const [state, dispath] = React.useContext(userContext)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = useMutation(async(e)=>{
    try {
      e.preventDefault();
      setLoading(true)
      const response = await API.post("/login", form);
      Success({ message: 'Login Success!'});
      setLoading(false);
      if(response?.status == 200){
        dispath({
            type: "Login",
            payload: response.data.data,
      });
    }
      navigate("/summary")
    } catch (error) {
      Error({ message: `Login Failed` });
      setLoading(false);
    }
  })

  return (
    <div
      className='bg-black d-flex align-items-center row'
      style={{ width: "100vw", height: "100vh" }}>
      <div
        style={{ height: "600px" }}
        className='border border-white col-10 rounded-5 m-auto d-flex align-items-center row'>
        <div className='col-5 mx-auto'>
          <Form onSubmit={(e)=>handleSubmit.mutate(e)} className='text-center w-100'>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Control
                className='rounded-pill border-0 text-light bg-dark py-3'
                type='email'
                name='email'
                onChange={handleChange}
                placeholder='Enter email'
              />
            </Form.Group>
            <Form.Group
              className='mb-3 rounded-pill'
              controlId='formBasicPassword'>
              <Form.Control
                className='rounded-pill border-0 text-light bg-dark  py-3'
                type='password'
                name='password'
                onChange={handleChange}
                placeholder='Password'
              />
            </Form.Group>
            {/* <Link className="text-decoration-none text-dark" to="/summary"> */}
            <Button
              variant='danger'
              type="submit"
              className='w-100 border-0 rounded-pill mb-3 fw-bold  py-3 text-dark'>
              {loading ? "loading..." : "Log In"}
            </Button>
            {/* </Link> */}
            <Link to='/register' className='text-decoration-none'>
              <Form.Text className='text-muted'>New User?</Form.Text>
            </Link>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
