'use client'

import {
	ChangeEvent,
	InputHTMLAttributes,
	useMemo,
	useState
} from 'react'
import classNames from 'classnames'
import {
	FieldValues,
	Path,
	UseFormRegister
} from 'react-hook-form'

type MainInputProps<T extends FieldValues> = InputHTMLAttributes<HTMLInputElement> & {
	register: UseFormRegister<T>
	label: Path<T>;
}

export const MainInput = <T extends FieldValues, >({
	label,
	register,
	...inputProps
}: MainInputProps<T>) => {
	const valueLength = useMemo(() => {
		return inputProps.value?.toString().length
	}, [inputProps.value])
	const maxLengthProportion = useMemo(() => {
		return `${valueLength} / ${inputProps.maxLength}`
	}, [valueLength, inputProps.maxLength])

	return (
		<div>
			<label
				htmlFor={inputProps.id}
				className={'text-xs mb-1'}
			>
				{label as string}
				{inputProps.required && (
					<span>
						{'*'}
					</span>
				)}
			</label>
			<div
				className={'relative'}
			>
				<input
					id={inputProps.id}
					className={classNames(
						'w-full border border-neutral-300 dark:border-neutral-600',
						'rounded-xl bg-white dark:bg-neutral-800 pr-4 pl-3 py-2 text-sm',
						'focus:outline-offset-2 focus:border-neutral-400 focus:dark:border-neutral-400',
						'disabled:opacity-50 disabled:cursor-not-allowed'
					)}
					{...register(label, {
						required: inputProps.required
					})}
					{...inputProps}
				/>
				{inputProps.maxLength && (
					<p
						className={classNames(
							'absolute top-0 mt-3 right-0 mr-3 text-xs text-neutral-600 dark:text-neutral-400',
							valueLength == inputProps.maxLength && 'text-red-500 dark:text-red-200'
						)}
					>
						{maxLengthProportion}
					</p>
				)}
			</div>
		</div>
	)
}
