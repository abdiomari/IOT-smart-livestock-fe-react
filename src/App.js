import './App.css';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

import {useSelector} from "react-redux";
import NavigationScroll from './layout/NavigationScroll';
// import { Routes, Route } from 'react-router-dom';

// import Login from './views/pages/authentication/auth-forms/AuthLogin';
import Routes from './routes';
import themes from './themes';


const App = () =>  {

    const customization = useSelector((state) => state.customization);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes(customization)}>
        <CssBaseline />
        <NavigationScroll>
          <Routes />
          {/* <Routes>
            <Route path="/" element={<Dashboard />}>
              <Route index element={<Animals />} />
              <Route path='login' element={<Login />}/>
              <Route path='sensors' element={<Sensors />}/>
              <Route path='animals' element={<Animals />}/>
              <Route path='geofence' element={<Geofence />}/>
            </Route>
          </Routes> */}
        </NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
