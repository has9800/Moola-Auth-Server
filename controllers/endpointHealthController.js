const testEndpoint = async (req, res) => {
  const body = req.body;

  return res.status(200).send(body);
};

module.exports = { testEndpoint };
