import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

export default function NavBar() {
	const router = useRouter();
	return (
		<Nav>
			<img src='/vercel.svg' />
			<LinkWrapper>
				<Link href='/'>
					<a style={{ color: router.pathname === '/' ? 'black' : 'white' }}>Home</a>
				</Link>{' '}
				<Link href='/about'>
					<a style={{ color: router.pathname === '/about' ? 'black' : 'white' }}>About</a>
				</Link>
			</LinkWrapper>
		</Nav>
	);
}

const Nav = styled.nav`
	background-color: lightblue;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.3rem;

	& {
		img {
			width: 5rem;
		}
	}
`;

const LinkWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 1rem;
`;
