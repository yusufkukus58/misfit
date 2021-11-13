const express=require('express');
const mongoose=require('mongoose')
const Training=require('./models/Training')
const pageRoute=require('./routes/pageRoute')
const trainingRoute=require('./routes/trainingRoute')

const app=express();
mongoose.connect('mongodb://localhost/misfitpatika-db').then(() => {

    console.log('DB Connected Successfully');
  })
  .catch((err) => {
    console.log(err);
  });;
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded



app.use('/',pageRoute);
app.use('/trainings',trainingRoute);

const port=5000;
app.listen(port,() => {
    console.log(`Server Başlatıldı.. ${port}`)
});