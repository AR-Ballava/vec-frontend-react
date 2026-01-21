import React, { useState } from "react";

const styles = {
  container: {
    width: "360px",
    margin: "80px auto",
    padding: "25px",
    backgroundColor: "#0f172a",
    borderRadius: "12px",
    color: "#ffffff",
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
  },
  title: {
    marginBottom: "20px",
    color: "#38bdf8",
  },
  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    outline: "none",
    marginBottom: "14px",
    fontSize: "15px",
  },
  button: {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#22c55e",
    color: "#000",
    fontWeight: "bold",
    cursor: "pointer",
  },
  result: {
    marginTop: "20px",
    padding: "14px",
    backgroundColor: "#020617",
    borderRadius: "10px",
    color: "#22c55e",
    fontSize: "16px",
  },
};

function HealthCheck() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "http://localhost:8080/api/test/check",
      {
        method: "POST",
        headers: {
          "Content-Type": "text/plain",
        },
        body: name,
      }
    );

    const data = await response.text();
    setMessage(data);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Health Check</h2>

      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Check
        </button>
      </form>

      {message && (
        <div style={styles.result}>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}

export default HealthCheck;
