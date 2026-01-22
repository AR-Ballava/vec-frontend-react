import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Profile.css";

/* ================= LOGIC ================= */

const getAccessLevel = (netWorth) => {
  if (netWorth <= 20) return "Noble Entry";
  if (netWorth <= 40) return "Imperial Class";
  if (netWorth <= 60) return "Sovereign Circle";
  if (netWorth <= 80) return "Supreme Authority";
  return "Global Elite";
};

/* ================= AVATAR HELPERS ================= */

const premiumGradients = [
  "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
  "linear-gradient(135deg, #141e30, #243b55)",
  "linear-gradient(135deg, #232526, #414345)",
  "linear-gradient(135deg, #3a1c71, #d76d77, #ffaf7b)",
  "linear-gradient(135deg, #4b4e4d, #131314)"
];

const getInitials = (name) => {
  if (!name) return "U";
  const parts = name.trim().split(" ");
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
};

const getPremiumGradient = (name) => {
  if (!name) return premiumGradients[0];
  const index = name.charCodeAt(0) % premiumGradients.length;
  return premiumGradients[index];
};

/* ================= COMPONENT ================= */

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    // // 🔐 No token → force login
    // if (!token || !userId) {
    //   navigate("/login", {
    //     state: { from: "/profile" }
    //   });
    //   return;
    // }


    fetch(`http://localhost:8080/api/user/getUser/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    })
      .then((res) => {
        // 🔥 JWT expired or invalid
        if (res.status === 401) {
          localStorage.clear();

          // notify Header immediately
          window.dispatchEvent(new Event("auth-change"));

          navigate("/login");
          throw new Error("Session expired");
        }

        if (!res.ok) {
          throw new Error("Failed to fetch user");
        }

        return res.json();
      })
      .then((data) => setUser(data))
      .catch((err) => console.error(err));
  }, [navigate]);

  if (!user) return null;

  return (
    <section className="profile-page">
      <div className="profile-card">
        {/* LEFT — USER INFO */}
        <div className="profile-left">
          {/* AUTO GENERATED PROFILE AVATAR */}
          <div
            className="profile-avatar auto-avatar"
            style={{ background: getPremiumGradient(user.fullName) }}
          >
            {getInitials(user.fullName)}
          </div>

          <h2 className="profile-name">{user.fullName}</h2>
          <p className="profile-tier">Prestige Member · Black Tier</p>

          <div className="stats-grid">
            <div className="stat-box">
              <div className="stat-label">Virtual Net Worth</div>
              <div className="stat-value">${user.virtualNetWorth}M</div>
            </div>

            <div className="stat-box">
              <div className="stat-label">Collections Owned</div>
              <div className="stat-value">
                {user.collectionsIds?.length || 0}
              </div>
            </div>

            <div className="stat-box">
              <div className="stat-label">Influence Score</div>
              <div className="stat-value">{user.memberSince}</div>
            </div>

            <div className="stat-box">
              <div className="stat-label">Access Level</div>
              <div className="stat-value access-level">
                {getAccessLevel(user.virtualNetWorth)}
              </div>
            </div>
          </div>

          <div className="profile-meta">
            <p>
              Member Since: <strong>{user.memberSince}</strong>
            </p>
            <p>
              Email: <strong>{user.email}</strong>
            </p>
            <p>
              Status: <strong>Verified</strong>
            </p>
          </div>
        </div>

        {/* RIGHT — COLLECTIONS */}
        <div className="profile-right">
          <div className="collections-header">
            <h3>Your Featured Collections</h3>
            <button onClick={() => navigate("/my-orders")} className="outline-btn">View All Collections</button>
          </div>

          <p className="collections-subtitle">
            A glimpse into your virtual empire
          </p>

          <div className="collections-grid">
            {user.collectionsIds?.slice(0, 2).map((id, index) => (
              <div className="collection-card" key={index}>
                <img
                  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
                  alt="Collection"
                />
                <div className="collection-info">
                  <h4>Collection #{index + 1}</h4>
                  <p>Asset ID: {id}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="collections-extra">
            + {Math.max(0, (user.collectionsIds?.length || 0) - 2)} additional
            collections secured
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
