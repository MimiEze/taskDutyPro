import app from "./src/app.js"; //always add .js tothe end of your imported files
import connectToDb from "./src/config/mongoDb.js";

const PORT = process.env.PORT || 5000;

if ( !PORT || !process.env.MONGODB_URL) {
    throw new Error(
      "Please ensure there is a port number and MONGOGB_URL key provided"
    );
}

connectToDb()
.then(() => {
  startServer();
})
.catch((error)=>{
  console.error("Invalid Database connection" , error);
})
function startServer() {
  app.listen (PORT, (error) =>{
    if (error) {
      console.error("Cannot connect to server", error);
    } else {
      console.log(`server id connected to port ${PORT}`);
      }
  });
}