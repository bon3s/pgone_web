function sendRequest(url: string, options: RequestInit, timeout = 7000) {
  return Promise.race([
    fetch(url, options),
    new Promise((_, reject) =>
      setTimeout(
        () => reject(new Error("The connection was broken or timed out.")),
        timeout
      )
    )
  ]);
}

class REST {
  private hostUrl: string;
  private timeout: number;
  private token: string;
  private type: string;

  constructor(hostUrl: string, timeout: number, token: string, type: string) {
    this.hostUrl = hostUrl;
    this.timeout = timeout;
    this.token = token;
    this.type = type;
  }

  async getText(count: number, string: string): Promise<any> {
    const body = {
      count: count,
      string: string
    };

    const myHeaders = {
      "Content-Type": "application/json",
      type: this.type, //no-cors for no-cors flag on server
      "X-Auth-Token": this.token,
      "X-Requested-With": "XMLHttpRequest",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Headers":
        "Origin, Accept, X-Requested-With, Content-Type, X-Custom-Information, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Credentials",
      "Access-Control-Allow-Methods": "POST, GET, PUT, DELETE, OPTIONS, PATCH",
      "Access-Control-Allow-Origin": "http://localhost:3030/api"
    };

    const options: RequestInit = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(body)
    };
    try {
      const res = await sendRequest(this.hostUrl, options, this.timeout);
      const parsed = await (res as Response).json();
      console.log(parsed);
      return parsed.result;
    } catch (e) {
      console.log(e);
    }
  }
}

const service = new REST(
  "http://localhost:3030/api",
  30000,
  "marko1234",
  "cors"
);

export default service;
