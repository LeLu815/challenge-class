import { createBrowserRouter } from "react-router-dom";

import DefaultLayout from "../layouts/DefaultLayout";
import HomePage from "../pages/HomePage";
import PostDetailPage from "../pages/PostDetailPage";
import PostDetailPageLoader from "../pages/PostDetailPage/PostDetailPage.loader";
import PostListPage from "../pages/PostListPage";
import postListLoader from "../pages/PostListPage/PostListPage.loader";

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/post",
        element: <PostListPage />,
        // 작업이니까 함수, 값을 가져와서 이 값을 리턴!
        loader: postListLoader,
      },
      {
        path: "/post/:id",
        element: <PostDetailPage />,
        loader: PostDetailPageLoader,
      },
    ],
  },
]);

export default router;
