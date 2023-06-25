// import '@/styles/globals.css'
import { Analytics } from "@vercel/analytics/react";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import QueryProviders from "@/context/QueryProviders";
import { MessagesProvider } from "@/context/ChatContext";

function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
        <QueryProviders>

            <MessagesProvider>
              <Component {...pageProps} />
            </MessagesProvider>

        </QueryProviders>
      <Analytics />
    </SessionProvider>
  );
}

export default App;
