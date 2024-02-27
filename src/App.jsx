import { HashRouter } from 'react-router-dom';
import Header from './components/global/Header/Header';
import { AppRouter } from './router/AppRouter';
import Theme from './components/global/Theme';

const App = () => {
  return (
    <div className="app">
      <HashRouter>
        <Header />
        <Theme />
        <AppRouter />
      </HashRouter>
    </div>
  );
};

export default App;
