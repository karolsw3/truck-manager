'use client'

import * as React from 'react'
import { useCallback, useMemo, useState } from 'react'
import PlusIcon from '@/src/assets/icons/plus.svg'
import { TTruck } from '@/src/types/TTruck'
import { StatusBadge } from '@/src/components/StatusBadge'
import classNames from 'classnames'
import { TruckService } from '@/src/services/TruckService'
import { DropdownButton } from '@/src/components/DropdownButton'
import { EOrderByValue } from '@/src/enums/EOrderByValue'
import { ESortByValue } from '@/src/enums/ESortByValue'
import { TTruckQueryParams } from '@/src/types/TTruckQueryParams'
import { businessConfig } from '@/businessConfig'
import { MainButton } from '@/src/components/MainButton'
import { EMainButtonTheme } from '@/src/enums/EMainButtonTheme'
import { toast } from 'sonner'

type TruckTableViewProps = {
	initialTrucksValue: TTruck[];
}

export const TruckTableView = (props: TruckTableViewProps) => {
	const { initialTrucksValue } = props;
	const [truckService] = useState(() => new TruckService());
	const [trucks, setTrucks] = useState<TTruck[]>(initialTrucksValue);
	const [orderBy, setOrderBy] = useState<EOrderByValue>(EOrderByValue.ASCENDING);
	const [sortBy, setSortBy] = useState<ESortByValue>(ESortByValue.CODE);

	const fetchTrucks = useCallback(async () => {
		const params: TTruckQueryParams = {
			limit: businessConfig.defaultTruckLimit,
			order: orderBy,
			sort: sortBy,
		}
		try {
			const trucks = await truckService.getTrucks(params);
			setTrucks(trucks);
		} catch (error) {
			toast.error('There was a problem fetching trucks. Please try again later.');
			console.error(error)
		}
	}, [orderBy, sortBy, truckService])
	
	const onOrderByChange = (value: string) => {
		setOrderBy(value as EOrderByValue);
		fetchTrucks();
	}
	
	const onSortByChange = (value: string) => {
		setSortBy(value as ESortByValue);
		fetchTrucks();
	}
	
	const orderByValues = useMemo(() => Object.values(EOrderByValue), []);
	const sortByValues = useMemo(() => Object.values(ESortByValue), []);

	return (
		<>
			<div
				className={'flex items-center justify-between'}
			>
				<div
					className={'flex items-center'}
				>
					<DropdownButton
						onValueChange={onOrderByChange}
						value={orderBy}
						title={'Order By'}
						id={'order-by'}
						options={orderByValues}
					/>
					<div className={'w-2'}></div>
					<DropdownButton
						onValueChange={onSortByChange}
						value={sortBy}
						title={'Sort By'}
						id={'sort-by'}
						options={sortByValues}
					/>
				</div>
				<MainButton
					href={'/erp/trucks/create'}
					theme={EMainButtonTheme.PRIMARY}
					icon={PlusIcon}
				>
					Add Truck
				</MainButton>
			</div>
			<div className={classNames(
				'mt-3 p-4 font-light rounded-xl text-sm bg-white dark:bg-neutral-800',
				'border border-neutral-200 dark:border-neutral-700 shadow-sm',
			)}>
				<table className={ 'w-full' }>
					<thead className={ classNames(
						'uppercase text-left tracking-wider text-xs rounded-xl text-neutral-500',
						'dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-700',
					) }>
					<tr>
						<th className={ 'rounded-tl-md rounded-bl-md pl-3 pr-2 py-3' }>Id</th>
						<th className={ 'px-2' }>Code</th>
						<th className={ 'px-2' }>Name</th>
						<th className={ 'px-2' }>Status</th>
						<th className={ 'px-2' }>Description</th>
						<th className={ 'px-2 rounded-tr-md rounded-br-md' }>Options</th>
					</tr>
					</thead>
					<tbody>
					{ trucks.map(truck => (
						<tr key={ truck.id }>
							<td className={'pl-3 pr-2 py-2'}>{ truck.id }</td>
							<td className={'p-2'}>{ truck.code }</td>
							<td className={'p-2'}>{ truck.name }</td>
							<td className={'p-2'}>
								<StatusBadge>
									{ truck.status }
								</StatusBadge>
							</td>
							<td className={'p-2'}>{ truck.description || '–' }</td>
							<td className={'p-2 space-x-2 flex items-center'}>
								<MainButton
									theme={EMainButtonTheme.NEUTRAL}
									href={`/erp/trucks/delete/${truck.id}`}
								>
									Delete
								</MainButton>
								<MainButton
									theme={EMainButtonTheme.NEUTRAL}
									href={`/erp/trucks/edit/${truck.id}`}
								>
									Edit
								</MainButton>
							</td>
						</tr>
					)) }
					</tbody>
				</table>
			</div>
		</>
	);
};
