const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

//Serve static files
app.use(express.static(path.resolve(__dirname,'filedirforclient')));

// Catch-all route
app.get('*', (req, res) => {
  res.sendStatus(404);
})

// Global error handler
app.use((err, req, res, next) => {
  console.log(err);
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(port, () => {
  console.log('server started on 3000');
});

module.exports = app;