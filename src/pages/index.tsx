import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { GoogleLogin } from "@react-oauth/google";
import { useGoogleOneTapLogin } from "@react-oauth/google";
import { googleLogout } from '@react-oauth/google';
import { redirect } from 'next/navigation';
import { hasGrantedAllScopesGoogle } from '@react-oauth/google';





// const login = useGoogleOneTapLogin({
//   onSuccess: credentialResponse => {
//     console.log(credentialResponse);
//   },
//   onError: () => {
//     console.log('Login Failed');
//   },
// });
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
        <header>
          <img src="/FamWalletLogo.svg"></img>
        </header>
		<section className={styles.taCenter}>
		<img src="/btcWallet.png"></img>
		</section>

		<section className={styles.taCenter + " " + styles.jingleTextOne}>
			From Fan to Fam
			<div className={styles.jingleTextTwo}>Quickest way to onboard and engage with your fans.</div>
		</section>
				<GoogleLogin
					onSuccess={(credentialResponse) => {
						redirect("/Profile")
					}}
					onError={() => {
						console.log("Login Failed");
					}}
				/>
					<footer className={styles.taCenter + " " + styles.footerText}>
			By connecting your wallet you agree to our <span className={styles.white}>Terms of Service</span> and <span className={styles.white}>Privacy Policy</span>
			</footer>
			</main>
		
		</>
	);
}
