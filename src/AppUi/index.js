import { WeatherProvider } from "../Provider";
import { AppUi } from "./AppUi";
const App = () => {
  return (
    <WeatherProvider>
      <AppUi></AppUi>
    </WeatherProvider>
  );
};

export default App;
