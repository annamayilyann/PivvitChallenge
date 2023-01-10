import CreateDonation from "./Components/CreateDonation";
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<CreateDonation/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
