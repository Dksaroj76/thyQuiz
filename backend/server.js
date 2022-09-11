import { app } from "./app.js";
import { config } from 'dotenv';
import { connectDatabase } from './config/database.js'

config({
    path: 'backend/config/config.env'
})

connectDatabase();

app.listen(process.env.PORT, () => {
    console.log("Server is rnning on port : " + process.env.PORT);
});