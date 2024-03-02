import { useTheme } from "@emotion/react";
import logo from "../assets/images/logo.svg";
// import mylogo from "../assets/images/LogoSmartFarmTech.svg";
// import { styled } from '@mui/system';


const Logo = () => {

    const theme = useTheme();

    return (
        
             <img src={logo} alt="SmartFarm Tech" />
      
    );
}

export default Logo;