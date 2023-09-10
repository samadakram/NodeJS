// Dev Dependency: wo hoti jo sirf project development me help krti hai lekin code k sath nahi hoo rhi hoti.
// Depencdecy: wo hoti hein jo project me hmry code k sath run hoo rahi hoti hain.

// Express
// It works on middleware behaviour

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const form = require('./routes/form');

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json()); // for json data 
app.use(express.static(path.join(process.cwd(), "public")));

app.use((req, res, next) => {
    req.data = "Samad"
    next();
});

app.use("/form", form);

// app.use((req, res, next) => {
//     res.send(req.data);
// }); // middleware and the function in it is middleware function.


app.listen(4000);
