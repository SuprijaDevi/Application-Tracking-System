// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
// import './Login.css';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

// const buttonStyle = {
//   position: 'absolute',
//   top: '50%',
//   left: '93%',
//   transform: 'translate(-50%, -50%)',
// };

// export default function Popup() {
//   const [open, setOpen] = React.useState(false);
//   const [isLoggedIn, setLoggedIn] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form data submitted:', formData);
//     setLoggedIn(true);
//     handleClose();
//   };

//   const handleLogout = () => {
//     setLoggedIn(false);
//   };

//   return (
//     <div>
//       {isLoggedIn ? (
//         <Button onClick={handleLogout} style={buttonStyle}>
//           Logout
//         </Button>
//       ) : (
//         <Button onClick={handleOpen} style={buttonStyle}>
//           Login
//         </Button>
//       )}

//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style} className="signup-container">
//           <h2>Login</h2>
//           <form onSubmit={handleSubmit} className="signup-form">
//             <div className="input-group">
//               <label htmlFor="email">Email:</label>
//               <input
//                 type="email"
//                 id="email"
//                 placeholder="E-mail"
//                 name="email"
//                 pattern="^\s*[^\s@]+@[^\s@]+\.[^\s@]+\s*$"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="input-group">
//               <label htmlFor="password">Password:</label>
//               <input
//                 type="password"
//                 id="password"
//                 placeholder="Password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <button type="submit" className="signup-button">
//               Login
//             </button>
//           </form>
//           <p>
//             <h3>
//               Don't have an account? <a href="/signup">Sign Up</a>
//             </h3>
//           </p>
//         </Box>
//       </Modal>
//     </div>
//   );
// }

// Popup.js

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Log from './Log'; // Import the Login component
import Signin from './Signin'; // Import the Signup component
import './Login.css';

const style = {
  backgroundImage: 'url("https://www.employastar.com/wp-content/uploads/2020/08/Employastar_Blog_687x370_How-an-ATS-software-works.jpg")',
  backgroundRepeat: 'no-repeat',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #fff',
  boxShadow: 44,
  p: 5,
};

const buttonStyle = {
  position: 'absolute',
  top: '50%',
  left: '94%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#007bff',
  color: '#fff',
  border: '1px solid #007bff',
  borderRadius: '5px',
  padding: '6px',
  cursor: 'pointer',
};

export default function Popup() {
  const [open, setOpen] = React.useState(false);
  const [isLoggedIn, setLoggedIn] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [isSignup, setIsSignup] = useState(false);

  const switchForm = () => {
    setIsSignup(!isSignup);
  };

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  const renderForm = () => {
    if (isSignup) {
      return <Signin onClose={handleClose} switchForm={switchForm} />;
    } else {
      return <Log onClose={handleClose} switchForm={switchForm} onLogin={handleLogin} />;
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <Button onClick={handleLogout} style={buttonStyle}>
          Logout
        </Button>
      ) : (
        <Button onClick={handleOpen} style={buttonStyle}>
          Login
        </Button>
      )}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="signup-container">
          {renderForm()}
        </Box>
      </Modal>
    </div>
  );
}
