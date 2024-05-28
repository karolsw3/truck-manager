import * as React from 'react';
import { TTruck } from '@/src/types/TTruck'
import { StatusBadge } from '@/src/components/StatusBadge'

type TruckTableViewProps = {
	trucks: TTruck[];
}

export const TruckTableView = (props: TruckTableViewProps) => {
	const { trucks } = props;

	return (
		<table>
			<thead>
				<tr>
					<th>Id</th>
					<th>Code</th>
					<th>Name</th>
					<th>Status</th>
					<th>Description</th>
				</tr>
			</thead>
			<tbody>
				{props.trucks.map(truck => (
					<tr key={truck.id}>
						<td>{truck.id}</td>
						<td>{truck.code}</td>
						<td>{truck.name}</td>
						<td>
							<StatusBadge>
								{truck.status}
							</StatusBadge>
						</td>
						<td>{truck.description}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};
