let http = {
  get: get
};

function get(url){
  return fetch(url)
  .then(resp => {
    return resp.json()
  });
}

export default http;
