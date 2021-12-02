const express = require('express');
const path = require('path');

const app = express();
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '\\index.html'));
})

router.get('/home.html', (req, res) => {
    res.sendFile(path.join(__dirname + '\\home.html'));
})

router.get('/cart.html', (req, res) => {
    res.sendFile(path.join(__dirname + '\\cart.html'));
})

router.get('/categories.html', (req, res) => {
    res.sendFile(path.join(__dirname + '\\categories.html'));
})

router.get('/category-info.html', (req, res) => {
    res.sendFile(path.join(__dirname + '\\category-info.html'));
})

router.get('/my-profile.html', (req, res) => {
    res.sendFile(path.join(__dirname + '\\my-profile.html'));
})

router.get('/product-info.html', (req, res) => {
    res.sendFile(path.join(__dirname + '\\product-info.html'));
})

router.get('/products.html', (req, res) => {
    res.sendFile(path.join(__dirname + '\\products.html'));
})

router.get('/sell.html', (req, res) => {
    res.sendFile(path.join(__dirname + '\\sell.html'));
})

app.use(express.static('public'))
app.use("/css", express.static(path.join(__dirname, "\\node_modules\\bootstrap\\dist\\css")));
app.use("/js", express.static(path.join(__dirname, "\\node_modules\\bootstrap\\dist\\js")))
app.use("/js", express.static(path.join(__dirname, "\\node_modules\\bootstrap\\dist")))




app.use('/', router)
app.listen(8080);
console.log('Server is running in 8080')