'use client'

import { MainInput } from '@/src/components/MainInput'
import {
	SubmitHandler,
	useForm
} from 'react-hook-form'
import {
	useCallback,
	useMemo
} from 'react'
import { CreateTruckDto } from '@/src/dtos/CreateTruckDto'
import { toast } from 'sonner'
import { MainSelect } from '@/src/components/MainSelect'
import { ETruckStatus } from '@/src/enums/ETruckStatus'
import { createTruck } from '@/src/actions/trucks'

type CreateNewTruckFormProps = {
	onSubmitSuccess?: () => void;
	onSubmitError?: () => void;
}

export const CreateNewTruckForm = (props: CreateNewTruckFormProps) => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm<CreateTruckDto>()
	const onSubmit: SubmitHandler<CreateTruckDto> = useCallback(async (data) => {
		try {
			await createTruck(data)
			toast('Truck added successfully')
			props.onSubmitSuccess?.()
		} catch (error) {
			toast.error('Error adding new Truck')
			props.onSubmitError?.()
		}
	}, [props])
	// Input with CreateNewTruckInputs type baked-in
	const MainTruckInput = useMemo(() => MainInput<CreateTruckDto>, [])
	return (
		<form
			id={'createNewTruckForm'}
			onSubmit={handleSubmit(onSubmit)}
			className={'space-y-3'}
		>
			<MainTruckInput
				id={'truckId'}
				value={watch('id') || ''}
				label={'id'}
				placeholder={'405'}
				maxLength={4}
				register={register}
				required
			/>
			<MainTruckInput
				id={'truckName'}
				value={watch('name') || ''}
				label={'name'}
				placeholder={'Mack'}
				register={register}
				maxLength={40}
				required
			/>
			<MainTruckInput
				id={'truckCode'}
				value={watch('code') || ''}
				label={'code'}
				placeholder={'Code'}
				register={register}
				maxLength={40}
				required
			/>
			<MainSelect<CreateTruckDto>
				id={'truckStatus'}
				label={'status'}
				options={Object.keys(ETruckStatus)}
				value={watch('status') || ''}
				register={register}
				required
			/>
			<MainTruckInput
				id={'truckDescription'}
				value={watch('description') || ''}
				label={'description'}
				placeholder={'Description'}
				register={register}
				maxLength={120}
			/>
		</form>
	)
}
