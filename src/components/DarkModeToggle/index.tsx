'use client'

import SunIcon from '@/src/assets/icons/sun.svg'
import MoonIcon from '@/src/assets/icons/moon.svg'
import { useDarkMode } from '@/src/hooks/useDarkMode'
import classNames from 'classnames'
import Image from 'next/image'

export const DarkModeToggle = () => {
	const { isUsingDarkMode, toggleDarkMode } = useDarkMode();

	return (
		<button
			aria-label={isUsingDarkMode ? 'Disable Dark Mode' : 'Enable Dark Mode'}
			className={classNames(
				"flex items-center justify-center px-2 py-2 cursor-pointer",
				'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-neutral-400 focus:dark:border-neutral-400',
				'cursor-pointer hover:opacity-50 duration-100 rounded-xl',
			)}
			onClick={toggleDarkMode}
		>
			<Image
				src={isUsingDarkMode ? MoonIcon : SunIcon}
				alt={'Toggle Dark Mode'}
				width={20}
				className={'invert'}
			/>
		</button>
	)
}
