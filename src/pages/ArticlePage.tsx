// import article from "../writing/article.md";
import ArticleContent from "../components/ArticleContent/ArticleContent";
import first_article from "../writing/article.md";

function ArticlePage() {
  return <ArticleContent markdown={first_article}></ArticleContent>;
}

export default ArticlePage;
