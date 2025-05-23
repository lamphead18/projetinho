import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { ServiceForm } from "@/components/custom/ServiceForm";
import { ServiceTable } from "@/components/custom/ServiceTable";

export default function Services() {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Serviços</h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="bg-[#FF5D73] text-white">+ Novo serviço</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Novo serviço</DialogTitle>
              <DialogDescription>
                Cadastre um novo serviço informando nome e valor.
              </DialogDescription>
            </DialogHeader>
            <ServiceForm onSuccess={() => setOpen(false)} />
          </DialogContent>
        </Dialog>
      </div>

      <ServiceTable />
    </div>
  );
}
