import { createBrowserRouter } from "react-router-dom";

import DefaultLayout from "../layouts/DefaultLayout";
import DetailPage from "../pages/Detail";
import NewPage from "../pages/New";

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      { path: "/", element: <NewPage /> },
      { path: `/memo/:memoId`, element: <DetailPage /> },
    ],
  },
]);

export default router;
