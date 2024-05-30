import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface LayoutState {
	topNavbarHeight: number
	sideNavbarWidth: number
	setTopNavbarHeight: (height: number) => void
	setSideNavbarWidth: (width: number) => void
}

export const useLayoutStore = create<LayoutState>()(
	devtools(
		persist(
			(set) => ({
				topNavbarHeight: 0,
				sideNavbarWidth: 0,
				setTopNavbarHeight: (height: number) => set({ topNavbarHeight: height }),
				setSideNavbarWidth: (width: number) => set({ sideNavbarWidth: width }),
			}),
			{
				name: 'layout-storage',
			},
		),
	),
)
