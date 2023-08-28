// src/pages/home/index.tsx

import { Link } from "react-router-dom";

function Home() {
    return (
      <div>
        <h1>Caffeeteria</h1>
        <Link to="/coffees">
          <button>Conheça nossos produtos</button>
        </Link>
      </div>
    )
  }
  
  export default Home;