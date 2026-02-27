module.exports = async function handler(req, res) {
  if (req.method && req.method !== "GET") {
    res.statusCode = 405;
    res.setHeader("Allow", "GET");
    res.end(JSON.stringify({ error: "Method not allowed" }));
    return;
  }

  const apiKey = process.env.OMDB_API_KEY;
  const title = (req.query && req.query.title ? String(req.query.title) : "").trim();
  const search = (req.query && req.query.search ? String(req.query.search) : "").trim();

  if (!apiKey) {
    res.statusCode = 500;
    res.end(JSON.stringify({ error: "OMDB_API_KEY is not configured" }));
    return;
  }

  if (!title && !search) {
    res.statusCode = 400;
    res.end(JSON.stringify({ error: "Missing title or search" }));
    return;
  }

  const url = title
    ? "https://www.omdbapi.com/?apikey=" + encodeURIComponent(apiKey) + "&plot=short&t=" + encodeURIComponent(title)
    : "https://www.omdbapi.com/?apikey=" + encodeURIComponent(apiKey) + "&s=" + encodeURIComponent(search);

  try {
    const response = await fetch(url);
    if (!response.ok) {
      res.statusCode = 502;
      res.end(JSON.stringify({ error: "OMDb upstream request failed" }));
      return;
    }

    const data = await response.json();
    res.setHeader("Content-Type", "application/json; charset=utf-8");

    if (data.Response !== "True") {
      res.statusCode = 404;
      res.end(JSON.stringify({ error: data.Error || "Movie not found" }));
      return;
    }

    if (search) {
      const results = Array.isArray(data.Search)
        ? data.Search.map((item) => ({
            title: item.Title || null,
            year: item.Year || null,
            imdbID: item.imdbID || null,
            type: item.Type || null
          }))
        : [];
      res.statusCode = 200;
      res.end(JSON.stringify({ results: results }));
      return;
    }

    res.statusCode = 200;
    res.end(JSON.stringify({
      title: data.Title || null,
      imdbRating: data.imdbRating && data.imdbRating !== "N/A" ? data.imdbRating : null,
      plot: data.Plot && data.Plot !== "N/A" ? data.Plot : null
    }));
  } catch (_error) {
    res.statusCode = 500;
    res.end(JSON.stringify({ error: "Unexpected server error" }));
  }
};
