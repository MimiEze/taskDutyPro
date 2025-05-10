import mongoose from "mongoose"

let connection = {};

const connectOptions = {
    dbName: "Notes",
    serverSelectionTimeoutMS: 10000, //Timeout after 10asecs
    SocketTimeoutMS: 45000, //close sockets after 45s of inactivity
    family: 4, //use IPV4 protocol, instead of IPV6
  };

const connectToDb = async() => {
if (connection.isConnected) {
  console.log("Already connected to the database");
  return;
  
}
//establish connection to db
try {
  const res = await mongoose.connect(process.env.MONGODB_URL, connectOptions);
  connection.isConnected = res.connections[0].readyState === 1;
  if (connection.isConnected) {
    console.log("MongoDb connected successfully");  
  
  //hamdle some connection evens
  mongoose.connection.on("error", (err) => {
    console.log("MongoDb connection error", err); 
  });
  mongoose.connection.on("disconnected", (err) =>{
    console.log("MongoDb disconnected", err); 
    connection.isConnected = false;
  });
  process.on("SIGNIT", async () => {
    await mongoose.connection.close();
    console.log("Mongodb conection closed through app termination");
    process.exit(0);
  });
}
} catch (error) {
  console.error("Mongodb connection error", error);
  connection.isConnected = false;
  throw Error(`Failed to connect to MongoDb: ${error.message}`);
}
};

 export default connectToDb