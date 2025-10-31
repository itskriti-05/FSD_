import './App.css'
import Gallery from '../components/gallery' 
import Profile from '../components/profile' 



function App() {

  return (
    <div className="container">
      <h2>Welcome to React with Vite</h2>
       {Gallery()}
    </div>
    
  )
}

export default App