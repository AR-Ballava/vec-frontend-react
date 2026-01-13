import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const navigate = useNavigate();

  const fieldStyle = {
    "& .MuiInputLabel-root": {
      color: "rgba(255, 255, 255, 0.55)",
      fontSize: "14px"
    },

    "& .MuiInputLabel-shrink": {
      color: "#000000",
      fontSize: "14px",
      transform: "translate(14px, -9px)",
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
            variant="outlined"
            fullWidth
            margin="normal"
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
            label="Email Address"
            variant="outlined"
            fullWidth
            margin="normal"
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
            label="Confirm Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
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
            Register
          </button>
        </form>

        <p>
          Already have an account? <a onClick={()=> navigate("/login")} href="#" style={{color: '#00E5FF'}}>Sign In</a>
        </p>
      </div>
    </div>
  );
}
