import classNames from 'classnames'

export enum StatusBadgeColor {
	NEUTRAL = 'neutral',
	RED = 'red',
	GREEN = 'green',
}

export type StatusBadgeProps = {
	statusBadgeColor?: StatusBadgeColor;
	children: string;
}

const statusBadgeClassnamesByColor = {
	[StatusBadgeColor.NEUTRAL]: 'bg-neutral-100 text-neutral-800 border border-neutral-300 dark:bg-neutral-800 dark:text-neutral-100 dark:border-neutral-700',
	[StatusBadgeColor.RED]: 'bg-red-500',
	[StatusBadgeColor.GREEN]: 'bg-green-500'
}

export const StatusBadge = (props: StatusBadgeProps) => {
	const { statusBadgeColor = StatusBadgeColor.NEUTRAL } = props
	return (
		<div
			className={classNames(
				statusBadgeClassnamesByColor[statusBadgeColor],
				'rounded-full px-3 py-1 text-xs font-medium',
				'text-center capitalize whitespace-nowrap'
			)}
		>
			<p>{props.children}</p>
		</div>
	)
}
