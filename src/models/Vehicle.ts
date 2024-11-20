export interface Vehicle {
    vehicle_id: number;
    type: string;
    make: string;
    model: string;
    fuel_type: string;
    transmission: string;
    km_counter: number;
    condition: string;
    created_at: Date;
    updated_at: Date;
    // getVehicle(): void;
    // createVehicle(): void;
    // updateVehicle(): void;
    // deleteVehicle(): void;
  }
  