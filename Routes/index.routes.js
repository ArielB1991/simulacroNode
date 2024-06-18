module.exports = (app) => {
    const estudianteRoutes = require('estudiante.routes')


    app.use('./estudiante' , estudianteRoutes)
}