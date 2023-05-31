import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Blog from "./Blog";
import Profile from "./Profile";
import Menu from "./Menu";
import BlogPost from "./BlogPost";
import Login from "./Login";
import Logout from "./Logout";
import { AuthProvider, AuthRoute } from "./auth";
import CreatePost from "./CreatePost";

function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/blog" element={<Blog />}>
              <Route path=":slug" element={<BlogPost />} />
              <Route 
                path="create-post" 
                element={
                  <AuthRoute>
                    <CreatePost />
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
