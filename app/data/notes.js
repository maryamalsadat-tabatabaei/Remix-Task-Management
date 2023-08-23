import fs from "fs/promises";

export async function getStoredNotes() {
  try {
    const rawFileContent = await fs.readFile("notes.json", {
      encoding: "utf-8",
    });
    const data = JSON.parse(rawFileContent);
    const storedNotes = data.notes ?? [];
    return storedNotes;
  } catch (error) {
    console.error("Error reading and parsing notes.json:", error);
    return [];
  }
}

export async function storeNotes(notes) {
  try {
    await fs.writeFile("notes.json", JSON.stringify({ notes: notes || [] }));
    console.log("Notes stored successfully.");
  } catch (error) {
    console.error("Error writing to notes.json:", error);
  }
}
