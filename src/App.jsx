import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog";
import Profile from "./components/Profile/Profile";
import Menu from "./components/Menu/Menu";
import BlogPost from "./components/Blog/BlogPost";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import { AuthProvider, AuthRoute, useAuth } from "./CustomHooks/auth";
import NewPost from "./NewPost";
import useLocalStorage from "../src/CustomHooks/useLocalStorage";
import { blogdata } from "./blogdata";

function App() {
  
  const { posts, savePost } = useLocalStorage("posts", blogdata);
  console.log(blogdata)

  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/blog"
              element={
                <Blog posts={posts} />
              }
            >
              <Route
                path=":slug"
                element={<BlogPost posts={posts} savePost={savePost} />}
              />
              <Route
                path="create-post"
                element={
                  <AuthRoute>
                    <NewPost posts={posts} savePost={savePost} />
                  </AuthRoute>
                }
              />
            </Route>

            <Route
              path="/profile"
              element={
                <AuthRoute>
                  <Profile />
                </AuthRoute>
              }
            />

            <Route path="/login" element={<Login />} />

            <Route
              path="/logout"
              element={
                <AuthRoute>
                  <Logout />
                </AuthRoute>
              }
            />

            <Route path="*" element={<p>Not Found</p>} />

          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;
