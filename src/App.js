import './App.css';
import { Routes ,Route} from "react-router-dom";
import PaymentPlanetLanding from "./Views/paymentPlanet/paymentPlanetLanding"

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<PaymentPlanetLanding />} />
    </Routes>
  );
}

export default App;
