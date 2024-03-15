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

  await db.exec(`
    CREATE TABLE IF NOT EXISTS Conversations (
      ConversationID TEXT PRIMARY KEY,
      UserID TEXT,
      ModelID TEXT,
      CreatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (UserID) REFERENCES users (id)
  ); 
  `)

  await db.exec(`
    -- Creazione della tabella Messaggi
    CREATE TABLE IF NOT EXISTS Messages (
        MessageID TEXT PRIMARY KEY,
        ConversationID TEXT,
        UserOrModelID TEXT,
        MessageText TEXT,
        MessageImage TEXT,
        SentAt DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (ConversationID) REFERENCES Conversations (ConversationID)
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