import database from "../../../../infra/database.js";

async function index(request, response) {
  const result = await database.query("SELECT 1 + 1 as sum;");
  console.log(result.rows);
  response.status(200).json({ chave: "Texto show demais sobre api." });
}

export default index;
