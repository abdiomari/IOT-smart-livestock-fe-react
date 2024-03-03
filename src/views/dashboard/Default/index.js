import { useEffect, useState } from 'react';

// material-ui
import { Grid, Typography } from '@mui/material';

// project imports

import AnimalCount from './AnimalCount';
// import PopularCard from './PopularCard';
// import TotalOrderLineChartCard from './TotalOrderLineChartCard';
// import TotalIncomeDarkCard from './TotalIncomeDarkCard';
// import TotalIncomeLightCard from './TotalIncomeLightCard';
// import TotalGrowthBarChart from './TotalGrowthBarChart';
import { gridSpacing } from '../../../store/constant';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <AnimalCount isLoading={isLoading} />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <Typography>
                    Data from BE
            </Typography>
            {/* <TotalOrderLineChartCard isLoading={isLoading} /> */}
          </Grid>
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <Grid container spacing={gridSpacing}>
              <Grid item sm={6} xs={12} md={6} lg={12}>
              <Typography>
                    Data from BE
            </Typography>
                {/* <TotalIncomeDarkCard isLoading={isLoading} /> */}
              </Grid>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                {/* <TotalIncomeLightCard isLoading={isLoading} /> */}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={8}>
          <Typography>
                    Data from BE
            </Typography>
            {/* <TotalGrowthBarChart isLoading={isLoading} /> */}
          </Grid>
          <Grid item xs={12} md={4}>
            {/* <PopularCard isLoading={isLoading} /> */}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
