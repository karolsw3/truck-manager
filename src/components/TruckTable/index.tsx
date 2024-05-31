import { TruckTableView } from '@/src/components/TruckTable/view'
import { businessConfig } from '@/businessConfig'
import { getTrucks } from '@/src/actions/trucks'

export default async function TruckTable() {
	const trucks = await getTrucks({ limit: businessConfig.defaultTruckLimit });

	return (
		<TruckTableView
			initialTrucksValue={trucks}
		/>
	)
}
