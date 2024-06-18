const db= require('../Models');

exports.lista= (req,res)=> {
    console.log('');
    db.estudiante.findAll().then((result) => {
        res.status(200).send(result);
    }).catch(error => {
        res.status(500).send(error)
    });
};
exports.filtro=(req,res)=> {
    console.log('Procesamiento');
    const campo= req.params.campo;
    const valor= req.params.valor;

    console.log(`campo: ${campo} valor:${valor}`)

}
db.estudiante.findAll({where: {[campo]:valor}}).then(result=>{
    res.status(200).send(result);
    
}).catch(error=>{
    res.status(500).send(error);

})

exports.nuevoEstudiante = (req, res) => {
    console.log( req.body.nombre)

    const nEstudiante = {
        id: req.body.id,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        edad: req.body.edad,
        email: req.body.email,
    }
db.estudiante.estudiante(nEstudiante).then(result => {
    res.status(200).send ({
        data: result,
        estado: true
    });
})
};

exports.act = (req, res) => {
    const ID = req.params.ID

    console.log(req.body.ID)

    const dEstudiante = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        edad: req.body.edad,
        email: req.body.email,
    };
db.estudiante.update( dEstudiante , {
    where: {id : ID}
}).then(num => {
    if(num > 0){
        res.status(200).send({
            resultado: true,
            mensaje: 'Registro actualizado'
        })
    }else{
        res.status(500).send({
            resultado: false,
            mensaje: 'No se realizo la actualizacion',
            body : {
                    data: dEstudiante,
                    id : ID
            }
        })
    }
})
};

exports.eliminar = (req, res) => {
    const ID = req.params.ID;
    db.estudiante.destroy({
        where: {id:ID} 
    })
    .then(num=> {
        if(num >0){
            res.status(200).send
            {resultado: true} 
        }else {
            res.status(500).send({
                resultado: false,
                mensaje: 'No se pudo eliminar',
                body: {
                    data: dEstudiante,
                    id: ID
                }
            })
        }
    })
    .catch(error=> {
        console.log(error);
        res.status(500).send(
            {   resultado:false,
            mensaje: error
        }
        );
    });

}