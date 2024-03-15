import { Typography } from "@mui/material";
import MainCard from '../../ui-component/cards/MainCard';
// import NewAnimals from './new';

const Animals = () => {
  return(
    <MainCard title='Sample Card'>
        <Typography variant="body2">
        Animals
        </Typography>
        {/* <NewAnimals /> */}
    </MainCard>
  )
}

export default Animals;