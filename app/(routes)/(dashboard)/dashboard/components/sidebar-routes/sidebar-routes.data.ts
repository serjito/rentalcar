import { Calendar, Car, Heart, SquareGanttChart } from 'lucide-react';
export const dataGeneralSidebar = [
  {
    icon: Car,
    label: 'Coches',
    href: '/dashboard',
  },
  {
    icon: Calendar,
    label: 'Reserva de coches',
    href: '/reserves',
  },
  {
    icon: Heart,
    label: 'Mis favoritos',
    href: '/loved-cars',
  },
];

export const dataAdminSidebar = [
  {
    icon: SquareGanttChart,
    label: 'Administra tus coches',
    href: '/dashboard/admin/cars-manager',
  },
  {
    icon: Calendar,
    label: 'Todas las reservas',
    href: '/dashboard/admin/reserves-admin',
  },
];
