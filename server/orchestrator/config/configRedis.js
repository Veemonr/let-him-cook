const Redis = require("ioredis")
const redis = new Redis(process.env.REDIS_SERVER_URL)

module.exports = redis