import ChevronDownIcon from '@/src/assets/icons/chevron-down.svg'
import CheckIcon from '@/src/assets/icons/check.svg'
import { DropdownButtonProps } from '@/src/components/DropdownButton/index'
import Image from 'next/image'
import classNames from 'classnames'

type DropdownButtonViewProps = DropdownButtonProps & {
	buttonId: string;
	dropdownId: string;
	openDropdown: () => void;
	dropdownRef: React.RefObject<HTMLDivElement>;
}

export const DropdownButtonView = (props: DropdownButtonViewProps) => {
	const {
		value,
		onValueChange,
		buttonId,
		dropdownId,
		openDropdown,
		dropdownRef ,
		title
	} = props;
	return (
		<>
			<button
				id={buttonId}
				className={classNames(
					'flex justify-between items-center',
					'pl-3 pr-2 py-1 rounded-lg text-xs shadow-sm font-medium',
					'bg-white dark:bg-neutral-800 border border-gray-300 dark:border-neutral-700',
					'hover:bg-neutral-50 hover:dark:bg-neutral-700 duration-100',
					'active:opacity-50 focus relative'
				)}
				onClick={openDropdown}
			>
				{value && (
					<span
						className={'absolute left-0 ml-1 w-1 h-1 bg-black dark:bg-white rounded-full'}
					>
					</span>
				)}
				{title}
				<Image
					src={ChevronDownIcon}
					alt={''}
					width={14}
					className={'ml-1 dark:invert'}
				/>
			</button>
			<div
				key={dropdownId}
				ref={dropdownRef}
				id={dropdownId}
				className={'mt-2 absolute hidden min-w-48'}
			>
				<ul
					className={classNames(
						'bg-white dark:bg-neutral-800 border border-gray-300 dark:border-neutral-700',
						'shadow-lg rounded-lg p-1 w-full'
					)}
				>
					{props.options.map(option => (
						<li
							key={option}
							className={'mb-1 last:mb-0'}
						>
							<button
								className={classNames(
									'flex items-center justify-between',
									'px-2 py-1 w-full rounded-md text-left text-sm',
									option === value && 'bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 font-semibold',
									option !== value && 'text-neutral-700 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-700 duration-100',
									'active:opacity-75'
								)}
								onClick={() => onValueChange(option)}
							>
								{option}
								{option === value && (
									<Image
										src={CheckIcon}
										alt={''}
										width={14}
										className={'ml-1 dark:invert'}
									/>
								)}
							</button>
						</li>
					))}
					{value && (
						<li>
							<button
								onClick={ () => onValueChange('') }
								className={ 'text-sm text-blue-500 hover:underline px-2 py-1 w-full text-left' }
							>
								Clear selection
							</button>
						</li>
					) }
				</ul>
			</div>
		</>
	)
}
