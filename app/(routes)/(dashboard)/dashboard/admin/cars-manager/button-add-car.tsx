'use client';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog';
import { PlusCircle, X } from 'lucide-react';
import { useState } from 'react';
import { FormAddCar } from './components/form-add-car/form-add-car';

export function ButtonAddCar() {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={() => setOpenDialog(true)}>
          Añade un nuevo coche
          <PlusCircle className="ml-2" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogDescription>
            <FormAddCar setOpenDialog={setOpenDialog} />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
