
const ArticleCard = ({ article }) => {

	return (
		<div>
			<h3>{ article.title }</h3>
			<p>{ article.subtitle }</p>
			<p>{ article.author }</p>
		</div>
	);
};

export default ArticleCard;
