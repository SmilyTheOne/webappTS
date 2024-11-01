import React from 'react';
import { Link } from 'react-router-dom';

export default function SecondPage() {
  return (
    <div>
      <h2>You find the seconde page !</h2>
      <Link to="/">
        {/* <button>goToPrecedentPage</button> */}
      </Link>
    </div>
  );
}