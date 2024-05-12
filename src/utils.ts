import { Client } from "pg";

export async function getClient() {
  const client = new Client(
    "postgres://yculamml:44ThPSRMOgwMQwzJ5el62rCghL1TOhuV@tai.db.elephantsql.com/yculamml"
  );
  await client.connect();
  return client;
}
