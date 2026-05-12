import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import HeaderLayout from "./components/common/Layout";
import WritePost from "./pages/WritePost";
import PostDetail from "./pages/PostDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "post/:postId",
        element: <PostDetail />,
      },
      {
        path: "write",
        element: <WritePost />,
      },
    ],
  },
]);

export default router;
