const express    = require("express")
const app        = express()
const bodyParser = require('body-parser')
const cors       = require('cors')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(bodyParser.raw())

/************************************************************************
 *  BASE DE DATOS EMULADA MEDIANTE ARREGLO DE OBJETOS ORDENES, CLIENTES, ESTADOS, OFICINAS, PRODUCTOS
 ************************************************************************/
class Orden {
    constructor(num_orden, cliente, monto, cant_productos, fecha_entrega, avance_preparacion, estado) {
        this.num_orden = num_orden
        this.cliente    = cliente
        this.monto = monto
        this.cant_productos = cant_productos
        this.fecha_entrega = fecha_entrega
        this.avance_preparacion = avance_preparacion
        this.estado = estado
    }
}

var ordenes = [
    new Orden(123445,'Multitiendas Sigma SA', 1540000, 160, '2020-07-20T00:00:00.000Z', 0, 'Ingresado'),
    new Orden(123444,'Jugueteria Asimov SpA', 980000, 45, '2020-07-20T00:00:00.000Z', 0.4, 'Preparacion'),
    new Orden(123443,'Bazar Don Lalo LDTA', 2400000, 120, '2020-07-18T00:00:00.000Z', 0.6, 'Preparacion'),
    new Orden(123441,'Claudia Ingrid Romero', 1740000, 70, '2020-07-14T00:00:00.000Z', 1, 'Entregado')
    
]
/************************************************************************
 *  MÉTODOS QUE MANEJAN PETICIONES HTTP GET, POST, PUT y DELETE
 ************************************************************************/
app.get('/', function (req, res) {
    // console.log(req)
    // console.log(req.query.objeto)
    console.log('[HTTP GET] CLIENTES')
    /* let objeto = []
    switch (req.query.objeto) {
        case 'ordenes':
            objeto = ordenes
            break;
    
        default:
            break;
    }*/
    res.send(ordenes)
})

app.get('/ordenes', function (req, res) {
    console.log('[HTTP GET] ORDENES')
    res.send(ordenes)
})
/*
app.post('/', function(req, res) {
    console.log('[HTTP POST] CLIENTE', req.body)
    ordenes.push(req.body)
    console.log('[HTTP POST] CLIENTE AGREGADO')
    res.status(200).send('OK')
})

app.delete('/:num_orden', function(req, res) {
    console.log('[HTTP DELETE] CLIENTE', req.params.num_orden)
    let index = ordenes.findIndex( cli => cli.num_orden == req.params.num_orden)
    if(index != -1) {
        ordenes.splice(index, 1)
        console.log('   [DELETED] CLIENTE ' + req.params.num_orden)
        res.status(200).send('OK')
    } else {
        console.error(' [NOT DELETED] CLIENTE ' + req.params.num_orden)
        res.status(200).send('NOK')
    }
})

app.put('/', function(req, res) {
    console.log('[HTTP PUT] CLIENTE', req.body)
    let index = ordenes.findIndex( cli => cli.num_orden == req.body.num_orden)
    if(index != -1) {
        ordenes[index] = req.body
        console.log('   [HTTP PUT] CLIENTE MODIFICADO')
        res.status(200).send('OK')
    } else {
        console.error(' [HTTP PUT] CLIENTE NO EXISTE')
        res.status(200).send('NOK')
    }
})
*/
/************************************************************************
 *  SE LEVANTA EL SERVIDOR
 ************************************************************************/
app.listen(3911, () => {
    console.log("SERVIDOR localhost UP PUERTO 3911")
})
