import express from "express";
import bodyParser from "body-parser";
import sql from "msnodesqlv8";

const app = express();
app.use(bodyParser.json());

const PORT = 3000;
const connectionString = "server=DSN1191109166;Database=carro;Trusted_Connection=yes;Driver={Sql Server Native Client 11.0}";

//leitura
app.get("/carros", (req,res)=>{
    sql.query(connectionString,"SELECT * FROM carros", (err, rows)=>{
        if(err){
            res.status(500).json("Internal error");
        } else{
            res.status(200).json(rows);
        }
    });
});

app.listen(PORT, () => console.log(`Server rodando na porta ${PORT}`));