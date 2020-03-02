const { Router } = require('express');

const router = Router();

router.get('/index', (req, res) => {
    res.render('index', {
        title: 'Main'
    });
});

router.get('/nosotros', (req, res) => {
    res.render('about', {
        title: 'Nosotros'
    });
});

router.get('/contacto', (req, res) => {
    res.render('contact', {
        title: 'Contacto'
    });
});

router.get('/noticias', (req, res) => {
    res.render('news', {
        title: 'Noticias'
    });
});

module.exports = router;