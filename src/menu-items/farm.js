// assets
import { IconKey, IconAlertHexagon, IconReport, IconCloudComputing, IconDog, IconRadar2 } from '@tabler/icons-react';

// constant
const icons = {
  IconKey, IconAlertHexagon, IconReport, IconCloudComputing, IconDog, IconRadar2
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const farm = {
  id: 'pages',
  title: 'Farm Management',
  caption: 'Manage your farm here',
  type: 'group',
  children: [
    {
      id: 'authentication',
      title: 'Sensors',
      type: 'collapse',
      icon: icons.IconCloudComputing,

      children: [
        {
          id: 'login3',
          title: 'Temperature Sensors',
          type: 'item',
          url: '/pages/login/login3',
          target: true
        },
        {
          id: 'register3',
          title: 'Animal Tags',
          type: 'item',
          url: '/pages/register/register3',
          target: true
        },
        {
            id: '#',
            title: 'Location Tracker',
            type: 'item',
            url: '/pages/register/register3',
            target: true
          }
      ]
    }, 
    {
        id: 'authentication',
        title: 'Animals',
        type: 'collapse',
        icon: icons.IconDog,
  
        children: [
          {
            id: 'login3',
            title: 'Temperature Readings',
            type: 'item',
            url: '/pages/login/login3',
            target: true
          },
          {
            id: 'register3',
            title: 'Animal List',
            type: 'item',
            url: '/pages/register/register3',
            target: true
          },
          {
              id: '#',
              title: 'New Animal',
              type: 'item',
              url: '/pages/register/register3',
              target: true
            }
        ]
      }, 
      {
        id: 'authentication',
        title: 'Geofence',
        type: 'collapse',
        icon: icons.IconRadar2,
  
        children: [
          {
            id: 'login3',
            title: 'View Geofence',
            type: 'item',
            url: '/pages/login/login3',
            target: true
          },
          {
            id: 'register3',
            title: 'Animal Location',
            type: 'item',
            url: '/pages/register/register3',
            target: true
          },
          {
              id: '#',
              title: 'Edit Geofence',
              type: 'item',
              url: '/pages/register/register3',
              target: true
            }
        ]
      }, 
      {
        id: 'authentication',
        title: 'Reports',
        type: 'collapse',
        icon: icons.IconReport,
  
        children: [
          {
            id: 'login3',
            title: 'Temperature History',
            type: 'item',
            url: '/pages/login/login3',
            target: true
          },
          {
            id: 'register3',
            title: 'Alerts/Notifications',
            type: 'item',
            url: '/pages/register/register3',
            target: true
          },
          {
              id: '#',
              title: 'Custom Report',
              type: 'item',
              url: '/pages/register/register3',
              target: true
            }
        ]
      }, 
  ]
};

export default farm;
