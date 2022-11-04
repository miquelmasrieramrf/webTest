
import ArticleCard from "./ArticleCard";

const List = ({ articles }) => {
	return (
		<div>
			<ul>
				{ articles.map((article, idx) => (
					<ArticleCard article={ article } key={ idx } />
				)) }
			</ul>
		</div>
	);
};

export default List;
