
import connectToDatabase  from "./helper/dbConnect";
import theBroker from "./broker/broker";


theBroker.start().then(() => {
  console.log("Broker is ready");
});

theBroker.loadService(__dirname + "/service/service");

theBroker.start().then(async () => {
  console.log("Started");
 await connectToDatabase();

  // const result: any = await theBroker.call("blog.list");
  // console.log("Result : ", result);
});
