import { MainModal } from '@/src/components/MainModal'
import { CreateNewTruckForm } from '@/src/components/forms/CreateNewTruckForm'
import { MainButton } from '@/src/components/MainButton'
import { EMainButtonTheme } from '@/src/enums/EMainButtonTheme'

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
			<CreateNewTruckForm />
		</MainModal>
	)
}
