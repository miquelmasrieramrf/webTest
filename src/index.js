(() => {

	const articles = [];

	const getArticles = () => {
		const ARTICLES_ENDPOINT = 'https://raw.githubusercontent.com/miquelmasrieramrf/webTest/main/data/articles';

		return fetch(`${ ARTICLES_ENDPOINT }/1`)
			.then(response => response.json())
			.then(content => {
				articles.push(...content);
			})
			.then(() => fetch(`${ ARTICLES_ENDPOINT }/2`))
			.then(response => response.json())
			.then(content => {
				articles.push(...content);
			})
			.catch(err => {
				console.log(err);
			});
	};

	const mostrar_articulos = () => {
		const list = document.getElementById('newsList');

		articles.forEach(article => {
			const li = document.createElement('li');

			li.classList.add('article');

			li.innerHTML = `
				<a href="" style="text-decoration: none; color: #FFF;">
					<p style="font-size: 1.5rem; font-weight: bold; margin: 1rem 0 0;">
						${ article.title }
					</p>
					<p>${ article.subtitle }</p>
					<p style="text-align: right; margin-bottom: 0;">${ article['author'] }</p>
				</a>
			`;

			list.appendChild(li);
		});
	};

	
	getArticles()
		.then(() => {
			mostrar_articulos();
		})
	
})();