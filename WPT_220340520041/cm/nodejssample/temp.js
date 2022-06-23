
const express = require('express');
const app = express();
const mysql=require('mysql2');
app.use(express.static('abc'));

let dataobj={
	host: 'localhost',
    user: 'jagruti',
    password: 'cdac',
    database: 'jagruti',
	port:3306
};

const con=mysql.createConnection(dataobj);

app.get('/add',(req,resp)=>{
	let data={status:false,details:[]}

	let bookid=req.query.bookid;
	let bookname=req.query.bookname;
	let price=req.query.price;
	console.log(bookid);
	console.log(bookname);
	console.log(price);

	con.query('insert into book (bookid,bookname,price)values(?,?,?)',[bookid,bookname,price],(err,ret)=>{
			if(err){
				console.log("not inserted");
			}
			else{
				if(ret.affectedRows>0){
					console.log("sucessfully inserted");
					//book.status==true;
				}
			}
			resp.send(data);
	});

});

app.listen(100,function(){
    console.log("server listening at port 100...");
});



