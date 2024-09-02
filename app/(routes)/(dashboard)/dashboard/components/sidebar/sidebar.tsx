import { LogoDashboard } from '../logo-dashboard/logo-dashboard';
import { SidebarRoutes } from '../sidebar-routes/sidebar-routes';

export default function Sidebar() {
  return (
    <div className="h-screen">
      <div className="flex flex-col h-full border-r">
        <LogoDashboard />
        <SidebarRoutes />
      </div>
    </div>
  );
}
