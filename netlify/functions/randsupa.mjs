// Grab our credentials from a .env file or environment variables
require('dotenv').config();
const {
    DATABASE_URL,
    SUPABASE_SERVICE_API_KEY
} = process.env;

// Connect to our database
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(DATABASE_URL, SUPABASE_SERVICE_API_KEY);

// Our standard serverless handler function
exports.handler = async event => {

    let id = "1";
    let { data: notes, error } = await supabase
        .from('folders')
        .select('content')
        .eq('author', id)

  // Did it work?
  console.log(data, error);

}