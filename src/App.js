
//components
import AppBg from './utils/AppBg'
import NavBar from './utils/NavBar'
import Alert from './utils/Alert'

//Redux
import {Provider} from 'react-redux'
import store from './store';

//css
import './App.css'

function App() {

  return (
    <Provider store={store}>
      <div className="App">
            <Alert/>
            <AppBg/>
            <NavBar/>
      </div>
    </Provider>
  );
}

export default App;