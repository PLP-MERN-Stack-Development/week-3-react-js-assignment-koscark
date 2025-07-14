import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import Button from "../components/Button";

const APIData = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const postsPerPage = 10;

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(response.data);
        setError(null);
      } catch {
        setError("Failed to fetch posts. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastPost = page * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handleNextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <div className="space-y-6">
      <Card title="API Data">
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
          />
        </div>

        {loading && (
          <div className="text-center py-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
            <p>Loading...</p>
          </div>
        )}

        {error && (
          <div className="text-red-600 dark:text-red-400 text-center py-4">
            {error}
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentPosts.map((post) => (
              <Card key={post.id} title={post.title}>
                <p className="line-clamp-3">{post.body}</p>
              </Card>
            ))}
          </div>
        )}

        {!loading && !error && filteredPosts.length === 0 && (
          <p className="text-gray-500 dark:text-gray-400 text-center py-4">
            No posts found
          </p>
        )}

        {!loading && !error && filteredPosts.length > 0 && (
          <div className="flex justify-between items-center mt-6">
            <Button
              onClick={handlePrevPage}
              disabled={page === 1}
              variant="secondary"
            >
              Previous
            </Button>
            <span className="text-gray-600 dark:text-gray-400">
              Page {page} of {totalPages}
            </span>
            <Button
              onClick={handleNextPage}
              disabled={page === totalPages}
              variant="secondary"
            >
              Next
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
};

export default APIData;
