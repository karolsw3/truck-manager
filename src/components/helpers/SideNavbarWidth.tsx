'use client'

/*
	This client component assumes the width of the side navbar.
	Used to provide a padding at the left of the layout.
* */
import { useLayoutStore } from '@/src/hooks/useLayoutStore'

export const SideNavbarWidth = () => {
	const sideNavbarWidth = useLayoutStore((state) => state.sideNavbarWidth);
	return (
		<div
			className={'h-full bg-transparent shrink-0'}
			style={{
				width: sideNavbarWidth
			}}
		/>
	)
}
