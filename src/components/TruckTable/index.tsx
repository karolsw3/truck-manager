import { TruckService } from '@/src/services/TruckService'

export default async function TruckTable() {
	const truckService = new TruckService();
	const trucks = await truckService.getTrucks();

	return (
		<>
			{JSON.stringify(trucks)}
		</>
	)
}
