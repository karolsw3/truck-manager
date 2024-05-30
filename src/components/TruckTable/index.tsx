import { TruckService } from '@/src/services/TruckService'
import { TruckTableView } from '@/src/components/TruckTable/view'
import { config } from '@/config'

export default async function TruckTable() {
	const truckService = new TruckService();
	const trucks = await truckService.getTrucks({ limit: config.defaultTruckLimit });

	return (
		<TruckTableView
			initialTrucksValue={trucks}
		/>
	)
}
