import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "7f0384d956f6442ba49b8db198775db2",
  },
});
