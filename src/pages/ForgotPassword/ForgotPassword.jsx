import { useState } from "react";

import { forgotPassword } from "../../services/authService";

const ForgotPassword = () => {

  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await forgotPassword(email);

      alert("Password reset email sent.");

    } catch (err) {

      alert(err.message);

    }

  };

  return (

    <div style={{ padding: "40px" }}>

      <h1>Forgot Password</h1>

      <form onSubmit={handleSubmit}>

        <input
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <button>Send Reset Email</button>

      </form>

    </div>

  );

};

export default ForgotPassword;