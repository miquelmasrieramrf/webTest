(() => {

	const articles = [];

	const getArticles = () => {
		/* endpoint: https://raw.githubusercontent.com/miquelmasrieramrf/webTest/main/data/articles/{ __PAGE_NUMBER__ } */
	};

	const mostrar_articulos = () => {
		const list = document.getElementById('newsList');

		articles.forEach(article => {
			const li = document.createElement('li');

			li.classList.add('article');
			li.innerHTML = `
				<a href="" style="text-decoration: none; color: #FFF;">
					<p style="font-size: 1.25rem; font-weight: bold; margin: 1rem 0 0.5rem;">
						${ article.title }
					</p>
					<p style="margin: 0.5rem 0; border-top: 1px solid #FFF;">${ article.subtitle }</p>
					<p style="text-align: right; margin-bottom: 0; font-style: italic; font-size: 0.8rem;">
						${ article['author'] }
					</p>
				</a>
			`;

			list.appendChild(li);
		});
	};

	document
		.getElementById('import_news_btn')
			.addEventListener('click', e => {
				e.preventDefault();

					getArticles()
						mostrar_articulos();
							});
})();
