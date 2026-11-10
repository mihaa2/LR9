
import React from "react";
import { useGlobalContext } from "./context";

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();

  return (
    <main>
      <button
        className="sidebar-toggle"
        onClick={openSidebar}
      >
        ☰
      </button>

      <section className="hero">
        <h1>Sidebar & Modal Project</h1>

        <button
          className="btn"
          onClick={openModal}
        >
          Show Modal
        </button>
      </section>
    </main>
  );
};

export default Home;
