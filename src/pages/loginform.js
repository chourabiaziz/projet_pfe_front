import React from "react";
const LoginForm = ({ userData: { email, password }, handleSubmit }) => {
  return (
    <li className="item">
      <form>
        <div className="info">
          <span className="email">{email}</span>
          <span className="password">{password}</span>
        </div>
        <div>
          <button className="edit-btn" aria-label="edit button"></button>
        </div>
      </form>
    </li>
  );
};

export default LoginForm;
