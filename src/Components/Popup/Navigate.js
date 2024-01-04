import React, { useState } from 'react';
import Popup from './Popup';
import Signin from './Signin';

const AuthenticationPopup = ({ onClose }) => {
  const [isLogin, setLogin] = useState(true);

  const handleSwitchForm = () => {
    setLogin(!isLogin);
  };

  return (
    <div>
      {isLogin ? (
        <Popup onClose={onClose} switchForm={handleSwitchForm} />
      ) : (
        <Signin onClose={onClose} switchForm={handleSwitchForm} />
      )}
    </div>
  );
};

export default AuthenticationPopup;
