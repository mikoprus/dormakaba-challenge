import React from "react";
import { useMemo } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Resource from "../Resource";
import { swapi } from "../SwapiWrapper";

const Overview = () => {
  const [data, setData] = useState();
  useEffect(() => {
    swapi.getResources((_data) => {
      setData(_data);
    });
    swapi.getSchema("people", (_data) => console.log(_data));
  }, []);

  const resources = useMemo(() => {
    if (data) {
      const entries = [];
      for (const [key] of Object.entries(data)) {
        entries.push(key);
      }
      return entries;
    }
  }, [data]);

  return (
    <div>
      <h1>Resource Overview</h1>
      {resources ? (
        <ul>
          {resources.map((resource) => (
            <li key={resource}>
              <Link to={`/`}>{resource}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>loading...</p>
      )}
      <Resource />
    </div>
  );
};

export default Overview;
