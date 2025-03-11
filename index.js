const exp = require('express');
require('dotenv').config()
const enrutamiento = require('./routes/router')

const app = exp();

app.use(exp.urlencoded({extended:false}));
app.use(exp.json());

app.use('/v1', enrutamiento);

app.set('view engine','ejs')



//callback 
app.listen(process.env.PORT, ()=>{
    console.log('servidor en '+process.env.PORT)
});
