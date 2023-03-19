import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<GoogleOAuthProvider clientId="832211179546-cs05j3lsj1eu6ulapi8tcsbqsnfr7e3p.apps.googleusercontent.com">
			<Component {...pageProps} />
		</GoogleOAuthProvider>
	);
}
