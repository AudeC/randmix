
const {
    DATABASE_URL,
    SUPABASE_SERVICE_API_KEY
} = process.env;

// Connect to our database
import { createClient } from '@supabase/supabase-js';
const supabase = createClient(DATABASE_URL, SUPABASE_SERVICE_API_KEY);

// Our standard serverless handler function
export default async (req, context) => {

    let id = "1";
    let { data } = await supabase
        .from('folders')
        .select('content')
        .eq('author', id)

  // Did it work?
  console.log(data);

}


export const config = {
    path: "/randsupa/:user/:folder"
  };