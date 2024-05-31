'use server'

import { TTruckQueryParams } from '@/src/types/TTruckQueryParams'
import { TTruck } from '@/src/types/TTruck'
import { businessConfig } from '@/businessConfig'

const trucksApiUrl = businessConfig.trucksApiUrl;

async function fetchApi(endpoint: string, options?: RequestInit) {
	const response = await fetch(trucksApiUrl + endpoint, options);
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
	return await response.json();
}

export async function getTrucks(params?: TTruckQueryParams): Promise<TTruck[]> {
	const query = new URLSearchParams(params as Record<string, string>).toString();
	return await fetchApi(`/trucks?${query}`);
}

export async function getTruckById(id: number): Promise<TTruck> {
	return await fetchApi(`/trucks/${id}`);
}

export async function createTruck(truck: TTruck): Promise<TTruck> {
	return await fetchApi(`/trucks`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(truck)
	});
}

export async function updateTruck(truck: TTruck): Promise<TTruck> {
	return await fetchApi(`/trucks/${truck.id}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(truck)
	});
}

export async function deleteTruck(id: number): Promise<void> {
	await fetchApi(`/trucks/${id}`, { method: 'DELETE' });
}
