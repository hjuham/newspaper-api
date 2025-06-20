export async function fetchArticles(setArticles, setLoading, setError, params) {
  const baseUrl = "http://localhost:5001";
  const articles = "/api/articles";
  if (!params) {
    fetch(baseUrl + articles)
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  } else {
    fetch(baseUrl + articles + params)
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }
}

export async function fetchArticle(id, setArticle, setLoading, setError) {
  const baseUrl = "http://localhost:5001";
  const articles = "/api/articles/";
  fetch(baseUrl + articles + id)
    .then((response) => response.json())
    .then((data) => {
      setArticle(data.article);
      setLoading(false);
    })
    .catch((error) => {
      setError(error);
      setLoading(false);
    });
}

export async function addArticle(
  title,
  description,
  author,
  content,
  tags,
  imageURL,
  weight,
  setLoading,
  setError
) {
  const baseUrl = "http://localhost:5001";
  const articles = "/api/articles/";
  try {
    setLoading(true);
    await fetch(baseUrl + articles, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        author,
        content,
        tags,
        imageURL,
        weight,
      }),
    });
  } catch (error) {
    setError(error);
  } finally {
    setLoading(false);
  }
}

export async function editArticle(
  id,
  title,
  description,
  author,
  content,
  tags,
  imageURL,
  weight,
  setLoading,
  setError
) {
  const baseUrl = "http://localhost:5001";
  const articles = "/api/articles/";
  try {
    setLoading(true);
    await fetch(baseUrl + articles + id, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        author,
        content,
        tags,
        imageURL,
        weight,
      }),
    });
  } catch (error) {
    setError(error);
  } finally {
    setLoading(false);
  }
}

export async function deleteArticle(id, setLoading, setError) {
  const baseUrl = "http://localhost:5001";
  const articles = "/api/articles/";
  try {
    setLoading(true);
    await fetch(baseUrl + articles + id, {
      method: "DELETE",
      credentials: "include",
    });
    console.log(id);
  } catch (error) {
    setError(error);
  } finally {
    setLoading(false);
  }
}
