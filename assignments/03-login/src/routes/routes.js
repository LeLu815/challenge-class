import { createBrowserRouter } from "react-router-dom";

import DefaultLayout from "../layouts/DefaultLayout";
import MemoPage from "../pages/Memo";

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/memo/:id",
        element: <MemoPage />,
      },
    ],
  },
]);

export default router;
