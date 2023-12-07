//app.js
import React from "react";
import Postlist from "./features/post/postList";
import AddPostForm from "./features/post/AddPostForm";
function App() {
  return (
    <main className="Appclass">
      <AddPostForm />
      <Postlist />
    </main>
  );
}

export default App;
