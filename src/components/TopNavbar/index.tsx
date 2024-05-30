'use client'

import { DarkModeToggle } from '@/src/components/DarkModeToggle'
import classNames from 'classnames'
import Link from 'next/link'
import { useLayoutEffect, useRef } from 'react'
import { useLayoutStore } from '@/src/hooks/useLayoutStore'

export const TopNavbar = () => {
	const setTopNavbarHeight = useLayoutStore((state) => state.setTopNavbarHeight);
	const navbarRef = useRef<HTMLDivElement | null>(null);
	useLayoutEffect(() => {
		if (navbarRef.current) {
			const topNavbarHeight = navbarRef.current.offsetHeight;
			setTopNavbarHeight(topNavbarHeight);
		}
	}, [setTopNavbarHeight]);

	return (
		<nav
			ref={navbarRef}
			className={classNames(
				'fixed top-0 z-20 w-full bg-neutral-900 text-white',
				'py-2 border-b border-neutral-800'
			)}
		>
			<ul
				className={classNames(
					'mx-auto w-full max-w-container flex items-center justify-between',
				)}
			>
				<li>
					<Link href={'/'}>
						Truck ERP
					</Link>
				</li>
				<li>
					<DarkModeToggle />
				</li>
			</ul>
		</nav>
	)
}
