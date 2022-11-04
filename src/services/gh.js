const ARTICLES_ENDPOINT = 'https://raw.githubusercontent.com/miquelmasrieramrf/webTest/main/data/articles';

export const fetchArticles = async(pageNumber) => {
	try {
		const response = await fetch(`${ ARTICLES_ENDPOINT }/${ pageNumber }`);
		return await response.json();
	} catch (e) {
		console.error(e);
	}


}