const port = 8011;
const express=require('express');     
const app= express();
const expressLayouts = require('express-ejs-layouts');
app.use(express.static('assets'));

// setup view engin
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(expressLayouts);
app.use('/', require('./routes'));

// app.set('layout extractStyles', true);
// app.set('layout extractScripts', true);
app.listen(port, function(err) {
    if (err) {
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port} `);
})