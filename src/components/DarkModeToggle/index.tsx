'use client'

import { useDarkMode } from '@/src/hooks/useDarkMode'

export const DarkModeToggle = () => {
	const { isUsingDarkMode, toggleDarkMode } = useDarkMode();

	return (
		<div className="flex items-center justify-center">
			<input
				type="checkbox"
				aria-label={isUsingDarkMode ? "Disable dark mode" : "Enable dark mode"}
				className="toggle-checkbox"
				id="toggle"
				checked={isUsingDarkMode}
				onChange={toggleDarkMode}
			/>
			<label htmlFor="toggle" className="toggle-label" />
		</div>
	)
}
