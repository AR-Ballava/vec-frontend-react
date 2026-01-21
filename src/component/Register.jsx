import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ basic validation
    if (!fullName || !email || !password || !confirmPassword) {
      alert("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          fullName,
          email,
          password
        })
      });

      if (!res.ok) {
        const msg = await res.text();
        throw new Error(msg || "Registration failed");
      }

      alert("Registration successful! Please login.");
      navigate("/login");

    } catch (err) {
      alert(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const fieldStyle = {
    "& .MuiInputLabel-root": {
      color: "rgba(255, 255, 255, 0.55)",
      fontSize: "14px"
    },
    "& .MuiInputLabel-shrink": {
      background: "rgba(255,255,255,0.9)",
      padding: "0 6px",
      borderRadius: "4px",
      color: "black"
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

  return (
    <div className="app-bg">
      <div className="glass-card">
        <h2>Create Your Account</h2>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Full Name"
            fullWidth
            margin="normal"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            InputProps={{ style: { color: "#fff", borderRadius: "12px", background: "rgba(255,255,255,0.12)" } }}
            sx={fieldStyle}
          />

          <TextField
            label="Email Address"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{ style: { color: "#fff", borderRadius: "12px", background: "rgba(255,255,255,0.12)" } }}
            sx={fieldStyle}
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{ style: { color: "#fff", borderRadius: "12px", background: "rgba(255,255,255,0.12)" } }}
            sx={fieldStyle}
          />

          <TextField
            label="Confirm Password"
            type="password"
            fullWidth
            margin="normal"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            InputProps={{ style: { color: "#fff", borderRadius: "12px", background: "rgba(255,255,255,0.12)" } }}
            sx={fieldStyle}
          />

          <button className="primary-btn" type="submit" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <p>
          Already have an account?{" "}
          <a href="#" onClick={() => navigate("/login")} style={{ color: "#00E5FF" }}>
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}
