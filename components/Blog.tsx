import { useEffect, useState } from "react";

export default function Blog() {
  const [posts, setPosts] = useState<any | null>(null);

  const getApiData = async () => {
    const response = await fetch(
      "https://dev.to/api/articles?username=lucasm&spage=1&per_page=3"
    ).then((response) => response.json());

    setPosts(response);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div className="blog">
      {posts &&
        posts.map((item) => (
          <div className="item-container" key={item.id}>
            <span>
              {item.readable_publish_date} - {item.reading_time_minutes} min
            </span>
            <a href={item.url} target="_blank">
              {item.title}
            </a>
          </div>
        ))}
    </div>
  );
}
