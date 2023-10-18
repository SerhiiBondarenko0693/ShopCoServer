const { MongoClient } = require('mongodb');
const config = require("./config");

const client = new MongoClient("mongodb+srv://serhiibondarenko1133:FnxWy1VkBO6ptMuF@shopco.1ov78et.mongodb.net/?retryWrites=true&w=majorityFnxWy1VkBO6ptMuF");

async function connect() {
    await client.connect();
    console.log('Connected to the database');
}

module.exports = { connect, client };