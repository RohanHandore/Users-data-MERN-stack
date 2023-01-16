import mongoose from 'mongoose';


const user = process.env.USER || "admin";
const password = process.env.PASS || "7CpGZ826n5qUXRtj";



export const conn = async (port) => {
    mongoose.set('strictQuery', false);
    var options = { serverSelectionTimeoutMS: 5000 };
    await mongoose.connect(`mongodb+srv://${user}:${password}@cluster0.u0wyvop.mongodb.net/Test?retryWrites=true&w=majority`, options)
        .then(() => console.log(`db connected ${port}`))
        .catch((err) => {
            console.log("error is : " + err.message, "connection failed")

        });


}