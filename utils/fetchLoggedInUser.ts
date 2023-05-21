import axios from "axios";

export async function fetchLoggedInUser() {
  try {
    const res = await axios.get(
      "http://localhost:8000/api/v1/auth/current-user",
      { withCredentials: true }
    );
    return await res.data;
  } catch (error) {
    alert(error);
    console.log(error);
  }
}
