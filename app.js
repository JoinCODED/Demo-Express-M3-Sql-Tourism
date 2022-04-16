const express = require('express');
const app = express();
const monumentsRoutes = require('./api/monuments/monuments.routes');
const db = require('./db/models');

const run = async () => {
  try {
    await db.sequelize.sync();
    console.log('Connection to the database successful!');
    await app.listen(8000, () => {
      console.log('The application is running on localhost:8000');
    });
  } catch (error) {
    console.error('Error connecting to the database: ', error);
  }
};
run();
app.use(express.json());
app.use('/monuments', monumentsRoutes);
app.use((req, res, next) => {
  res.status(404).json({ message: 'Path not found' });
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message || 'Internal Server Error',
  });
});
