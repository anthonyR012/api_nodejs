const config = require('../config');


//router
const {user_api} = require('./routes/routers');
config.api.app.use('/api',user_api);


//starting the server
config.api.app.listen(config.api.port, ()=>{
    console.log('listening on port '+config.api.port);
});