'use client'

/*
	This client component assumes the height of the top navbar
	to provide a padding at the top of the layout.
* */
import { useLayoutStore } from '@/src/hooks/useLayoutStore'

export const DynamicPaddingBlock = () => {
	const topNavbarHeight = useLayoutStore((state) => state.topNavbarHeight);
	return (
		<div
			className={'w-full bg-transparent'}
			style={{
				height: topNavbarHeight
			}}
		/>
	)
}
