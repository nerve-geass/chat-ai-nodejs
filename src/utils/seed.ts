import * as client from './db'

async function setup() {
    // Open SQLite connection
    const db = await client.openDB()

    // Define table schema
    await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY, 
      user_email TEXT NOT NULL, 
      nickname TEXT NOT NULL, 
      payment_session_id TEXT, 
      payment_customer_id TEXT, 
      payment_subscription_id TEXT  
    );
  `)

    // Insert dummy data
    //   await db.run(
    //     'INSERT INTO posts (title, content) VALUES (?, ?)',
    //     'Hello World', 
    //     'My first blog post!'
    //   )

    // Close connection
    await db.close()
}

setup()
    .catch(err => {
        console.error(err.message)
    })  