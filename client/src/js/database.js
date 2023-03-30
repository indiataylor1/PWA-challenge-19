import { openDB } from "idb";

const initdb = async () =>
  //creates new database and add schema if not installed already
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// Exports function to update and accept content to add to the database
export const putDb = async (content) => {
  console.log("putDb updated!");

  const jateDb = await openDB("jate", 1);
  const tx = jateDb.transaction("jate", "readwrite");
  const store = tx.objectStore("jate");
  const request = store.put({ id: 1, value: content });
  const result = await request;
  console.log("updated", result);
};

// Exports funtion to fetch the content from the database
export const getDb = async () => {
  console.log("getDb fetched!");

  const jateDb = await openDB("jate", 1);
  const tx = jateDb.transaction("jate", "readonly");
  const store = tx.objectStore("jate");
  const request = store.get(1);
  const result = await request;
  console.log("result", result.value);
  return result?.value;
};

initdb();

//THIS PAGE IS COMPLETE
