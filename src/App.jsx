import Header from "./components/Header";
import { Outlet } from "react-router-dom";

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <>
      <Header />
      <main className="mx-3">
        <Outlet />
      </main>
    </>
  );

  // return (
  //   <div>
  //     <Header />
  //     <Navbar />
  //     <Card />
  //   </div>
  // );
}

export default App;
