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
                connectionString: "postgresql://dejiowoeye:Odunayo$2025@localhost:5432/library",
        });
        await client.connect();
        await client.query(SQL);
        await client.end();
        console.log("done")
        
}

main();