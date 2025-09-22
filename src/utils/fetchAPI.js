export async function fetchAPI(url, method = "GET", content = null) {
  try {
    const options = { method };
    if (content) {
      if (content instanceof FormData) {
        options.body = content;
      } else {
        options.headers = { 
          "Content-Type": "application/json"};
        options.body = JSON.stringify(content); 
      }
    }
    const res = await fetch(url, options);
    if (!res.ok) throw new Error(`Request failed: ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error("fetchAPI error:", err);
    throw err;
  }
}
