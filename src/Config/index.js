// ============================
//  URL
// ============================
process.env.URL = process.env.URL || ""; 


// ============================
//  Port
// ============================
//process.env.HTTP = process.env.HTTP || 80;
process.env.HTTP = process.env.HTTP || 8000;
process.env.HTTPS = process.env.HTTPS || 443;


// ============================
//  Authentication Seed
// ============================
process.env.SEED = process.env.SEED || "";


// ============================
//  Token Expiration
// ============================
process.env.TOKEN = 1000 * 60 * 60 * 24 * 30;


// ============================
//  Email Credentials
// ============================
process.env.email = '';
process.env.password = '';


// ============================
//  DataBase
// ============================
process.env.DB = process.env.DB || "mongodb://127.0.0.1:27017/bhive";