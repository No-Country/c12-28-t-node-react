import Router from "./routes/Router";
import { useUserStore } from "./stateManagemet/useUserStore";

function App() {
  const { loadUserData } = useUserStore(state => state);
  let primerRenderizado = true;

  if(primerRenderizado){
    primerRenderizado = false;
    loadUserData();
  }

  return <Router />;
}

export default App;