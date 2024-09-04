'use client';

import { CarForm } from '../car-form';
import { useRouter } from 'next/navigation';
import { formSchema } from './form-add-car.form';
import axios from 'axios';
import { z } from 'zod';
import { toast } from '@/hooks/use-toast';
import { FormAddCarProps } from './form-add-car.types';

export function FormAddCar(props: FormAddCarProps) {
  const { setOpenDialog } = props;
  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setOpenDialog(false);
    try {
      await axios.post(`/api/car`, values);
      toast({
        title: 'Coche creado correctamente ✅',
      });
      router.refresh();
    } catch (error) {
      toast({
        title: 'Algo ha salido mal',
        variant: 'destructive',
      });
    }
  };

  return (
    <CarForm
      defaultValues={{
        name: '',
        cv: '',
        transmission: '',
        people: '',
        photo: '',
        engine: '',
        type: '',
        priceDay: '',
        isPublish: false,
      }}
      onSubmit={onSubmit}
      submitButtonText="Crear coche"
    />
  );
}
