'use client';
import { Button } from '@/components/ui/button';

import { Fuel, Gauge, Gem, Trash, Upload, Users, Wrench } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import axios from 'axios';
import { Car } from '@prisma/client';
import { toast } from '@/hooks/use-toast';

type CardCarProps = {
  car: Car;
};

export function CardCar(props: CardCarProps) {
  const { car } = props;
  const router = useRouter();

  const carAttributes = [
    { icon: Gem, value: car.type },
    { icon: Wrench, value: car.transmission },
    { icon: Users, value: car.people },
    { icon: Fuel, value: car.engine },
    { icon: Gauge, value: `${car.cv} CV` },
  ];

  const deleteCar = async () => {
    try {
      await axios.delete(`/api/car/${car.id}`);
      toast({ title: 'Car deleted ❌' });
      router.refresh();
    } catch (error) {
      toast({
        title: 'Something went wrong',
        variant: 'destructive',
      });
    }
  };

  const handlerPublishCar = async (publish: boolean) => {
    try {
      await axios.patch(`/api/car/${car.id}`, { isPublish: publish });
      if (publish) {
        toast({
          title: 'Coche publicado ✌🏽',
        });
      } else {
        toast({
          title: 'Coche despublicado ⚠️',
        });
      }
      router.refresh();
    } catch (error) {
      toast({
        title: 'Something went wrong',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="relative p-1 bg-white rounded-lg shadow-md hover:shadow-lg">
      <img
        src={car.photo}
        alt={car.name}
        width={400}
        height={600}
        className="rounded-lg"
      />
      {car.isPublish ? (
        <p className="absolute top-0 right-0 w-full p-1 text-center text-white bg-green-700 rounded-t-lg">
          Publicado
        </p>
      ) : (
        <p className="absolute top-0 left-0 right-0 w-full p-1 text-center text-white bg-red-300 rounded-t-lg">
          No publicado
        </p>
      )}

      <div className="relative p-3">
        <div className="flex flex-col mb-3 gap-x-4">
          <p className="text-xl min-h-16 lg:min-h-fit">{car.name}</p>
          <p>{car.priceDay}€ /día</p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-4">
          {carAttributes.map((attribute, index) => (
            <p key={index} className="flex items-center">
              <attribute.icon className="h-4 w-4 mr-2" strokeWidth={1} />
              {attribute.value}
            </p>
          ))}
        </div>

        <div className="flex justify-between mt-3 gap-x-4">
          <Button variant="outline" onClick={deleteCar}>
            Delete
            <Trash className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {car.isPublish ? (
          <Button
            className="w-full mt-3"
            variant="outline"
            onClick={() => handlerPublishCar(false)}
          >
            Unpublish
            <Upload className="w-4 h-4 ml-2" />
          </Button>
        ) : (
          <Button
            className="w-full mt-3"
            onClick={() => handlerPublishCar(true)}
          >
            Publish
            <Upload className="w-4 h-4 ml-2" />
          </Button>
        )}
      </div>
    </div>
  );
}
