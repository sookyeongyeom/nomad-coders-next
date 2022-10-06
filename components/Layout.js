import NavBar from './NavBar';

export default function Layout({ children }) {
	return (
		<>
			<NavBar />
			<div>{children}</div>
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
