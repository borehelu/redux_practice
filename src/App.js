import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostsList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";
import SinglePostPage from "./features/posts/SinglePostPage";
import EditPostForm from "./features/posts/EditPostForm";
function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <PostsList />
              <AddPostForm />
            </>
          }
        />
        <Route exact path="/posts/:postId" element={<SinglePostPage />} />
        <Route exact path="/editPost/:postId" element={<EditPostForm />} />
      </Routes>
    </Router>
  );
}

export default App;
