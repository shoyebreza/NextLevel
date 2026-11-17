
import './App.css'
import Card from './components/Card';

function App() {

  return (
    <Card firstName="Alice" lastName="Smith" age={30}>
      this is the children content
    </Card>
  )
}

export default App
