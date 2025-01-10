import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Login = () => {
  const { logIn, setUser } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value
    const password = form.password.value

    // console.log({email, password})
    logIn(email, password)
      .then((result) => {
        console.log(result.user)
        setUser(result.user)
        navigate('/')
      })
      .catch(error => {
        alert(error.code)
      })
  }
  return (
    <div className="min-h-screen flex justify-center items-center ">
      <div className="card bg-base-100 w-full max-w-lg rounded-none p-10">
        <form onSubmit={handleSubmit} className="card-body">
          <h2 className="text-2xl font-semibold text-center">Login your account</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Login</button>
          </div>
        </form>
        <p className="text-center">
          Don&apos;t have a account? <Link className="text-red-500" to={'/auth/register'}>Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;