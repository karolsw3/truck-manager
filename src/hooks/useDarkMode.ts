import { useCallback, useEffect } from 'react'
import { useLocalStorage } from 'usehooks-ts'

export const useDarkMode = () => {
	const [isUsingDarkMode, saveIsUsingDarkMode] = useLocalStorage("isUsingDarkMode", false);
	
	useEffect(() => {
		if (isUsingDarkMode) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [isUsingDarkMode])
	
	const toggleDarkMode = useCallback(() => {
		saveIsUsingDarkMode(!isUsingDarkMode);
	}, [isUsingDarkMode, saveIsUsingDarkMode])
	
	return { isUsingDarkMode, toggleDarkMode };
}
