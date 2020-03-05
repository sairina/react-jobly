import axios from 'axios';

class JoblyApi {
  static async request(endpoint, params = {}, verb = "get") {
    
    let _token = localStorage.getItem("_token");

    console.debug("API Call:", endpoint, params, verb);

    let q;

    if (verb === "get") {
      q = axios.get(
        `http://localhost:3001/${endpoint}`, { params: { _token, ...params } });
    } else if (verb === "post") {
      q = axios.post(
        `http://localhost:3001/${endpoint}`, { _token, ...params });
    } else if (verb === "patch") {
      q = axios.patch(
        `http://localhost:3001/${endpoint}`, { _token, ...params });
    }

    try {
      return (await q).data;
    // try {
    //   return (await axios({
    //     method: verb,
    //     url: `http://localhost:3001/${endpoint}`,
    //     [verb === "get" ? "params" : "data"]: paramsOrData
    //   })).data;
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

  static async register(data) {
    let res = await this.request(`users`, data, "post");
    return res.token;
  }
  
  static async getCurrentUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  static async updateUser(username, data) {
    let res = await this.request(`users/${username}`, data, "patch");
    return res.user;
  }

}

export default JoblyApi;