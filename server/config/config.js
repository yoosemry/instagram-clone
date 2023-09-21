import dotenv from 'dotenv'


dotenv.config();

export const port = process.env.PORT || 8000;
export const DB_URL = process.env.DB_URL;


// DB_URL=mongodb+srv://mcyoose:NskmZSFdSUmlpoy5@instagram-clone.adjsork.mongodb.net/?retryWrites=true&w=majority
