import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className= "min-h-screen flex justify-center items-center bg-[#e7e7e7]">
             <div className="card bg-base-100 w-full max-w-lg rounded-none p-10">
      <form className="card-body">
        <h2 className="text-2xl font-semibold text-center">Login your account</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
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