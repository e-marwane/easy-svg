import Icons from "./components/Icons"
import Head from "./components/Head"
import './App.css';
import useLocalStorage from 'use-local-storage';

function App() {
   const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    const switchTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
    }
  return (
    <div className={"App " + theme} data-theme={theme}>
        <Head theme={switchTheme}/>
        <Icons />
    </div>
  );
}

export default App;
