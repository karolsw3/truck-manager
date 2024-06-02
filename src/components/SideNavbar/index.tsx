'use client'

import classNames from 'classnames'
import { useLayoutStore } from '@/src/hooks/useLayoutStore'
import {
	useLayoutEffect,
	useRef
} from 'react'
import { SideNavbarButton } from '@/src/components/SideNavbar/SideNavbarButton'
import TruckIcon from '@/src/assets/icons/truck.svg'
import UserIcon from '@/src/assets/icons/user.svg'
import ArchiveIcon from '@/src/assets/icons/archive.svg'
import SmileIcon from '@/src/assets/icons/smile.svg'

type SideNavbarProps = {}

export const SideNavbar = (props: SideNavbarProps) => {
	const topNavbarHeight = useLayoutStore((state) => state.topNavbarHeight)
	const setSideNavbarWidth = useLayoutStore((state) => state.setSideNavbarWidth)
	const sideNavbarRef = useRef<HTMLDivElement | null>(null)

	useLayoutEffect(() => {
		if (sideNavbarRef.current) {
			const sideNavbarWidth = sideNavbarRef.current?.offsetWidth
			setSideNavbarWidth(sideNavbarWidth)
		}
	}, [setSideNavbarWidth])

	return (
		<nav
			ref={sideNavbarRef}
			aria-label={'Site Menu'}
			className={classNames(
				'hidden lg:block',
				'fixed w-64 bg-neutral-200 bg-opacity-60 dark:bg-neutral-700 dark:bg-opacity-10 px-4 py-8'
			)}
			style={{
				top: topNavbarHeight,
				height: `calc(100% - ${topNavbarHeight}px)`
			}}
		>
			<ul>
				<li>
					<SideNavbarButton
						icon={TruckIcon}
						href={'/erp/trucks'}
					>
						{'Trucks'}
					</SideNavbarButton>
					<SideNavbarButton
						icon={UserIcon}
						href={'/erp/employees'}
						disabled
					>
						{'Employees'}
					</SideNavbarButton>
					<SideNavbarButton
						icon={ArchiveIcon}
						href={'/erp/factory'}
						disabled
					>
						{'Factory'}
					</SideNavbarButton>
					<SideNavbarButton
						icon={SmileIcon}
						href={'/erp/customer'}
						disabled
					>
						{'Customer'}
					</SideNavbarButton>
				</li>
			</ul>
		</nav>
	)
}
