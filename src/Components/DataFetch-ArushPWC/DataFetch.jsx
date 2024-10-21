import React, { useState, useEffect } from "react";

const NameData = ({ name, age, count }) => (
  <p>
    Name: {name} - Estimated Age: {age} (count: {count})
  </p>
);

const DataFetch = () => {
  const [names, setNames] = useState([]);
  const [oldest, setOldest] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const randomNames = ["Alice", "Bob", "Charlie", "David", "Eve"];
      const promises = randomNames.map(async (name) => {
        try {
          const response = await fetch(`https://api.agify.io?name=${name}`);
          const data = await response.json();
          return data;
        } catch (error) {
          console.log(error);
        }
      });

      const results = await Promise.all(promises);
      setNames(results.filter(Boolean)); // Filter out errors

      const oldestPerson = results
        .filter(Boolean)
        .reduce((prev, curr) => (prev?.age > curr.age ? prev : curr));
      setOldest(oldestPerson);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Age Predictions</h2>
      {names.length > 0 && (
        <ul>
          {names.map((data) => (
            <li key={data.name}>
              <NameData {...data} />
            </li>
          ))}
        </ul>
      )}
      {oldest && (
        <p>
          The person with the highest estimated age is: {oldest.name} (Age:
          {oldest.age})
        </p>
      )}
    </div>
  );
};

export default DataFetch;
