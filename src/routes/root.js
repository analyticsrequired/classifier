export default server => {
  server.get(`/`, (_, res) => {
    res.send("Analytics Required Classifier Service");
  });
};
