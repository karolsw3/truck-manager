'use client'
import classNames from 'classnames'
import Link from 'next/link'
import { ButtonHTMLAttributes, useMemo } from 'react'
import Image from 'next/image'
import * as React from 'react'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

type MainButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	children: React.ReactNode;
	icon?: string | StaticImport;
	href?: string;
}
export const MainButton = ({ children, href, icon, ...buttonProps }: MainButtonProps) => {
	const buttonClassNames = useMemo(() => classNames(
		'flex items-center justify-between',
		'rounded-lg pl-3 py-1 shadow-sm text-xs font-medium',
		'bg-neutral-800 text-white dark:bg-white dark:text-neutral-800',
		'hover:bg-neutral-700 hover:dark:bg-neutral-100 duration-100',
		'active:opacity-50 focus:ring-2 ring-blue-500 ring-offset-1',
		'border border-neutral-700 dark:border-white',
		icon ? 'pr-2' : 'pr-3'
	), [icon])
	if (href) {
		return (
			<Link href={href}>
				<button
					className={buttonClassNames}
					{...buttonProps}
				>
					{children}
					{icon && (
						<Image
							src={icon}
							className={'invert dark:invert-0 ml-1'}
							alt={''}
							width={14}
						/>
					)}
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
			{icon && (
				<Image
					src={icon}
					className={'invert dark:invert-0 ml-1'}
					alt={''}
					width={14}
				/>
			)}
		</button>
	)
}
