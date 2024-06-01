'use client'

/*
	This client component assumes the height of the top navbar.
	Used to provide a padding at the top of the layout.
* */
import { useLayoutStore } from '@/src/hooks/useLayoutStore'

export const TopNavbarHeight = () => {
	const topNavbarHeight = useLayoutStore((state) => state.topNavbarHeight)
	return (
		<div
			className={'w-full bg-transparent shrink-0'}
			style={{
				height: topNavbarHeight
			}}
		/>
	)
}
