const express = require("express");
const carpoolRoutes = require("./routes/api/carpools");
const userRoutes = require("./routes/api/users");
const { sequelize } = require("./models");
const app = express();

app.use('/api', carpoolRoutes);
app.use('/api', userRoutes);


sequelize.sync({ force: true }).then(() => {
  const server = app.listen(9972, () => console.log(`Express running → PORT ${server.address().port}`));
});
