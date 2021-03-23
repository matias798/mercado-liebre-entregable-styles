var express = require('express');
var router = express.Router();

let productos = [
  {
    imagenes:'cafetera.jpg',
    titulo :'Cafetera Moulinex',
    precio:'$6.770',
    descuento:'40% OFF'
},

{
  imagenes:'macbook.jpg',
  titulo :'Macbook Pro',
  precio:'$230.000',
  descuento:'20% OFF'
},
  
{
  imagenes:'telefono.jpg',
  titulo :'Teléfono móvil Samsung Galaxy S10',
  precio:'$70.500',
  descuento:'15% OFF'
},
{
  imagenes:'tv.jpg',
  titulo :'SmartTv Samsung 43',
  precio:'$34.000',
  descuento:'5% OFF'
}
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{productos});
});

module.exports = router;
