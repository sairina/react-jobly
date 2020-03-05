import axios from 'axios';
import { TOKEN_STORAGE_ID } from "./App.js"

class JoblyApi {
  static async request(endpoint, paramsOrData = {}, verb = "get") {
    
    let _token = localStorage.getItem("_token");

    console.debug("API Call:", endpoint, paramsOrData, verb);

    try {
      return (await axios({
        method: verb,
        url: `http://localhost:3001/${endpoint}`,
        [verb === "get" ? "params" : "data"]: paramsOrData
      })).data;
      // axios sends query string data via the "params" key,
      // and request body data via the "data" key,
      // so the key we need depends on the HTTP verb
    }

    catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  static async getCompanies(searchTerm = {}) {
    let res = await this.request(`companies`, searchTerm);
    return res.companies;
  }

  static async getJobs(searchTerm = {}) {
    let res = await this.request(`jobs`, searchTerm);
    return res.jobs;
  }

  static async login(data) {
    let res = await this.request(`login`, data, "post");
    return res.token;
  }
  
  static async getCurrentUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

}

export default JoblyApi;