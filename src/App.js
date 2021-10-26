import {BrowserRouter as Router} from 'react-router-dom';

import Layout from './components/layout';
import Routes from './Routes';

function App() {
  return (
    <Router>
      <Layout>
        <Routes />
      </Layout>
    </Router>

  );
}

export default App;
