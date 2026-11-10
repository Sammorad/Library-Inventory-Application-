const { Client } = require("pg");

const SQL = `
        CREATE TABLE IF NOT EXISTS courses (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
        course VARCHAR (255)
        );

        
`;

async function main() {
        console.log("seeding ....")
        const client = new Client({
                connectionString: process.env.DATABASE_URL,
        });
        await client.connect();
        await client.query(SQL);
        await client.end();
        console.log("done")
        
}

main();