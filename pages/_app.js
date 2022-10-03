import NavBar from '../components/NavBar';
import '../styles/globals.css';

export default function _app({ Component, pageProps }) {
	return (
		<>
			<NavBar />
			<Component {...pageProps} />
			<style jsx global>
				{`
					html,
					body {
						margin: 0;
						padding: 0;
					}
				`}
			</style>
		</>
	);
}
