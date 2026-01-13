import { useNavigate } from "react-router-dom";
import "../style/Login.css";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const fieldStyle = {
    "& .MuiInputLabel-root": {
      color: "rgba(255, 255, 255, 0.55)",
      fontSize: "14px"
    },
    "& .MuiInputLabel-shrink": {
      color: "black",
      fontSize: "14px",
      transform: "translate(14px, -9px)",
      background: "rgba(255,255,255,0.9)",
      padding: "0 6px",
      borderRadius: "4px"
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgba(255, 255, 255, 0.18)"
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgba(255, 255, 255, 0.4)"
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgba(255, 255, 255, 0.6)"
    }
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,      // ✅ correct
        password: password
      })
    });

    if (!res.ok) {
      const text = await res.text();
      alert(text || "Invalid credentials");
      return;
    }

    const data = await res.json(); // ✅ now JSON

    localStorage.setItem("token", data.token);
    localStorage.setItem("role", data.role);
    localStorage.setItem("userId", data.userId);
    localStorage.setItem("fullName", data.fullName);

    // const { login } = useAuth();

    // login(data.token);
    navigate("/profile");

  } catch (err) {
    alert("Server error");
  }
};


  return (
    <div className="app-bg">
      <div className="glass-card">
        <h2>Welcome Back Elite</h2>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Email or Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              style: {
                color: "#ffffff",
                borderRadius: "12px",
                background: "rgba(255, 255, 255, 0.12)"
              }
            }}
            sx={fieldStyle}
          />

          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              style: {
                color: "#ffffff",
                borderRadius: "12px",
                background: "rgba(255, 255, 255, 0.12)"
              }
            }}
            sx={fieldStyle}
          />

          <button className="primary-btn" type="submit">
            Sign In
          </button>
        </form>

        <p>
          Create an account?{" "}
          <a
            href="#"
            onClick={() => navigate("/register")}
            style={{ color: "#00E5FF" }}
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
