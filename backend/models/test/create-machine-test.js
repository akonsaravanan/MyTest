//import the dependencies module
const mongoose = require("mongoose");

const machine = require("../schema/machine");

describe("MongoDB schema validation", () => {
  before(async () => {
    // tells mongoose to use ES6 implementation of promises
    mongoose.Promise = global.Promise;
    const MONGODB_URI = "mongodb://localhost:27017";
    mongoose.connect(MONGODB_URI);

    mongoose.connection
      .once("open", () => console.log("Connected!"))
      .on("error", (error) => {
        console.warn("Error : ", error);
      });
  });

  after(async()=>{
    mongoose.disconnect();
  })
  
  it("Creates a New Machine", (done) => {
    // -- Given : Mongoose with database
    const newMachine = { name: "coffee maker", type: "manual", status: "good" };

    // -- When : We add a new machine into the database
    machine.create(newMachine, (error, data) => {
      if (error) {
        return next(error);
      } else {

        // -- Then : Verify the response whether the value is added in the database or not
        done();
      }
    });
  });
});
