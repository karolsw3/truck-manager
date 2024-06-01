'use client'

import classNames from 'classnames'
import Link from 'next/link'
import * as React from 'react'
import {
	ButtonHTMLAttributes,
	useMemo
} from 'react'
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { EMainButtonTheme } from '@/src/enums/EMainButtonTheme'

type MainButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	children: React.ReactNode;
	theme?: EMainButtonTheme;
	icon?: string | StaticImport;
	prefetch?: boolean;
	href?: string;
}

export const MainButton = ({
	children,
	href,
	icon,
	prefetch,
	theme = EMainButtonTheme.NEUTRAL,
	...buttonProps
}: MainButtonProps) => {
	const buttonClassNames = useMemo(() => classNames(
		'flex items-center justify-between duration-100',
		'rounded-lg py-1 text-xs font-medium',
		'active:opacity-50 focus:ring-2 ring-blue-500 ring-offset-1',
		'disabled:opacity-30 disabled:cursor-not-allowed',
		theme === EMainButtonTheme.BORDERLESS && 'hover:underline',
		theme !== EMainButtonTheme.BORDERLESS && 'shadow-sm pl-3 border border-neutral-700 dark:border-white',
		theme === EMainButtonTheme.PRIMARY && 'bg-neutral-800 text-white dark:bg-white dark:text-neutral-800 hover:bg-neutral-700 hover:dark:bg-neutral-100',
		theme === EMainButtonTheme.NEUTRAL && 'bg-white text-neutral-800 dark:bg-neutral-800 dark:text-neutral-100 hover:bg-neutral-200 hover:dark:bg-neutral-700',
		icon && theme !== EMainButtonTheme.BORDERLESS && 'pr-2',
		!icon && theme !== EMainButtonTheme.BORDERLESS && 'pr-3',
	), [icon, theme])
	if (href) {
		return (
			<Link
				href={href}
				prefetch={prefetch}
			>
				<button
					className={buttonClassNames}
					{...buttonProps}
				>
					{children}
					{icon && (
						<Image
							src={icon}
							className={classNames(
								'ml-1',
								theme === EMainButtonTheme.PRIMARY ? 'invert dark:invert-0' : 'invert-0 dark:invert',
							)}
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
					className={classNames(
						'ml-1',
						theme === EMainButtonTheme.PRIMARY ? 'invert dark:invert-0' : 'invert-0 dark:invert',
					)}
					alt={''}
					width={14}
				/>
			)}
		</button>
	)
}
