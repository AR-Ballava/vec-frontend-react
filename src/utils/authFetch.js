export const authFetch = async (url, options = {}) => {
  const token = localStorage.getItem("token");

  const res = await fetch(url, {
    ...options,
    headers: {
      ...(options.headers || {}),
      Authorization: token ? `Bearer ${token}` : ""
    }
  });

  if (res.status === 401) {
    localStorage.clear();
    window.dispatchEvent(new Event("auth-change"));

    // 🔥 DO NOT hard reload
    window.dispatchEvent(
      new CustomEvent("force-login", {
        detail: { reason: "expired" }
      })
    );

    throw new Error("Session expired. Please login again.");
  }

  return res;
};
