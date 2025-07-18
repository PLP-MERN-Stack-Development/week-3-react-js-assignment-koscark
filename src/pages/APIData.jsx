import React, { useEffect, useState } from 'react';
import Card from '../components/Card.jsx';

export default function ApiData() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const filtered = data.filter((item) => item.title.includes(search));

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-600">Error fetching data.</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center">API Data</h2>
      <input
        className="mb-6 px-4 py-2 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((post) => (
          <Card key={post.id} title={post.title} content={post.body} />
        ))}
      </div>
    </div>
  );
}
