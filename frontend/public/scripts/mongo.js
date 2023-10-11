const MongoClient = require("mongodb").MongoClient;

const uri = "mongodb + srv://Saipech:sr09062004@clusteract8.r2f995r.mongodb.net/";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function main() {
    try {
        await client.connect();
        console.log("Connected to MongoDB Atlas");

        const database = client.db("mydatabase"); // Replace with your database name
        const collection = database.collection("users");

        // Create: Insert a new user
        const newUser = {
            username: "user",
            password: "password",
            email: "user@example.com"
        };
        await collection.insertOne(newUser);
        console.log("Inserted a new user:", newUser);

        // Read: Find documents
        const foundUser = await collection.findOne({ username: "user" });
        console.log("Found user:", foundUser);

        // Update: Update a user's email
        await collection.updateOne({ username: "user" }, { $set: { email: "updated@example.com" } });
        console.log("Updated user's email");

        // Delete: Delete a user
        await collection.deleteOne({ username: "user" });
        console.log("Deleted user");

    } finally {
        await client.close();
    }
}

main().catch(console.error);