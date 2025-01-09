import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
  const {createNewUser,setUser} = useContext(AuthContext)

    const handleSubmit = e => {
      e.preventDefault()
      const form = new FormData(e.target)

      const name = form.get('name')
      const email = form.get('email')
      const photo = form.get('photo')
      const password = form.get('password')

      createNewUser(email,password)
      .then(result => {
        console.log(result.user)
        setUser(result.user)
      })
      .catch(error => {
        console.log(error.message)
      })
    }
    return (
        <div className= "min-h-screen flex justify-center items-center ">
        <div className="card bg-base-100 w-full max-w-lg rounded-none p-10">
 <form onSubmit={handleSubmit} className="card-body">
   <h2 className="text-2xl font-semibold text-center">Register your account</h2>
   <div className="form-control">
     <label className="label">
       <span className="label-text">Name</span>
     </label>
     <input name='name' type="text" placeholder="name" className="input input-bordered" required />
   </div>
   <div className="form-control">
     <label className="label">
       <span className="label-text">Photo URL</span>
     </label>
     <input name='photo' type="text" placeholder="photo-url" className="input input-bordered" required />
   </div>
   <div className="form-control">
     <label className="label">
       <span className="label-text">Email</span>
     </label>
     <input name='email' type="email" placeholder="email" className="input input-bordered" required />
   </div>
   <div className="form-control">
     <label className="label">
       <span className="label-text">Password</span>
     </label>
     <input name='password' type="password" placeholder="password" className="input input-bordered" required />
     <label className="label">
       <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
     </label>
   </div>
   <div className="form-control mt-6">
     <button className="btn btn-neutral rounded-none">Register</button>
   </div>
 </form>
   <p className="text-center">
       Already have a account? <Link className="text-red-500" to={'/auth/login'}>Login</Link>
   </p>
</div>
   </div>
    );
};

export default Register;