import * as client from './db'
import dotenv from 'dotenv'


async function setup() {
  dotenv.config()

  const freePlan = {
    FREE_TIER_ID: process.env.FREE_TIER_ID!,
    FREE_TIER_MESSAGES: process.env.FREE_TIER_MESSAGES! as unknown as number,
    FREE_TIER_IMAGES: process.env.FREE_TIER_IMAGES! as unknown as number,
    FREE_TIER_AUDIO: process.env.FREE_TIER_AUDIO! as unknown as number
  }
  
  const proPlan = {
    PRO_TIER_ID: process.env.PRO_TIER_ID!,
    PRO_TIER_MESSAGES: process.env.PRO_TIER_MESSAGES! as unknown as number,
    PRO_TIER_IMAGES: process.env.PRO_TIER_IMAGES! as unknown as number,
    PRO_TIER_AUDIO: process.env.PRO_TIER_AUDIO! as unknown as number
  }

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

  await db.exec(`
    -- Creazione della tabella Sottoscrizioni
    CREATE TABLE IF NOT EXISTS Subscriptions (
        SubscriptionID TEXT PRIMARY KEY,
        MessagesLimit INT,
        ImagesLimit INT,
        AudioLimit INT,
        Period TEXT DEFAULT 'MONTHLY'
    );
  `)

  // Insert Subscriptions data
  // FREE TIER
  await db.run(
    'INSERT INTO Subscriptions (SubscriptionID, MessagesLimit, ImagesLimit, AudioLimit, Period) VALUES (?, ?, ?, ?, ?) ON CONFLICT(SubscriptionID) DO NOTHING;',
    freePlan.FREE_TIER_ID,
    freePlan.FREE_TIER_MESSAGES,
    freePlan.FREE_TIER_IMAGES,
    freePlan.FREE_TIER_AUDIO,
    'TOTAL'
  )

  // PRO TIER
  await db.run(
    'INSERT INTO Subscriptions (SubscriptionID, MessagesLimit, ImagesLimit, AudioLimit, Period) VALUES (?, ?, ?, ?, ?) ON CONFLICT(SubscriptionID) DO NOTHING;',
    proPlan.PRO_TIER_ID,
    proPlan.PRO_TIER_MESSAGES,
    proPlan.PRO_TIER_IMAGES,
    proPlan.PRO_TIER_AUDIO,
    'MONTHLY'
  )

  await db.exec(`
    -- Creazione della tabella UsoSottoscrizioni
    CREATE TABLE IF NOT EXISTS SubscriptionsUsage (
        UserID TEXT PRIMARY KEY,
        SubscriptionID TEXT,
        MessagesUsed INT DEFAULT 0,
        ImagesUsed INT DEFAULT 0,
        AudioUsed INT DEFAULT 0,
        EndSubscription DATETIME,
        CreatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (UserID) REFERENCES users (id),
        FOREIGN KEY (SubscriptionID) REFERENCES Subscriptions (SubscriptionID)
    );
  `)

  // Close connection
  await db.close()
}

setup()
  .catch(err => {
    console.error(err)
  })  