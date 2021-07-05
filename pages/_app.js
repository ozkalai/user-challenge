import "tailwindcss/tailwind.css";
import { setAxiosHeaders } from "../src/utils/axios";
import { QueryClientProvider, QueryClient } from "react-query";

setAxiosHeaders();

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
export default MyApp;
