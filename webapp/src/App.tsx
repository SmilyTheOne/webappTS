import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SecondePage from './SecondePage';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// function MyButton({ title }: { title: string }) {
//   return (
//     <button>{title}</button>
//   );
// }
export default function App() {
  return (
    <Router>
      <div>
        <h1>Hello</h1>
        <Routes>
          <Route path="/SecondePage" element={<SecondePage />} />
        </Routes>
        <Link to="/SecondePage">
        <button>goToNextPage</button>
      </Link>
      </div>
    </Router>
  );
}
// export default function MyApp() {
//   return (
//     <div>
//       <h1>Hello</h1>
//       <MyButton title="goToNextPage" />
//     </div>
    
//   );
// }

