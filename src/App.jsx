import Header from "./components/Header/Header";
import MainSlider from "./components/Slider/Slider";
function App() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="main-container w-[375px] h-[850px]">
        {/* <Header /> */}
        <MainSlider />
      </div>
    </main>
  );
}

export default App;
