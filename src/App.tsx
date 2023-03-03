import Home from './Home';
import ThemeProvider from './context/providers';

function App() {
  return (
    <>
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
