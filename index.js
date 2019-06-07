const express = require('express');
const app = express();

app.get('/', (req, res) => {
   //res.send({'hi': 'There'})
   res.send({'hello': 'Praise The Lord'})
});

const PORT = process.env.PORT || 5000;
app.listen(PORT); 