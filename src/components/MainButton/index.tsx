'use client'
import classNames from 'classnames'
import Link from 'next/link'
import { ButtonHTMLAttributes, useMemo } from 'react'

type MainButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	children: React.ReactNode;
	href?: string;
}
export const MainButton = ({ children, href, ...buttonProps }: MainButtonProps) => {
	const buttonClassNames = useMemo(() => classNames(
		'flex items-center justify-between',
		'rounded-lg pl-3 pr-2 py-1 shadow-sm text-xs font-medium',
		'bg-neutral-800 text-white dark:bg-white dark:text-neutral-800',
		'hover:bg-neutral-700 hover:dark:bg-neutral-100 duration-100',
		'active:opacity-50 focus:ring-2 ring-blue-500 ring-offset-1',
		'border border-neutral-700 dark:border-white'
	), [])
	if (href) {
		return (
			<Link href={href}>
				<button
					className={buttonClassNames}
					{...buttonProps}
				>
					{children}
				</button>
			</Link>
		)
	}
	return (
		<button
			className={buttonClassNames}
			{...buttonProps}
		>
			{children}
		</button>
	)
}
