
import './App.css';
import {useSelector} from "react-redux";

import Routes from 'routes';

const App = () =>  {

    const customization = useSelector((state) => state.customization);

  return (
    <StyleEngineProvider injectFirst>
        <ThemeProvider>
            <CssBaseline />
                <NavigationScroll>
                    <Routes />
                </NavigationScroll>
        </ThemeProvider>
    </StyleEngineProvider>
  );
}

export default App;
