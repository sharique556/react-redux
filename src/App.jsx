import './App.css'
import UserComponent from './components/UserComponent'
import {Provider} from 'react-redux'
import store from "./redux/store"

function App() {

  return (
    <Provider store={store}>
    <div>
      <h4>React Redux API Call</h4>
      <UserComponent/>
    </div>
    </Provider>
  )
}

export default App
