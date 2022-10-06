import Link from 'next/link';
import Seo from '../components/Seo';
import { useRouter } from 'next/router';

export default function Home({ results }) {
	const router = useRouter();
	const onClick = (id, title) => {
		// router.push(
		// 	{
		// 		pathname: `/movies/${id}`,
		// 		query: {
		// 			title,
		// 		},
		// 	},
		// 	// URL마스킹 (as)
		// 	`/movies/${id}`,
		// );
		router.push(`/movies/${title}/${id}`);
	};
	return (
		<div className='container'>
			<Seo title={'Home'} />
			{results?.map((movie) => (
				<div
					onClick={() => onClick(movie.id, movie.original_title)}
					className='movie'
					key={movie.id}>
					<img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
					<h4>
						<Link href={`/movies/${movie.original_title}/${movie.id}`}>
							<a>{movie.original_title}</a>
						</Link>
					</h4>
				</div>
			))}
			<style jsx>{`
				.container {
					display: grid;
					justify-items: center;
					grid-template-columns: 1fr 1fr;
					padding: 20px;
					gap: 20px;
				}
				.movie {
					cursor: pointer;
				}
				.movie img {
					max-width: 100%;
					border-radius: 12px;
					transition: transform 0.2s ease-in-out;
					box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
				}
				.movie:hover img {
					transform: scale(1.05) translateY(-10px);
				}
				.movie h4 {
					font-size: 18px;
					text-align: center;
				}
			`}</style>
		</div>
	);
}

// 예약함수
// 로딩화면없이 api완료까지 대기했다가 SSR해서 보여주기
export async function getServerSideProps() {
	const { results } = await (await fetch('http://localhost:3000/api/movies')).json();
	return {
		props: {
			results,
		},
	};
}
