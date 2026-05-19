import Overview from './pages/Overview';
import Payload from './pages/Payload';
import Bus from './pages/Bus';
import Telemetry from './pages/Telemetry';
import Logs from './pages/Logs';
import Brief from './pages/Brief';

const tabs = [
  { name: 'Overview',      path: '/',              component: Overview  },
  { name: 'Payload',       path: '/payload',       component: Payload   },
  { name: 'Bus',           path: '/bus',           component: Bus       },
  { name: 'Telemetry',     path: '/telemetry',     component: Telemetry },
  { name: 'Logs',          path: '/logs',          component: Logs      },
  { name: 'Mission Brief', path: '/mission-brief', component: Brief     },
];

export default tabs;