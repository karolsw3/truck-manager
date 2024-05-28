'use client'
import classNames from 'classnames'

type MainButtonProps = {
	children: React.ReactNode;
	onCLick?: () => void;
}
export const MainButton = (props: MainButtonProps) => {
	return (
		<button
			className={classNames(
				'flex items-center justify-between',
				'rounded-lg pl-3 pr-2 py-1 shadow-sm text-xs font-medium',
				'bg-neutral-800 text-white dark:bg-white dark:text-neutral-800',
				'hover:bg-neutral-700 hover:dark:bg-neutral-100 duration-100',
				'active:opacity-50 focus:ring-2 ring-blue-500 ring-offset-1',
				'border border-black dark:border-white',
			)}
			onClick={props.onCLick}
		>
			{props.children}
		</button>
	)
}
