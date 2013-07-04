var express = require('express'),
    app = express(),
    mysql = require('mysql'),
    
    connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'labstruts5_05'
    })

app.configure(function(){

   app.use(express.bodyParser());
   app.set('views',__dirname + '/views');
   app.set('view engine', 'ejs');
   app.use(express.static(__dirname + '/public'));
   app.use(express.cookieParser());
   app.use(app.router);

});

app.get('/', function (req, res)
{
    res.render('index.ejs');
});

app.post('/recup', function (req, res)
{
    var data = req.body.valeur;
    var resultat = [];

    if(data != '')
    {

        var requete = "Select identifiant from utilisateur where identifiant like '" + data + "%'";

        connection.query(requete, function (err, result, fields)
        {
            if (err)
            {
                console.log(err);
            }
       
            for (var i in result)
            {
                resultat.push(result[i].identifiant);
            }
            console.log(resultat);
            res.send(resultat);
        });
    } else 
    {
        res.send(resultat);
    }
});

app.listen(process.env.PORT || 8081);