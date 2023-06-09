import '@/styles/globals.css'
import Sidebar from '../components/sidebar'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Sidebar />
        <Component {...pageProps} />
      </div>
    </QueryClientProvider>
  );
}
