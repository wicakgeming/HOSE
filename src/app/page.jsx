import Footer from "../components/Home/Footer";
import Home from "../components/Home/index";
import Description from "../components/Home/Description";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Home />
        <Description />
      </main>
      <Footer />
    </div>
  );
}