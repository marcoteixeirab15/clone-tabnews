function index(request, response) {
  response.status(200).json({ chave: "Texto show demais sobre api." });
}

export default index;
