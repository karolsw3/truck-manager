'use client'
import { MainInput } from '@/src/components/MainInput'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useCallback, useMemo } from 'react'
import { CreateTruckDto } from '@/src/dtos/CreateTruckDto'
import { EMainButtonTheme, MainButton } from '@/src/components/MainButton'

export const CreateNewTruckForm = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<CreateTruckDto>()
	const onSubmit: SubmitHandler<CreateTruckDto> = useCallback((data) => {
		console.log(data)
	}, [])

	// Input with CreateNewTruckInputs type baked-in
	const MainTruckInput = useMemo(() => MainInput<CreateTruckDto>, [])

	return (
		<form
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
			<MainTruckInput
				id={'truckStatus'}
				value={watch('status') || ''}
				label={'status'}
				placeholder={'Status'}
				register={register}
				maxLength={40}
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
			<MainButton
				type={'submit'}
				theme={EMainButtonTheme.PRIMARY}
			>
				Submit
			</MainButton>
		</form>
	)
}
