const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

//Setup Handlebars for express config
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../templates/views'));
hbs.registerPartials(path.join(__dirname, '../templates/partials'));

// Setup static directory to serve
app.use(express.static(path.join(__dirname, '../public')));


app.get('', (req, res) => {
    res.render('index', {
        titleSuffix: '- Home'
    });
});

app.get('/features', (req, res) => {
    res.render('features', {
        titleSuffix: '- Features'
    });
});

app.get('/changelogs', (req, res) => {
    res.render('changelogs', {
        titleSuffix: '- Changelogs'
    });
});

app.get('/download', (req, res) => {
    res.render('download', {
        titleSuffix: '- Download'
    });
});

app.get('*', (req, res) => {
    res.render('404', {
        titleSuffix: '- 404 to Nowhere'
    })
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running');
});