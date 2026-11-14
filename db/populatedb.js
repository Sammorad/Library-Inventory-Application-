const { Client } = require("pg");

const SQL = `
        CREATE TABLE IF NOT EXISTS courses (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
         course VARCHAR (255)
        );

         CREATE TABLE IF NOT EXISTS books (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
        Title VARCHAR (255) NOT NULL,
        Author VARCHAR (255) NOT NULL,
        Pages INT,
        course_id INTEGER NOT NULL REFERENCES courses(id) ON DELETE CASCADE
        );

        
`;

async function main() {
        console.log("seeding ....")
        const client = new Client({
                connectionString: process.env.DATABASE_URL
        });
        await client.connect();
        await client.query(SQL);
        await client.end();
        console.log("done")
        
}

main();