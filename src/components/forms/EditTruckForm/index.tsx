'use client'

import { MainInput } from '@/src/components/MainInput'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useCallback, useMemo, useState } from 'react'
import { CreateTruckDto } from '@/src/dtos/CreateTruckDto'
import { toast } from 'sonner'
import { MainSelect } from '@/src/components/MainSelect'
import { ETruckStatus } from '@/src/enums/ETruckStatus'
import { TTruck } from '@/src/types/TTruck'
import { UpdateTruckDto } from '@/src/dtos/UpdateTruckDto'
import { updateTruck } from '@/src/actions/trucks'
import { allowedNextTruckStatus } from '@/src/helpers/allowedNextTruckStatus'

type EditTruckFormProps = {
	truckData: TTruck;
	onSubmitSuccess?: () => void;
	onSubmitError?: () => void;
}

export const EditTruckForm = (props: EditTruckFormProps) => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<UpdateTruckDto>({
		defaultValues: props.truckData,
	})
	const onSubmit: SubmitHandler<UpdateTruckDto> = useCallback(async (data) => {
		try {
			await updateTruck(data)
			toast('Truck edited successfully')
			props.onSubmitSuccess?.()
		} catch (error) {
			toast.error('Error updating truck')
			props.onSubmitError?.()
		}
	}, [props])

	// Input with CreateNewTruckInputs type baked-in
	const MainTruckInput = useMemo(() => MainInput<UpdateTruckDto>, [])
	const allowedTruckStatuses = useMemo(() => allowedNextTruckStatus[props.truckData.status], [props.truckData.status])

	return (
		<form
			id={'editTruckForm'}
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
				disabled
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
				options={allowedTruckStatuses}
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
				maxLength={40}
			/>
		</form>
	)
}
