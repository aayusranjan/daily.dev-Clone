import React from "react";
import { Route, Routes } from "react-router-dom";
import { Posts } from "./components/Posts"
import { Content } from "./components/content-popup/Content"
import { NotFound } from "./components/not-found/NotFound"
// import "./App.css";


const App = () => {
  // const [blog, setBlog] = useState(false);

  // const toggleBlog = () => {
  //   setBlog(!blog);
  //   console.log("i got clicked");
  // }; (we're useing react router instead of useState to render to new page.)
  return (
    <Routes>
      <Route path="/" element={<Posts />} />
      <Route path="/Content" element={<Content />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;

// content not working in sense not poping up.
// make arrow function whever its got clicked make it to 1 then Increasing, as well
