'use client'

import { MainModal } from '@/src/components/MainModal'
import { MainButton } from '@/src/components/MainButton'
import { EMainButtonTheme } from '@/src/enums/EMainButtonTheme'
import { useCallback, useState } from 'react'
import { toast } from 'sonner'
import { TruckService } from '@/src/services/TruckService'

type PageProps = {
	params: {
		id: number;
	}
}
export default function Page ({ params }: PageProps) {
	const { id } = params
	const [truckService] = useState(() => new TruckService());
	const handleDeleteTruck = useCallback(async (truckId: number) => {
		try {
			await truckService.deleteTruck(truckId);
			toast.success('Truck deleted successfully.');
		} catch (error) {
			toast.error('There was a problem deleting the truck. Please try again later.');
		}
	}, [truckService])
	return (
		<MainModal
			title={`Delete Truck`}
			footerContent={(
				<MainButton
					theme={EMainButtonTheme.PRIMARY}
					onClick={() => handleDeleteTruck(id)}
				>
					Delete
				</MainButton>
			)}
		>
			{() => (
				<>
					<p>Are you sure you want to delete this truck?</p>
				</>
			)}
		</MainModal>
	)
}
