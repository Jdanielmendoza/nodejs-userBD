const dbconnection = require ('../../config/dbconnection'); 
module.exports = app=>{
    const conn = dbconnection();
    app.get('/', (req,res) => {
            res.render('news/index.ejs');
    });

    app.get('/Add', (req,res) =>{
        res.render('news/add.ejs')
    })
    
    app.get('/Listview',(req,res) =>{
        conn.query('SELECT * FROM datouser', (err,result) =>{
            res.render('news/listView.ejs',{
                news: result
            })
        });
    })

    app.post('/added', (req,res) =>{
       // console.log(req.body); //aqui es donde entra body-parser y obtiene los datos del form por sus atrubutos name  
       const {nombre,telefono} = req.body; 
       conn.query('INSERT INTO datouser SET?',{
        nombre,
        telefono
       }, (err,result) =>{
        res.redirect('/');
       });
    })
}