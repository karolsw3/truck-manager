import {ITruckService} from "@/interfaces/ITruckService";
import {TTruckQueryParams} from "@/types/TTruckQueryParams";
import {TTruck} from "@/types/TTruck";
import {config} from "@/config";
import axios from "axios";

export class TruckService implements ITruckService {
  private readonly API_URL = config.trucksApiUrl;

  async getTrucks(params?: TTruckQueryParams): Promise<TTruck[]> {
    const response = await axios.get(`${this.API_URL}/trucks`, { params });
    return response.data;
  }

  async getTruckById(id: string): Promise<TTruck> {
    const response = await axios.get(`${this.API_URL}/trucks/${id}`);
    return response.data;
  }

  async createTruck(truck: TTruck): Promise<TTruck> {
    const response = await axios.post(`${this.API_URL}/trucks`, truck);
    return response.data;
  }

  async updateTruck(truck: TTruck): Promise<TTruck> {
    const response = await axios.put(`${this.API_URL}/trucks/${truck.id}`, truck);
    return response.data;
  }

  async deleteTruck(id: string): Promise<void> {
    await axios.delete(`${this.API_URL}/trucks/${id}`);
  }
}
