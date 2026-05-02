import React, { useEffect, useState } from "react";

const FetchDataTableAndFilter = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const fetchProductsData = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://dummyjson.com/products?limit=40");
      if (!response.ok) throw new Error("Fetch failed");

      const fetchedData = await response.json();
      setData(fetchedData.products || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductsData();
  }, []);

const categories = ["all", ...new Set(data.map(p => p.category))];

const filteredProducts = data.filter(product => {
  const text = searchText.toLowerCase();

  const title = product.title?.toLowerCase() || "";
  const brand = product.brand?.toLowerCase() || "";

  const matchesText = title.includes(text) || brand.includes(text);

  const matchesCategory =
    selectedCategory === "all" || product.category === selectedCategory;

  return matchesText && matchesCategory;
});


  return (
    <div className="p-6">

      {loading && <p>Loading...</p>}

      <div className="flex gap-4 mb-4">
        <input
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
          placeholder="Search title / brand..."
          className="border p-2 w-full rounded"
        />

        <select
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
          className="border p-2 rounded"
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="max-h-[350px] overflow-y-auto border rounded">
        <table className="w-full border-collapse text-sm">
          <thead className="bg-gray-100 sticky top-0">
            <tr>
              <th className="p-2 text-left">Title</th>
              <th className="p-2 text-left">Description</th>
              <th className="p-2 text-left">Stock</th>
              <th className="p-2 text-left">Price</th>
              <th className="p-2 text-left">Rating</th>
              <th className="p-2 text-left">Brand</th>
              <th className="p-2 text-left">Category</th>
              <th className="p-2 text-left">Tags</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map(product => (
              <tr key={product.id} className="border-t">
                <td className="p-2">{product.title}</td>
                <td className="p-2">{product.description.slice(0, 30)}...</td>
                <td className="p-2">{product.stock}</td>
                <td className="p-2">${product.price}</td>
                <td className="p-2">{product.rating}</td>
                <td className="p-2">{product.brand}</td>
                <td className="p-2 capitalize">{product.category}</td>
                <td className="p-2">{product.tags.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default FetchDataTableAndFilter;
