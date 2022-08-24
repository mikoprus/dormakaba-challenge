export const swapi = (() => {
  var rootURL = "https://swapi.dev/api/";

  const request = (url, cb) => {
    return fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (typeof cb === "function") {
          cb(data);
        }

        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getResources = (cb) => {
    return request(rootURL, cb);
  };

  const getSchema = (resourceType, cb) => {
    return request(rootURL + resourceType + "/schema/", cb);
  };

  return {
    getResources: getResources,
    getSchema: getSchema,
  };
})();
