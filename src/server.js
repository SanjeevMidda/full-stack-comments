// IMPORTING EXPRESS MODULE
import express from "express";

// INITIALIZING EXPRESS WITHIN OUR APP
const app = express();

const updateNumbers = [
  {
    name: "cars",
    numbers: 5,
  },
];

// when server receives data from POST request to convert it into JSON, otherwise we won't be able to access the received data server-side.
app.use(express.json());

// ENDPOINTS
// requesting data from the server
app.get("/test", (req, res) => {
  res.send("Test");
});

// dynamic url using ":" & response based on this. '.params' gives us URL details.
app.get("/test/:name", (req, res) => {
  let nameReceived = req.params.name;
  res.send(`Welcome ${nameReceived}`);
});

// sending data to the server. '.body' allows us to access the data transferred in the body.
app.post("/test", (req, res) => {
  let receivedData = req.body;
  res.send(`You have sent the following information:
  ID: ${req.body.id}
  TITLE: ${req.body.title}
  DESCRIPTION: ${req.body.description}
  URL: ${req.body.URL}
  `);

  console.log(receivedData);
});

app.put("/test/:numbers", (req, res) => {
  let arrayName = req.params.numbers;
  let check = updateNumbers.find((a) => a.name === arrayName);

  if (check) {
    let newValue = (updateNumbers[0].numbers += 1);

    res.send(`${newValue} people have liked your comment`);
  } else {
    res.send("This value does not exist!");
  }
});

// PORT - port our server will listen for requests on
app.listen(8000, () => {
  console.log("Backend is up and running on PORT 8000");
});
