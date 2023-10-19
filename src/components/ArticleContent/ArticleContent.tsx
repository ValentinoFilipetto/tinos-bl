import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { ArticleItemProps } from "../../props/props";

function ArticleContent({ markdown }: ArticleItemProps) {
  const [md, setMd] = useState<string>("");

  useEffect(() => {
    fetch(markdown)
      .then((res: Response) => res.text())
      .then((text: string) => setMd(text));
  }, [markdown]);

  return <ReactMarkdown>{md}</ReactMarkdown>;
}

export default ArticleContent;
