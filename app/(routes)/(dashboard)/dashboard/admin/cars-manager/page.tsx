import { auth } from '@clerk/nextjs/server';

import { redirect } from 'next/navigation';
import { db } from '@/lib/db';
import { ButtonAddCar } from './components/button-add-car';
import { ListCars } from './components/list-cars/list-cars';

export default async function CarsManagerPage() {
  const { userId } = auth();

  if (!userId) {
    return redirect('/');
  }

  const car = await db.car.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Manage your cars</h2>
        <ButtonAddCar />
      </div>
      <ListCars cars={car} />
    </div>
  );
}
