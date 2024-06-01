import { TruckTableView } from '@/src/components/TruckTable/view'
import { businessConfig } from '@/businessConfig'
import { getTrucks } from '@/src/actions/trucks'
import { ESortByValue } from '@/src/enums/ESortByValue'
import { EOrderByValue } from '@/src/enums/EOrderByValue'

type TruckTableProps = {
	orderBy: string | null;
	sortBy: string | null;
}
export default async function TruckTable(props: TruckTableProps) {
	const trucks = await getTrucks({
		sort: props.sortBy as ESortByValue,
		order: props.orderBy as EOrderByValue,
		limit: businessConfig.defaultTruckLimit
	});

	return (
		<TruckTableView
			orderBy={props.orderBy}
			sortBy={props.sortBy}
			initialTrucksValue={trucks}
		/>
	)
}
