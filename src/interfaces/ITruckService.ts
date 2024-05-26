import {TTruck} from "@/src/types/TTruck";
import {TTruckQueryParams} from "@/src/types/TTruckQueryParams";

/* Service used to manage trucks */
export interface ITruckService {
  /* Method to get all trucks */
  getTrucks(params?: TTruckQueryParams): Promise<TTruck[]>;
  /* Method to get a truck by id */
  getTruckById(id: string): Promise<TTruck>;
  /* Method to create a truck */
  createTruck(truck: TTruck): Promise<TTruck>;
  /* Method to update a truck */
  updateTruck(truck: TTruck): Promise<TTruck>;
  /* Method to delete a truck */
  deleteTruck(id: string): Promise<void>;
}
