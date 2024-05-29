import { MainModal } from '@/src/components/MainModal'
import { MainInput } from '@/src/components/MainInput'
import { CreateNewTruckForm } from '@/src/components/forms/CreateNewTruckForm'

export default function Page () {
	return (
		<MainModal title={'Create New Truck'}>
			<CreateNewTruckForm />
		</MainModal>
	)
}
