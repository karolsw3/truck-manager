'use client'

import * as React from 'react'
import { useCallback, useEffect, useMemo, useState } from 'react'
import PlusIcon from '@/src/assets/icons/plus.svg'
import { TTruck } from '@/src/types/TTruck'
import { StatusBadge } from '@/src/components/StatusBadge'
import classNames from 'classnames'
import { DropdownButton } from '@/src/components/DropdownButton'
import { EOrderByValue } from '@/src/enums/EOrderByValue'
import { ESortByValue } from '@/src/enums/ESortByValue'
import { TTruckQueryParams } from '@/src/types/TTruckQueryParams'
import { businessConfig } from '@/businessConfig'
import { MainButton } from '@/src/components/MainButton'
import { EMainButtonTheme } from '@/src/enums/EMainButtonTheme'
import { toast } from 'sonner'
import { getTrucks } from '@/src/actions/trucks'
import { normalizeScreamingSnakeCase } from '@/src/helpers/normalizeScreamingSnakeCase'
import { useUpdateQueryParam } from '@/src/hooks/useUpdateQueryParam'
import { redirect, useRouter } from 'next/navigation'

type TruckTableViewProps = {
	initialTrucksValue: TTruck[];
	orderBy?: string | null;
	sortBy?: string | null;
}

export const TruckTableView = (props: TruckTableViewProps) => {
	const updateQueryParam = useUpdateQueryParam()
	const router = useRouter()
	const { initialTrucksValue, orderBy, sortBy } = props;
	const [trucks, setTrucks] = useState<TTruck[]>(initialTrucksValue);

	const fetchTrucks = useCallback(async () => {
		const params: TTruckQueryParams = {
			limit: businessConfig.defaultTruckLimit,
			order: orderBy as EOrderByValue,
			sort: sortBy as ESortByValue,
		}
		try {
			const trucks = await getTrucks(params);
			setTrucks(trucks);
		} catch (error) {
			toast.error('There was a problem fetching trucks. Please try again later.');
			console.error(error)
		}
	}, [orderBy, sortBy])
	
	const onOrderByChange = (value: string) => {
		router.replace(updateQueryParam('orderBy', value))
	}
	
	const onSortByChange = (value: string) => {
		router.replace(updateQueryParam('sortBy', value))
	}
	
	useEffect(() => {
		// Re-fetch trucks when orderBy or sortBy changes
		fetchTrucks()
	}, [fetchTrucks, orderBy, sortBy])
	
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
						value={orderBy as string}
						title={'Order By'}
						id={'order-by'}
						options={orderByValues}
					/>
					<div className={'w-2'}></div>
					<DropdownButton
						onValueChange={onSortByChange}
						value={sortBy as string}
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
									{ normalizeScreamingSnakeCase(truck.status) }
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
