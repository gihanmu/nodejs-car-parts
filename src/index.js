const express = require('express');
require('./db/mongoose');
const log = console.log;
const userRouter = require('./routers/user');
const partRouter = require('./routers/part');
const port = process.env.PORT;

const app = express();
app.use(express.json());

app.use(userRouter);
app.use(partRouter);


app.listen(port, () => {
    log(`Listning on port ${port}`);
})