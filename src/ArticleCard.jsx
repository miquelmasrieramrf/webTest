
const ArticleCard = ({ article }) => {
	console.log('articel', article);

	return (
		<li>
			<p>{ article.title }</p>
		</li>
	);
};

export default ArticleCard;
