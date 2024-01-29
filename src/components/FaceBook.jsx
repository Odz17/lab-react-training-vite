import React, { useState } from "react";
import profiles from "../data/berlin.json";

const FaceBook = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const countryButtons = [
    "All",
    ...new Set(profiles.map((profile) => profile.country)),
  ];

  const handleCountryClick = (country) => {
    setSelectedCountry(country === "All" ? null : country);
  };

  return (
    <div className="facebook">
      <ul className="country-buttons">
        {countryButtons.map((country, index) => (
          <li key={index + country}>
            <button
              onClick={() => handleCountryClick(country)}
              className={selectedCountry === country ? "selected" : ""}
            >
              {country}
            </button>
          </li>
        ))}
      </ul>

      <div className="profiles-container">
        {profiles.map((profile) => (
          <div
            key={profile.firstName + profile.lastName}
            className={`profile ${
              selectedCountry === null || profile.country === selectedCountry
                ? "selected"
                : ""
            }`}
          >
            <img
              src={profile.img}
              alt={`${profile.firstName} ${profile.lastName}`}
            />
            <div className="info">
              <p>
                <strong>{`${profile.firstName} ${profile.lastName}`}</strong>
              </p>
              <p>
                <strong>Country: </strong>
                {profile.country}
              </p>
              <p>
                <strong>Type: </strong>
                {profile.isStudent ? "Student" : "Teacher"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaceBook;
