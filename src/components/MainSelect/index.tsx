import { DetailedHTMLProps, SelectHTMLAttributes } from 'react'
import { FieldValues, Path, UseFormRegister } from 'react-hook-form'
import classNames from 'classnames'

type MainSelectProps<T extends FieldValues> = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> & {
	register: UseFormRegister<T>;
	label: Path<T>;
	options: string[];
}
export const MainSelect = <T extends FieldValues, >({ label, register, options, ...selectProps}: MainSelectProps<T>) => {
	return (
		<div>
			<label
				htmlFor={selectProps.id}
				className={'text-xs mb-1'}
			>
				{label as string}
					{selectProps.required && (
						<span>
							*
						</span>
					)}
			</label>
			<div
				className={classNames(
					'w-full border border-neutral-300 dark:border-neutral-600',
					'rounded-xl bg-white dark:bg-neutral-800 pr-4 text-sm',
					'focus:outline-offset-2 focus:border-neutral-400 focus:dark:border-neutral-400'
				)}
			>
				<select
					className={'w-full pl-3 py-2 bg-transparent rounded-xl'}
					id={selectProps.id}
					{...register(label, { required: selectProps.required })}
					{...selectProps}
				>
					{options.map(option => (
						<option
							key={option}
							value={option}
						>
							{option}
						</option>
					))}
				</select>
			</div>
		</div>
	)
}
