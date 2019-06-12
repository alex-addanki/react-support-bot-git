const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.get('/', (req, res) => {
   res.send({'hello': 'Praise The Lord'})
});
app.use(bodyParser.json());

require('./routes/dialogFlowRoutes')(app);

//console.log('TESTER'+process.version)
const PORT = process.env.PORT || 5000;
app.listen(PORT);