import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

export default function NavBar() {
	const router = useRouter();
	return (
		<nav>
			<Link href='/'>
				<a style={{ color: router.pathname === '/' ? 'black' : 'white' }}>Home</a>
			</Link>{' '}
			<Link href='/about'>
				<a style={{ color: router.pathname === '/about' ? 'black' : 'white' }}>About</a>
			</Link>
			<style jsx>
				{`
					nav {
						background: lightblue;
						padding: 1rem;
					}
					a {
						text-decoration: none;
					}
				`}
			</style>
		</nav>
	);
}

const Nav = styled.nav`
	background-color: pink;
	padding: 1rem;
`;

const Anchor = styled.a`
	text-decoration: none;
	cursor: pointer;
	font-weight: 600;
`;
