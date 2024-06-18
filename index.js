const express= require ('express');
const app= express();
const port= require('./Config/env').PORT || 3000;



//formato json
app.use(express.json());

const db= require ('./Models');

//rutas
require('./Routes/index.routes');


//conecta con nuestra base
db.sequelize.sync().then(()=> {
    console.log('Conexion exitosa');
});

app.listen(port,()=>{
    console.log(`Servidor corriendo en puerto ${port}`)
});
