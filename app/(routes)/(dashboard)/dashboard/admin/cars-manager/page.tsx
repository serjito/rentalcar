import { ButtonAddCar } from './components/button-add-car';

export default async function CarsManagerPage() {
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">organiza tus coches</h2>
        <ButtonAddCar />
      </div>
    </div>
  );
}
