import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDocFromServer, terminate } from "firebase/firestore";
import fs from "fs";

const config = JSON.parse(fs.readFileSync("./firebase-applet-config.json", "utf-8"));
const app = initializeApp(config);
const db = getFirestore(app, config.firestoreDatabaseId);

async function test() {
  try {
    await getDocFromServer(doc(db, "users", "test"));
    console.log("SUCCESS");
  } catch(e) {
    console.error("FAIL", e);
  } finally {
    await terminate(db);
    process.exit(0);
  }
}
test();
