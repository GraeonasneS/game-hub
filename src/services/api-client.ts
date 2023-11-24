import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d8a976437be341d4827045453f98a037",
  },
});
