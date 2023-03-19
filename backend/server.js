const express = require('express')
const app = express();
const User = require("./model/User");
const clb  = require("./model/Joinn");
const clubmsg = require("./model/cmsg");
const Msg = require("./model/contamsg");
const Admin = require("./model/admin");
const Add = require("./model/add");
const cors = require("cors")
const stringify =require('flatted')
const bodyParser = require('body-parser');

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(cors());

app.get('/login', cors(), (req, res) => {})
app.get('/register', cors(), (req, res) => {})
app.get('/join', cors(), function(req, res) {});
app.get('/message', cors(), function(req, res) {});
app.get('/contact', cors(), function(req, res) {});
app.get('/signupad', cors(), function(req, res) {});
app.get('/loginad', cors(), function(req, res) {});
app.get('/add', cors(), function(req, res) {});






//sign up method 
app.post("/register",(req,res)=>{ 
    const {firstname,lastname,phonenumber,email,password,retypepassword,school,Interests,interest_Musique,interest_sport,interest_photographie,interest_bénévolat,interest_programmation,motivation,cb1} =req.body; 
    console.log(req.body)
    const A = /^[a-zA-Z0-9+_.-]+@+gmail.com+$/;
    if (A.test(email)) {
    User.findOne({email:email},(err,user)=>{
        console.log(user)
        if(user)
        { res.json({message:"user already exist"}) 
    }else 
    { 
        const newUser = new User({
       
            firstname: firstname,
            lastname: lastname,
            phonenumber:phonenumber,
            email:email,
            password: password,
            retypepassword :retypepassword,
            school:  school,
           
            interest_Musique: interest_Musique ,
            interest_sport:interest_sport ,
            interest_photographie: interest_photographie ,
            interest_bénévolat: interest_bénévolat ,
            interest_programmation:interest_programmation ,
            motivation: motivation,
            cb1:cb1
            
         });
       
    console.log(newUser)
    newUser.save(err=>{
            if(err){
                 res.json(err.message) 
                }else { 
                    res.json({message:"sucessfull"})
                }
            })
        }
    })
}else {
    res.json('adress email invalid ');


}
})
//login post method 
app.post("/login",(req,res)=>{
    const {email,password} =req.body;
    
    User.findOne({email:email},(err,user)=>{
        if(user){
            if(password === user.password){
                res.json("sucess")
            }else{
                 res.send({message:"wrong credentials"})
                  }
                 }else{
                     res.send("not register")
                    }

                 })
                });

                 // join post method 
                 app.post("/join",(req,res)=>{ 
                    const {firstname2,lastname2,email2,CLUB,LIONS,AIKIDOU,PHOTOGRAPHIE,GAMING,DIGIClub,ECHECS,PICTURE,KICKBOXING,LECTURE,why,Date,cb} =req.body; 
                    console.log(req.body)
                    clb.findOne({email2:email2},(err,join1)=>{
                       console.log(join1)
                       if(join1)
                       { res.send({message:"membre already exist"}) 
                   }else {    
                       const newclb= new clb({
                           firstname2:firstname2,
                           lastname2:lastname2,
                           email2:email2,
                           CLUB:CLUB,
                           LIONS:LIONS,
                           AIKIDOU:AIKIDOU,
                           PHOTOGRAPHIE:PHOTOGRAPHIE,
                            GAMING:GAMING,
                           DIGIClub: DIGIClub,
                           ECHECS:ECHECS,
                           PICTURE:PICTURE,
                           KICKBOXING :KICKBOXING,
                           LECTURE:LECTURE,
                           why:why,
                           Date:Date,
                           cb:cb
                       });
                       newclb.save(err=>{
                           if(err){
                                res.send(err.message) 
                               }else{ 
                                   res.send({message:"sucessfull"})
                                }
                               })
                           }
                       })
                   });


 //club msg post method
 app.post("/message",(req,res)=>{ 
    const {firstname1,lastname1,school1,subject1} =req.body; 
console.log(req.body)
clubmsg.findOne({firstname1:firstname1,lastname1:lastname1},(err,message)=>{
console.log(message)
if(message)
{ res.send({message:"msg already send"}) 
}else 
{ 

const newclubmsg= new clubmsg({
firstname1:firstname1,
lastname1:lastname1,
school1:school1,
subject1:subject1

});
newclubmsg.save(err=>{
if(err){
 res.send(err.message) 
}else{ 
    res.send({message:"sucessfull"})
}
})
}
})
});

 //contact post method
 app.post("/contact",(req,res)=>{ 
    const {name,email3,subject,message3} =req.body; 
console.log(req.body)
Msg.findOne({email3:email3},(err,msg)=>{
console.log(msg)
if(msg)
{ res.send({message:"msg already send"}) 
}else 
{ 
const newMsg = new Msg({
name:name,
email3:email3,
subject:subject,
message3:message3
});
newMsg.save(err=>{
if(err){
     res.send(err.message) 
    }else{ 
        res.send({message:"sucessfull"})
    }
})
}
}) 
});



//signupad post method
app.post("/signupad",(req,res)=>{ 
    const {firstname4,lastname4,phonenumber4,email4,password4,  retypepassword4 ,cb2} =req.body; 
     console.log(req.body)
     const re = /^[a-zA-Z0-9+_.-]+@+admin.com+$/;
     if (re.test(email4)) {
     Admin.findOne({email4:email4},(err,admin)=>{
            console.log(admin)
            if(admin)
            {
                 res.send({message:"admin already exist"}) 
        }else 
        { 
            const newAdmin = new Admin({
                firstname4: firstname4,
                lastname4: lastname4,
                phonenumber4:phonenumber4,
                email4:email4,
                password4: password4,
                retypepassword4 :retypepassword4,
                cb2:cb2
                
             });
           
        console.log(newAdmin)
        newAdmin.save(err=>{
                if(err){
                     res.send(err.message) 
                    }else{ 
                        res.send({message:"sucessfull"})
                    }
                    
                })
            }
        })
    }else {
            res.send('you are not admin ');
    
    
        }
        })




  //loginad post method 
  app.post("/loginad",(req,res)=>{

    const {email4,password4} =req.body;
    Admin.findOne({email4:email4},(err,admin)=>{
        if(admin){
            if(password4 === admin.password4){
                res.json("affichage")
            }else{
                 res.send({message:"wrong credentials"})
                  }
                 }else{
                     res.send("not register")
                    }
                 })
                })       


 //add new post method
 app.post("/add",(req,res)=>{ 
    const {name,president,Description, myfile,} =req.body; 
    console.log(req.body)
    Add.findOne({name:name},(err,add)=>{
        console.log(add)
        if(add)
        { res.send({message:"club already exist"}) 
    }else 
    { 
        const newAdd = new Add({
            name: name,
            president: president,
            Description:Description,
            myfile:myfile
           
            
         });
       
    console.log(newAdd)
    newAdd.save(err=>{
            if(err){
                 res.send(err.message) 
                }else { 
                    res.send({message:"sucessfull"})
                }
            })
        }
    })
}) 

//afficher membertable
app.get('/memberstable', async(req, res) => {
    const p1 = await User.find()
   res.json(p1)
})
//delete user
app.delete('/delete/User/:id', async(req, res) => {

    try {
        const deleteduser = await User.deleteOne({ _id: req.params.id });
        res.status(200).json(deleteduser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

})
//edit user
app.patch('/edituser/:id', async(req, res) => {

    try {
        const updateduser = await User.updateOne({ _id: req.params.id }, { $set: req.body });
        res.status(200).json(updateduser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

//afficher msgmembertable
app.get('/msgmembertable', async(req, res) => {
    const p2 = await Msg.find()
   res.json(p2)
})
//delete msgmember
app.delete('/delete/msgmember/:id', async(req, res) => {

    try {
        const deletedmsgmember = await Msg.deleteOne({ _id: req.params.id });
        res.status(200).json(deletedmsgmember);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

})
//edit msg member

app.patch('/editcontact/:id', async(req, res) => {

    try {
        const updateduser = await Msg.updateOne({ _id: req.params.id }, { $set: req.body });
        res.status(200).json(updateduser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})


//afficher clubmembertable
app.get('/jointable', async(req, res) => {
    const p2 = await clb.find()
   res.json(p2)
})
//delete clubmembertable
app.delete('/delete/Userclub/:id', async(req, res) => {

    try {
        const deletedmsgmember = await  clb.deleteOne({ _id: req.params.id });
        res.status(200).json(deletedmsgmember);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

})
//edit clubmembertable 

app.patch('/editjoin/:id', async(req, res) => {

    try {
        const updateduser = await  clb.updateOne({ _id: req.params.id }, { $set: req.body });
        res.status(200).json(updateduser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

//afficher admintable
app.get('/adminstable', async(req, res) => {
    const p2 = await Admin.find()
   res.json(p2)
})
//delete admintable
app.delete('/delete/admin/:id', async(req, res) => {

    try {
        const deletedmsgmember = await  Admin.deleteOne({ _id: req.params.id });
        res.status(200).json(deletedmsgmember);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

})
//edit admintable

app.patch('/editadmin/:id', async(req, res) => {

    try {
        const updateduser = await  Admin.updateOne({ _id: req.params.id }, { $set: req.body });
        res.status(200).json(updateduser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})


//afficher clubmsg table
app.get('/clubmsgtable', async(req, res) => {
    const p2 = await clubmsg.find()
   res.json(p2)
})
//delete clubmsg table
app.delete('/delete/clubmsg/:id', async(req, res) => {

    try {
        const deletedmsgmember = await  clubmsg.deleteOne({ _id: req.params.id });
        res.status(200).json(deletedmsgmember);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

})
//edit clubmsg table

app.patch('/editclubmsg/:id', async(req, res) => {

    try {
        const updateduser = await  clubmsg.updateOne({ _id: req.params.id }, { $set: req.body });
        res.status(200).json(updateduser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

//afficher addclub table
app.get('/addclubtable', async(req, res) => {
    const p2 = await Add.find()
   res.json(p2)
})
//delete addclub table
app.delete('/delete/club/:id', async(req, res) => {

    try {
        const deletedmsgmember = await  Add.deleteOne({ _id: req.params.id });
        res.status(200).json(deletedmsgmember);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

})
//edit addclub table

app.patch('/editadd/:id', async(req, res) => {

    try {
        const updateduser = await  Add.updateOne({ _id: req.params.id }, { $set: req.body });
        res.status(200).json(updateduser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})









app.listen(5000, () => {
    console.log("Server started and running on port 5000")
})