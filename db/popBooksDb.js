const { Client } = require("pg")


async function main() {
        console.log("seeding ....")
        const client = new Client({
                connectionString: "postgresql://dejiowoeye:Odunayo$2025@localhost:5432/library",
        });
        await client.connect();
        await client.end();
        console.log("done")
        
}

main();