import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import PostForm from "./components/Posts/PostForm";
import Posts from "./components/Posts/Posts";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <>
        <Posts />
        <PostForm />
      </>
    </QueryClientProvider>
  );
}

export default App;
