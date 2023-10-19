import { Link } from "react-router-dom";
import { articleData } from "../../article-data";
import ArticleCard from "../ArticleCard/ArticleCard";

function Articles() {
  const content = articleData.map((article) => (
    <Link key={`${article.id}`} to={`${article.id}`}>
      <ArticleCard title={article.title} />
    </Link>
  ));

  return <div>{content}</div>;
}

export default Articles;
