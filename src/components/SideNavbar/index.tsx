'use client'

import Link from 'next/link'
import classNames from 'classnames'
import { useLayoutStore } from '@/src/hooks/useLayoutStore'

type SideNavbarProps = {}
export const SideNavbar = (props: SideNavbarProps) => {
	const topNavbarHeight = useLayoutStore((state) => state.topNavbarHeight);

	return (
		<nav
			aria-label={'Site Menu'}
			className={classNames(
				'fixed w-64 bg-neutral-200 dark:bg-neutral-700 p-4'
			)}
			style={{
				top: topNavbarHeight,
				height: `calc(100% - ${topNavbarHeight}px)`
			}}
		>
			<ul>
				<li>
					<Link href={'/erp/trucks'}>
						Trucks
					</Link>
				</li>
			</ul>
		</nav>
	)
}
