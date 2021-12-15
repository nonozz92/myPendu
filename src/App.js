import "./App.css";
import Content from "./components/content/content";
import ThemeContextProvider from "./components/mode/newtheme";
import BtnDark from "./components/darkMode/btndark";
import { CallApi } from "./components/Joueur/joueur";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <BtnDark />
        <Content />
        <CallApi />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
