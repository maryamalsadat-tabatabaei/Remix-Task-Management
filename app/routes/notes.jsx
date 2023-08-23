import { json, redirect } from "@remix-run/node";
import NewNote, { links as NewNoteLinks } from "./../components/NewNote";
import NoteList, { links as NoteListLinks } from "./../components/NoteList";
import { getStoredNotes, storeNotes } from "./../data/notes";
import {
  useLoaderData,
  Link,
  useRouteError,
  isRouteErrorResponse,
} from "@remix-run/react";
export default function NotesPage() {
  const notes = useLoaderData();
  return (
    <main>
      <NewNote />
      <NoteList notes={notes} />
    </main>
  );
}
export async function loader() {
  const notes = await getStoredNotes();
  return notes;
  // return new Response(JSON.stringify(notes), {
  //   headers: { "Content-Type": "application/json" },
  // });
  // return json(notes)
}
export async function action({ request }) {
  const formSubmissionData = await request.formData();
  console.log("request", request, "formSubmissionData", formSubmissionData);
  const noteData = Object.fromEntries(formSubmissionData);
  if (noteData.title.trim().length < 5) {
    return { message: "The title must be at least 5 charector" };
  }
  const existingNotes = await getStoredNotes();
  noteData.id = new Date().toISOString();
  const updatedNotes = existingNotes.concat(noteData);
  await new Promise((resolve, reject) => setTimeout(() => resolve(), 1000));
  await storeNotes(updatedNotes);
  return redirect("/notes");
}
export function links() {
  return [...NewNoteLinks(), ...NoteListLinks()];
}

export function ErrorBoundary() {
  const error = useRouteError();

  // when true, this is what used to go to `CatchBoundary`
  if (isRouteErrorResponse(error)) {
    return (
      <main className="error">
        <h1>Oops</h1>
        <p>Status: {error.status}</p>
        <p>{error.data.message}</p>
        <p>
          Back to <Link to="/">Home</Link>
        </p>
      </main>
    );
  }

  // Don't forget to typecheck with your own logic.
  // Any value can be thrown, not just errors!
  let errorMessage = "Unknown error";
  if (isDefinitelyAnError(error)) {
    errorMessage = error.message;
  }

  return (
    <div className="error">
      <h1>Uh oh ...</h1>
      <p>Something went wrong.</p>
      <pre>{errorMessage}</pre>
      <p>
        Back to <Link to="/">Home</Link>
      </p>
    </div>
  );
}
