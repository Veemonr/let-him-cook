const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = process.env.MONGODB_URL

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let db = {};

async function connect() {
  try {
    await client.connect();

    db = await client.db("LetHimCook");
    return db;
  } catch (err) {
    console.log(err);
    throw "Connenct To MongoDb Fail";
  }
}

function getDb() {
  return db;
}

module.exports = { getDb, connect };
