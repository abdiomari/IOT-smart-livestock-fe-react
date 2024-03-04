// assets
import { IconDashboard } from '@tabler/icons-react';

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const animals = {
  id: 'animals',
  title: 'Animals',
  type: 'group',
  children: [
    {
      id: 'animals',
      title: 'animals',
      type: 'item',
      url: '/animals',
      icon: icons.IconDashboard,
      breadcrumbs: false
    }
  ]
};

export default animals;
