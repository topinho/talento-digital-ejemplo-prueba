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
        this.cliente = cliente
        this.monto = monto
        this.cant_productos = cant_productos
        this.fecha_entrega = fecha_entrega
        this.avance_preparacion = avance_preparacion
        this.estado = estado
    }
}
/*
var ordenes = [
    new Orden(123445,'Multitiendas Sigma SA', 1540000, 160, '2020-07-20T00:00:00.000Z', 0, 'Ingresado'),
    new Orden(123444,'Jugueteria Asimov SpA', 980000, 45, '2020-07-20T00:00:00.000Z', 0.4, 'Preparacion'),
    new Orden(123443,'Bazar Don Lalo LDTA', 2400000, 120, '2020-07-18T00:00:00.000Z', 0.6, 'Preparacion'),
    new Orden(123456,'Luis Fuentes', 1740000, 160, '2020-07-20T00:00:00.000Z', 0.6, 'Preparacion'),
    new Orden(123441,'Claudia Ingrid Romero', 1740000, 70, '2020-07-14T00:00:00.000Z', 1, 'Entregado')   
]
*/
var ordenes = [
    {
        "num_orden": 123445,
        "cliente": "Multitiendas Sigma SA",
        "monto": 1540000,
        "cant_productos": 160,
        "fecha_entrega": "2020-07-20T00:00:00.000Z",
        "avance_preparacion": 0,
        "estado": "Ingresado"
      },
      {
        "num_orden": 123444,
        "cliente": "Jugueteria Asimov SpA",
        "monto": 980000,
        "cant_productos": 45,
        "fecha_entrega": "2020-07-20T00:00:00.000Z",
        "avance_preparacion": 0.4,
        "estado": "Preparacion"
      },
      {
        "num_orden": 123443,
        "cliente": "Bazar Don Lalo LDTA",
        "monto": 2400000,
        "cant_productos": 120,
        "fecha_entrega": "2020-07-18T00:00:00.000Z",
        "avance_preparacion": 0.6,
        "estado": "Preparacion"
      },
      {
        "num_orden": 123441,
        "cliente": "Claudia Ingrid Romero",
        "monto": 1740000,
        "cant_productos": 70,
        "fecha_entrega": "2020-07-14T00:00:00.000Z",
        "avance_preparacion": 1,
        "estado": "Entregado"
      }
]

class Cliente {
    constructor(nombre, rut_n, rut_dv, direccion_entrega, contacto, fono, email) {
        this.nombre = nombre
        this.rut_n  = rut_n
        this.rut_dv = rut_dv
        this.direccion_entrega = direccion_entrega
        this.contacto = contacto
        this.fono = fono
        this.email = email
    }
}

var cliente = [
    new Cliente('Sociedad Comercial AYSA SA', 82340250, '2', 'Meiggs 123 Loc 1', 'Manuel Morales', '+56 22 234 4434', 'mmorales@aysa.cl')
]

class Productos {
    constructor(cod_prod, descripcion, precio_unit, cant_pedido, cant_pickeado) {
        this.cod_prod = cod_prod
        this.descripcion = descripcion
        this.precio_unit = precio_unit
        this.cant_pedido = cant_pedido
        this.cant_pickeado = cant_pickeado
    }
}

var productos  = [
    new Productos('123', '1969 Harley Davidson Ultimate Chopper', 1540, 160, 0),
    new Productos('234', '1968 Ford Mustang', 980, 45, 10),
    new Productos('126', '1917 Grand Touring Sedan', 2400, 120, 80),
    new Productos('241', '1957 Corvette Convertible', 1740, 70, 70)
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

app.get('/orden', function (req, res) {
    console.log('[HTTP GET] ORDEN')
    respuesta = {
        orden: ordenes[3],
        cliente: cliente[0],
        productos: productos
    }
    res.send(respuesta)
})

app.get('/clientes', function (req, res) {
    console.log('[HTTP GET] clientes')
    res.send(cliente)
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
