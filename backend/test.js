const dns = require("dns");
const mongoose = require("mongoose");

dns.setDefaultResultOrder("ipv4first");

async function test() {
  try {
    await mongoose.connect(
      "mongodb+srv://sheshanths2911_db_user:ATMappli@cluster0.7eifzt0.mongodb.net/myDatabase?retryWrites=true&w=majority&appName=Cluster0"
    );

    console.log("Connected!");
    console.log(mongoose.connection.host);
  } catch (err) {
    console.error(err);
  }
}

test();