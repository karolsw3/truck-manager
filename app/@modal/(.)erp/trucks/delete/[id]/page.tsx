'use client'

import { MainModal } from '@/src/components/MainModal'
import { MainButton } from '@/src/components/MainButton'
import { EMainButtonTheme } from '@/src/enums/EMainButtonTheme'
import { useCallback, useState } from 'react'
import { toast } from 'sonner'
import { deleteTruck } from '@/src/actions/trucks'

type PageProps = {
	params: {
		id: number;
	}
}
export default function Page ({ params }: PageProps) {
	const { id } = params
	const handleDeleteTruck = useCallback(async (truckId: number) => {
		try {
			await deleteTruck(truckId);
			toast.success('Truck deleted successfully.');
		} catch (error) {
			toast.error('There was a problem deleting the truck. Please try again later.');
		}
	}, [])
	return (
		<MainModal
			title={`Delete Truck`}
			footerContent={(
				<MainButton
					theme={EMainButtonTheme.PRIMARY}
					type={'submit'}
					form={'deleteTruckForm'}
				>
					Delete
				</MainButton>
			)}
		>
			{(closeModal) => (
				<form
					id={'deleteTruckForm'}
					onSubmit={() => {
						handleDeleteTruck(id)
						closeModal()
					}}
				>
					<p>Are you sure you want to delete this truck?</p>
				</form>
			)}
		</MainModal>
	)
}
