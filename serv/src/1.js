const express = require("express");
const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json()); 
app.post("/adduser", async (req, res) => {
    try {
        res.json({ message: "success post" });
        const input = req.body; // before doing this
        await addRecord(input);
        
         } catch (err) {
        res.json({ message: "failure post" });
    }
});
app.post("/login", async (req, res) => {
    try {
        
        const input = req.body; // before doing this
        await login22(input);
        res.json({ message: "success post" });
    } catch (err) {
        res.json({ message: "failure post" });
    }
});
app.post("/addpakage", async (req, res) => {
    try {
        
        const input = req.body; // before doing this
        await addpakage22(input);
        res.json({ message: "success post" });
    } catch (err) {
        res.json({ message: "failure post" });
    }
});
app.get("/displaypakage", async (req, res) => {
    try {

       // const input = req.body; // before doing this
     let qout =   await displaypaka();
        res.json(qout);
    } catch (err) {
        res.json({ message: "failure post" });
    }
});
app.post("/rpakage", async (req, res) => {
    try {

        const input = req.body; // before doing this
        await removepp(input);
        res.json({ message: "success post" });
    } catch (err) {
        res.json({ message: "failure post" });
    }
});
app.post("/update", async (req, res) => {
    try {

        const input = req.body; // before doing this
        await update11(input);
        res.json({ message: "success post" });
    } catch (err) {
        res.json({ message: "failure post" });
    }
});
app.post("/userlogin", async (req, res) => {
    try {

        const input = req.body; // before doing this
        await login23(input);
        res.json({ message: "success post" });
    } catch (err) {
        res.json({ message: "failure post" });
    }
});
app.post("/addpakage", async (req, res) => {
    try {

        const input = req.body; // before doing this
        await addpak(input);
        res.json({ message: "success post" });
    } catch (err) {
        res.json({ message: "failure post" });
    }
});
const DB_CONFIG = {
    host: "localhost",
    user: "root",
    password: "",
    database: "dummyproject",
};

let addRecord = async (data) => {
    const connection = mysql.createConnection(DB_CONFIG);
    await connection.connectAsync();

    
    let sql ="INSERT INTO usertable VALUES (?, ?, ?, ?)";
    let operation = await connection.queryAsync(sql, [data.username, data.email, data.mobile, data.password]);

    await connection.endAsync();
    return operation;
};

let login22 = async (data) => {
    const connection = mysql.createConnection(DB_CONFIG);
    await connection.connectAsync();


    let sql = "select * from adduser where username = ? and password = ? ";
    let operation = await connection.queryAsync(sql, [data.username, data.password]);
     if (operation.length === 0){
         throw new Error("invaalid user");
     }
    await connection.endAsync();
    return operation;
};
let login23 = async (data) => {
    const connection = mysql.createConnection(DB_CONFIG);
    await connection.connectAsync();


    let sql = "select * from usertable where username = ? and password = ? ";
    let operation = await connection.queryAsync(sql, [data.username, data.password]);
    if (operation.length === 0) {
        throw new Error("invaalid user");
    }
    await connection.endAsync();
    return operation;
};


let addpakage22 = async (data) => {
    const connection = mysql.createConnection(DB_CONFIG);
    await connection.connectAsync();


    let sql = "INSERT INTO gympakage  VALUES (?, ?, ?,?,?)";
     await connection.queryAsync(sql, [data.PakageName,data.Duraction, data.PakagePrice, data.PakageFacelities
    ,data.Pakageid]);
    
    await connection.endAsync();
    
};
let displaypaka = async ()=>{
    const connection = mysql.createConnection(DB_CONFIG);
    await connection.connectAsync();


    let sql = "select * from gympakage";
   let resultssss = await connection.queryAsync(sql);

    await connection.endAsync();
return resultssss;
};
let removepp = async (data1) => {
    const connection = mysql.createConnection(DB_CONFIG);
    await connection.connectAsync();


    let sql = "DELETE FROM gympakage WHERE pakageid = ?;"
    let resultssss = await connection.queryAsync(sql,[data1.id]);
if(resultssss.affectedRows === 0) {
    throw Error(err);
}    
    await connection.endAsync();
    
};

let update11 = async (data) => {
    const connection = mysql.createConnection(DB_CONFIG);
    await connection.connectAsync();


    let sql = "UPDATE gympakage SET Pakage_Name = ? , pakage_duraction = ?, Pakage_Price = ?,Pakage_Facelities = ? WHERE pakageid = ?";
    let resultssss1 =    await connection.queryAsync(sql, [data.PakageName,data.Duraction,data.PakagePrice,data.PakageFacelities,data.Pakageid]);
    if (resultssss1.affectedRows === 0) {
        throw Error(err);
    }
    await connection.endAsync();

};

let addpak = async (data1) => {
    const connection = mysql.createConnection(DB_CONFIG);
    await connection.connectAsync();


    let sql = "insert into "
    let resultssss = await connection.queryAsync(sql,[data1.id]);
if(resultssss.affectedRows === 0) {
    throw Error(err);
}    
    await connection.endAsync();
    
};

app.listen(3000);

