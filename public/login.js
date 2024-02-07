// import React, { useState } from 'react';
// import './login.css';
// const LoginPage = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Perform authentication logic here (e.g., send data to a server)

//     // For simplicity, let's just log the entered credentials for now
//     console.log('Username:', username);
//     console.log('Password:', password);
//   };

//   return (
 
//     <div className="signup-contain">
      
//     <h2 className="signup-tit">Login</h2>
//     <form className="signup-for"   onSubmit={handleSubmit}>
//       <div className="form-grop">
//       <label>Email</label>
//         <input
//           type="text"
//           id="username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//           placeholder="Email"
//         />
//       </div>
//       <div className="form-grop">
//       <label className="move" >Password</label>
//         <input
//           type="password"
//           id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           placeholder="Password"
//         />
//       </div>
//       {/* <hr></hr> */}
//       <button  className="signup-but" type="submit">
//        Login
//       </button>
//     < h3 className="signup-ti">or</h3>
//     <button  className="signup-but" type="submit">
//        Signup
//       </button>
//     </form>
   
//   </div>
//   );
// };

// export default LoginPage;
alert("welcome");