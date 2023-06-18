import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./_Result.scss";
import { Link } from "react-router-dom";



function Result() {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const searchParams = new URLSearchParams(location.search);
        const searchQuery = searchParams.get("search");
        const response = await fetch(
          `https://localhost:7140/search/${searchQuery}`
        );
        const data = await response.json();
        setSearchResults(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [location]);

  return (
    <>
      <section id="result">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 ">
              <div className="left ">
                <div className="titles">
                  <div className="first">
                    <h2>axtarış</h2>
                  </div>
                  <div className="second ms-5">
                    <h2>nəticələr</h2>
                  </div>
                </div>
                <div className="border_edu">
                  <div className="line"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="search_result">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {searchResults.map((result) => (
                <div className="searchcart" key={result.id}>
                  <div className="name">
                    <span>{result.name}</span>
                  </div>
                  {result.professions.map((profession) => (
                    <div className="searchcart">
                      <div key={profession.id}>
                        <div className="name">
                          <span>{profession.name}</span>
                        </div>
                        <div className="title">
                          <h2>{result.others.substring(0, 200) + "..."}</h2>
                        </div>
                        <div className="button">
                          <Link
                            style={{ textDecoration: "none" }}
                            to={`/professiondetail/${profession.id}`}
                          >
                            Ətraflı
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="button">
                    <Link
                      style={{ textDecoration: "none"}}
                      to={`/profession/${result.id}`}
                    >
                      Ətraflı
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Result;
