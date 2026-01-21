export const authFetch = async (url, options = {}) => {
  const token = localStorage.getItem("token");

  const res = await fetch(url, {
    ...options,
    headers: {
      ...(options.headers || {}),
      Authorization: token ? `Bearer ${token}` : ""
    }
  });

  // 🔥 JWT expired or invalid
  if (res.status === 401) {
    localStorage.clear();

    // notify Header
    window.dispatchEvent(new Event("auth-change"));

    // redirect to login
    window.location.href = "/login";
    throw new Error("Session expired. Please login again.");
  }

  return res;
};
