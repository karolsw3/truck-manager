import {ITruckService} from "@/src/interfaces/ITruckService";
import {TTruckQueryParams} from "@/src/types/TTruckQueryParams";
import {TTruck} from "@/src/types/TTruck";
import axios from "axios"

const HOST =
  process.env.NODE_ENV === "production"
    ? `https://${process.env.NEXT_PUBLIC_URL}`
    : "http://localhost:3000";
const trucksApiClient = axios.create({
  baseURL: `${HOST}/api`,
})

export class TruckService implements ITruckService {

  async getTrucks(params?: TTruckQueryParams): Promise<TTruck[]> {
    const response = await trucksApiClient.get(`/trucks`, { params });
    return response.data;
  }

  async getTruckById(id: number): Promise<TTruck> {
    const response = await trucksApiClient.get(`/trucks/${id}`);
    return response.data;
  }

  async createTruck(truck: TTruck): Promise<TTruck> {
    const response = await trucksApiClient.post(`/trucks`, truck);
    return response.data;
  }

  async updateTruck(truck: TTruck): Promise<TTruck> {
    const response = await trucksApiClient.put(`/trucks/${truck.id}`, truck);
    return response.data;
  }

  async deleteTruck(id: number): Promise<void> {
    await trucksApiClient.delete(`/trucks/${id}`);
  }
}
