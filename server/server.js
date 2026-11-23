let express=require('express');
let app=express();
let userrRouter=require('../routes/users.route')
app.use('/users',userrRouter);
app.listen(3000)