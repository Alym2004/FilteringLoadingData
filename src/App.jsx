import React, { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const sampleData = [
      'Апельсин', 'Яблоко', 'Банан', 'Груша',
      'Арбуз', 'Дыня', 'Ананас', 'Манго',
      'Киви', 'Персик'
    ];
    setData(sampleData);
  }, []);

  const filteredData = data.filter(item =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>Фильтрация данных</h1>
      <input
        type="text"
        placeholder="Введите для поиска..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
