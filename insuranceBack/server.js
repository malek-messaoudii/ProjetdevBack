const express =require("express");
require ('./config/connect');
const cors = require("cors");
const contratRouter =require('./Routes/contratRoutes');
const adminRouter =require ('./Routes/adminRoutes');
const userRouter =require ('./Routes/userRoutes');
const agentboutiqueRouter =require ('./Routes/agentboutiqueRoutes');
const agentreparationRouter =require ('./Routes/agentreparationRoutes');
const agentassuranceRouter =require ('./Routes/agentassuranceRoutes');
const clientRouter =require ('./Routes/clientRoutes');
const produitRouter=require('./Routes/produitRoutes');
const boutiqueRouter=require('./Routes/boutiqueRoutes');
const assurancecompanyRouter=require('./Routes/assurancecompanyRoutes');
const reparationcompanyRouter=require('./Routes/reparationcompanyRoutes');
const demandeassuranceRouter=require('./Routes/demandeassuranceRoutes');
const claimRouter=require ('./Routes/claimroutes');
const app =express();
app.use(cors({
  origin: 'http://localhost:3000' ,// Adjust as necessary
  optionsSuccessStatus: 200 ,
  credentials: true 

}));
app.use(express.json());

app.listen(4000,()=>{
    console.log('server work');
})
app.get('/', (req, res) => {
  res.json( 'Hello from server!' );
});
const PORT = process.env.PORT || 4000;

app.get('/message', (req, res) => {
  res.json({ message: 'Hello from server!' });
});


app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    try {
        const r = await axios.post(
            "https://api.chatengine.io/users/",
            { username: username, secret: username, first_name: username },
            { headers: { "Private-Key": "d51cba7c-6937-4fb9-8c25-0db57b09a505" } }
        );
        return res.status(r.status).json(r.data);
    } catch (error) {
        return res.status(error.response).json(error.response);
    }
});



 app.use('/contrat',contratRouter);
 app.use('/produit',produitRouter);
 app.use('/boutique',boutiqueRouter);
 app.use('/user', userRouter);
 app.use('/client', clientRouter);
 app.use('/admin', adminRouter);
 app.use('/agentboutique', agentboutiqueRouter);
 app.use('/agentreparation', agentreparationRouter);
 app.use('/agentassurance', agentassuranceRouter);
 app.use('/assurancecompany',assurancecompanyRouter);
 app.use('/reparationcompany',reparationcompanyRouter);
 app.use('/demandeassurance',demandeassuranceRouter);
 app.use('/claim', claimRouter);



