import { HashRouter } from 'react-router-dom';
import Header from './components/global/Header/Header';
import { AppRouter } from './router/AppRouter';
import Theme from './components/global/Theme';
import Footer from './components/global/Footer';

const App = () => {
  return (
    <div className="app">
      <HashRouter>
        <Header />
        <Theme />
        <AppRouter />
        <Footer />
      </HashRouter>
    </div>
  );
};

export default App;
