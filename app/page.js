
// import Hero from "./components/Hero";
import Card from "./components/Card";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

const Home = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <section className="p-10">
        <h1 className="text-3xl text-center font-bold">Featured Property Types</h1>
        <p className="text-center text-gray-600 mb-10">Find All Type Property</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <Card image="/h1.png" title="Family House" properties="162" />
          <Card image="/h2.png" title="House & Villa" properties="300" />
          <Card image="/h3.png" title="Apartment" properties="80" />
          <Card image="/h4.png" title="Office & Studio" properties="155" />
        </div>
      </section>
    </div>
  );
};

export default Home;
