
let app = require('./app.js');
const PORT = process.env.PORT || 5001;
app.listen(PORT,function(){
    console.log("Servidor corriendo bien en puerto: " + PORT);
    
});


