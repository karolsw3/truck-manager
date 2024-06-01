'use client'

import { MainModal } from '@/src/components/MainModal'
import { MainButton } from '@/src/components/MainButton'
import { EMainButtonTheme } from '@/src/enums/EMainButtonTheme'
import { EditTruckForm } from '@/src/components/forms/EditTruckForm'
import {
	useEffect,
	useMemo,
	useState
} from 'react'
import { TTruck } from '@/src/types/TTruck'
import { toast } from 'sonner'
import { getTruckById } from '@/src/actions/trucks'

type PageProps = {
	params: {
		id: number;
	}
}

export default function Page ({ params }: PageProps) {
	const { id } = params
	const [truckData, setTruckData] = useState<TTruck | null>(null)

	/* We need to re-fetch the individual truck's data
	 * to ensure we have the whole truck object
	* */
	useEffect(() => {
		getTruckById(id).then(truck => {
			setTruckData(truck)
		}).catch(() => {
			toast.error('There was a problem fetching truck data. Please try again later.')
		})
	}, [id])
	return (
		<MainModal
			title={'Edit Truck'}
			footerContent={(
				<MainButton
					type={'submit'}
					form={'editTruckForm'}
					theme={EMainButtonTheme.PRIMARY}
				>
					{'Edit'}
				</MainButton>
			)}
		>
			{(closeModal) => (
				truckData ? (
					<EditTruckForm
						truckData={truckData}
						onSubmitSuccess={closeModal}
					/>
				): (
					<div
						className={'h-80'}
					>
						<p>{'Loading...'}</p>
					</div>
				)
			) }
		</MainModal>
	)
}
