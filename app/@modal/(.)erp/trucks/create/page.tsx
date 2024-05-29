'use client'

import { MainModal } from '@/src/components/MainModal'
import { MainButton } from '@/src/components/MainButton'
import { EMainButtonTheme } from '@/src/enums/EMainButtonTheme'
import { CreateNewTruckForm } from '@/src/components/forms/CreateNewTruckForm'

export default function Page () {
	return (
		<MainModal
			title={'Create New Truck'}
			footerContent={(
				<MainButton
					type={'submit'}
					form={'createNewTruckForm'}
					theme={EMainButtonTheme.PRIMARY}
				>
					Submit
				</MainButton>
			)}
		>
			{(closeModal) => (
				<CreateNewTruckForm
					onSubmitSuccess={closeModal}
				/>
			)}
		</MainModal>
	)
}
