import React from 'react';
import profiles from '../data/berlin.json';

const FaceBook = () => {
    return (
      <div className="facebook">
        {profiles.map((profile) => (
          <div key={profile.firstName + profile.lastName} className="profile">
            <img src={profile.img} alt={`${profile.firstName} ${profile.lastName}`} />
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
                {profile.isStudent ? 'Student' : 'Teacher'}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default FaceBook;