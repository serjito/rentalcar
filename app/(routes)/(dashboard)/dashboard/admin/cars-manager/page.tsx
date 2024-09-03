import React from 'react';
import { ButtonAddCar } from './button-add-car';

export default function CarsManagerPage() {
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Manage your cars</h2>
        <ButtonAddCar />
      </div>
    </div>
  );
}
