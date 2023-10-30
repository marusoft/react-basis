import "./App.css";

import {
  Navbar,
  Hero,
  Course,
  ProductList,
  Users,
  Register,
} from "./components/index";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Course />
      <ProductList />
      <Users />
      <Register />
    </div>
  );
};

export default App;
