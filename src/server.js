// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const morgan = require('morgan'); 

const authRoute = require('./routes/auth'); 
const nodeRoutes = require('./routes/nodeRoutes'); 
const networkRoutes = require('./routes/networkRoutes'); 
const contentRoutes = require('./routes/contentRoutes'); 

require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 8000;

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

app.use('/api/user', authRoute); 
app.use('/api/nodes', nodeRoutes); 
app.use('/api/networks', networkRoutes); 
app.use('/api/content', contentRoutes); 

app.get('/', (req, res) => {
    res.send('Hello, EveryNet!')
});

if (!process.env.JWT_SECRET) {
    const jwtSecret = crypto.randomBytes(64).toString('hex');
    fs.appendFileSync(path.resolve(__dirname, '.env'), `JWT_SECRET=${jwtSecret}\n`);
    console.log(`JWT_SECRET generated: ${jwtSecret}`);
}

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}`);
});
