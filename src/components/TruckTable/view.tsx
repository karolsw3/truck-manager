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
import ArrowRightIcon from '@/src/assets/icons/arrow-right.svg'
import ArrowLeftIcon from '@/src/assets/icons/arrow-left.svg'

type TruckTableViewProps = {
	initialTrucksValue: TTruck[];
	page?: number;
	orderBy?: string | null;
	sortBy?: string | null;
}

export const TruckTableView = (props: TruckTableViewProps) => {
	const updateQueryParam = useUpdateQueryParam()
	const router = useRouter()
	const {
		initialTrucksValue,
		orderBy,
		sortBy ,
		page = 1
	} = props;
	const [trucks, setTrucks] = useState<TTruck[]>(initialTrucksValue);
	
	const incrementPage = useCallback(() => {
		const nextPageString = (page + 1).toString()
		router.replace(updateQueryParam('page', nextPageString))
	}, [page, router, updateQueryParam])
	
	const decrementPage = useCallback(() => {
		const nextPageString = (page - 1).toString()
		router.replace(updateQueryParam('page', nextPageString))
	}, [page, router, updateQueryParam])

	const fetchTrucks = useCallback(async () => {
		const params: TTruckQueryParams = {
			limit: businessConfig.defaultTruckLimit,
			order: orderBy as EOrderByValue,
			sort: sortBy as ESortByValue,
			page
		}
		try {
			const trucks = await getTrucks(params);
			setTrucks(trucks);
		} catch (error) {
			toast.error('There was a problem fetching trucks. Please try again later.');
			console.error(error)
		}
	}, [orderBy, page, sortBy])
	
	const onOrderByChange = (value: string) => {
		router.replace(updateQueryParam('orderBy', value))
	}
	
	const onSortByChange = (value: string) => {
		router.replace(updateQueryParam('sortBy', value))
	}

	useEffect(() => {
		fetchTrucks()
	}, [fetchTrucks, orderBy, sortBy, page])
	
	const orderByValues = useMemo(() => Object.values(EOrderByValue), []);
	const sortByValues = useMemo(() => Object.values(ESortByValue), []);

	return (
		<>
			<div
				className={ 'flex items-center justify-between' }
			>
				<div
					className={ 'flex items-center' }
				>
					<DropdownButton
						onValueChange={ onSortByChange }
						value={ sortBy as string }
						title={ 'Sort By' }
						id={ 'sort-by' }
						options={ sortByValues }
					/>
					<div className={ 'w-2' }></div>
					<DropdownButton
						onValueChange={ onOrderByChange }
						value={ orderBy as string }
						title={ 'Order By' }
						id={ 'order-by' }
						options={ orderByValues }
					/>
				</div>
				<MainButton
					href={ '/erp/trucks/create' }
					theme={ EMainButtonTheme.PRIMARY }
					icon={ PlusIcon }
				>
					Add Truck
				</MainButton>
			</div>
			<div className={ classNames(
				'mt-3 p-4 font-light rounded-xl text-sm bg-white dark:bg-neutral-800',
				'border border-neutral-200 dark:border-neutral-700 shadow-sm',
			) }>
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
							<td className={ 'pl-3 pr-2 py-2' }>{ truck.id }</td>
							<td className={ 'p-2' }>{ truck.code }</td>
							<td className={ 'p-2' }>{ truck.name }</td>
							<td className={ 'p-2' }>
								<StatusBadge>
									{ normalizeScreamingSnakeCase(truck.status) }
								</StatusBadge>
							</td>
							<td className={ 'p-2' }>{ truck.description || '–' }</td>
							<td className={ 'p-2 space-x-2 flex items-center' }>
								<MainButton
									theme={ EMainButtonTheme.BORDERLESS }
									href={ `/erp/trucks/edit/${ truck.id }` }
								>
									Edit
								</MainButton>
								<MainButton
									theme={ EMainButtonTheme.BORDERLESS }
									href={ `/erp/trucks/delete/${ truck.id }` }
								>
									Delete
								</MainButton>
							</td>
						</tr>
					)) }
					</tbody>
				</table>
			</div>
			<div
				className={'w-full flex mx-auto mt-4 justify-between items-center'}
			>
				<MainButton
					onClick={decrementPage}
					icon={ArrowLeftIcon}
					theme={EMainButtonTheme.NEUTRAL}
					disabled={page === 1}
				>
					Previous Page
				</MainButton>
				<p
					className={'text-xs text-neutral-500 dark:text-neutral-300'}
				>
					Page {page}
				</p>
				<MainButton
					onClick={incrementPage}
					icon={ArrowRightIcon}
					theme={EMainButtonTheme.NEUTRAL}
				>
					Next Page
				</MainButton>
			</div>
		</>
	);
};
