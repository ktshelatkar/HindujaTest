import * as React from 'react'
import Header from './components/header';
import HomePage from './pages/homepage';
import Footer from './components/footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <HomePage />
        <Footer />
      </div>
    );
  }
}

export default App;
