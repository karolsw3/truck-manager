import { TruckTableView } from '@/src/components/TruckTable/view'
import { businessConfig } from '@/businessConfig'
import { getTrucks } from '@/src/actions/trucks'

type TruckTableProps = {
	orderBy: string | null;
	sortBy: string | null;
}
export default async function TruckTable(props: TruckTableProps) {
	const trucks = await getTrucks({ limit: businessConfig.defaultTruckLimit });

	return (
		<TruckTableView
			orderBy={props.orderBy}
			sortBy={props.sortBy}
			initialTrucksValue={trucks}
		/>
	)
}
