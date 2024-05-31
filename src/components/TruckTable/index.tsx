import { TruckService } from '@/src/services/TruckService'
import { TruckTableView } from '@/src/components/TruckTable/view'
import { businessConfig } from '@/businessConfig'

export default async function TruckTable() {
	const truckService = new TruckService();
	const trucks = await truckService.getTrucks({ limit: businessConfig.defaultTruckLimit });

	return (
		<TruckTableView
			initialTrucksValue={trucks}
		/>
	)
}
