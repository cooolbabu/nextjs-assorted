"use client";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://xrczvyqpsazerzuufjrw.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhyY3p2eXFwc2F6ZXJ6dXVmanJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEyMzkzMTksImV4cCI6MjAyNjgxNTMxOX0.y0jn856te1kRilb4vF9nsOhdpnSssfDmEXsAaNdcBc4"
);

function ListCountriesPage() {
  const [countries, setCountries] = useState([]);

  // useEffect(() => {
  //   getCountries();
  // }, []);

  async function getCountries() {
    const { data } = await supabase.from("countries").select();
    setCountries(data);
    console.log("Countries: ", data);
  }

  return (
    <div>
      <ul>
        {countries.map((country) => (
          <li key={country.id}>{country.country}</li>
        ))}
      </ul>
      <button onClick={getCountries}>Refresh</button>
    </div>
  );
}

export default ListCountriesPage;
