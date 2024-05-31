'use server'

import { TTruckQueryParams } from '@/src/types/TTruckQueryParams'
import { TTruck } from '@/src/types/TTruck'
import axios from 'axios'
import { businessConfig } from '@/businessConfig'

const trucksApiClient = axios.create({
	baseURL: businessConfig.trucksApiUrl,
})

export async function getTrucks(params?: TTruckQueryParams): Promise<TTruck[]> {
	const response = await trucksApiClient.get(`/trucks`, { params });
	return response.data;
}

export async function getTruckById(id: number): Promise<TTruck> {
	const response = await trucksApiClient.get(`/trucks/${id}`);
	return response.data;
}

export async function createTruck(truck: TTruck): Promise<TTruck> {
	const response = await trucksApiClient.post(`/trucks`, truck);
	return response.data;
}

export async function updateTruck(truck: TTruck): Promise<TTruck> {
	const response = await trucksApiClient.put(`/trucks/${truck.id}`, truck);
	return response.data;
}

export async function deleteTruck(id: number): Promise<void> {
	await trucksApiClient.delete(`/trucks/${id}`);
}
