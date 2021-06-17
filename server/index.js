const mongoose = require('mongoose');
const app = require('./app');
const {API_VERSION, IP_SERVER, PORT_DB} = require('./config');


const PORT = process.env.PORT || 4000;


mongoose.connect(`mongodb://${IP_SERVER}:${PORT_DB}/tapv`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false
}, (err, res) => {
    if (err) {
        throw err
    }

    console.log(`database is connect`);
    app.listen(PORT, () => {
        console.log(`server running on ${PORT}`)
        console.log(`api version ${API_VERSION}`)
    })
})
