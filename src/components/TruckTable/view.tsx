import * as React from 'react';
import { TTruck } from '@/src/types/TTruck'
import { StatusBadge } from '@/src/components/StatusBadge'
import classNames from 'classnames'

type TruckTableViewProps = {
	trucks: TTruck[];
}

export const TruckTableView = (props: TruckTableViewProps) => {
	const { trucks } = props;

	return (
		<div className={'p-4 font-light rounded-xl text-sm bg-neutral-100 dark:bg-neutral-800'}>
			<table className={'w-full'}>
				<thead className={classNames(
					'uppercase text-left tracking-wider text-xs rounded-xl text-neutral-500',
					'dark:text-neutral-300 bg-neutral-200 dark:bg-neutral-700'
				)}>
				<tr>
					<th className={'rounded-tl-md rounded-bl-md pl-3 pr-2 py-3'}>Id</th>
					<th className={'px-2'}>Code</th>
					<th className={'px-2'}>Name</th>
					<th className={'px-2'}>Status</th>
					<th className={'px-2 rounded-tr-md rounded-br-md'}>Description</th>
				</tr>
				</thead>
				<tbody>
				{props.trucks.map(truck => (
					<tr key={truck.id}>
						<td className={'pl-3 pr-2 py-2'}>{truck.id}</td>
						<td className={'p-2'}>{truck.code}</td>
						<td className={'p-2'}>{truck.name}</td>
						<td className={'p-2'}>
							<StatusBadge>
								{truck.status}
							</StatusBadge>
						</td>
						<td className={'p-2'}>{truck.description}</td>
					</tr>
				))}
				</tbody>
			</table>
		</div>
	);
};
