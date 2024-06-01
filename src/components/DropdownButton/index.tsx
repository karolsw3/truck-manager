'use client'
import {
	useCallback,
	useEffect,
	useRef
} from 'react'
import { DropdownButtonView } from '@/src/components/DropdownButton/view'

export type DropdownButtonProps = {
	onValueChange: (value: string) => void;
	value: string;
	title: string;
	id: string;
	options: string[];
}

export const DropdownButton = (props: DropdownButtonProps) => {
	const dropdownRef = useRef<HTMLDivElement | null>(null)
	const openDropdown = useCallback(() => {
		const dropdown = document.getElementById(`dynamic-dropdown-${props.id}`)
		if (dropdown) {
			dropdown.classList.toggle('hidden')
		}
		// Position the dropdown based on the button's position
		const button = document.getElementById(`dynamic-dropdown-button-${props.id}`)
		if (button && dropdown) {
			const rect = button.getBoundingClientRect()
			dropdown.style.left = `${rect.left}px`
			dropdown.style.top = `${rect.bottom}px`
		} else {
			console.error('Could not find button or dropdown to position')
		}
	}, [props.id])

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				const dropdown = document.getElementById(`dynamic-dropdown-${props.id}`)
				if (dropdown && !dropdown.classList.contains('hidden')) {
					dropdown.classList.add('hidden')
				}
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [props.id])

	return (
		<DropdownButtonView
			openDropdown={openDropdown}
			buttonId={`dynamic-dropdown-button-${props.id}`}
			dropdownId={`dynamic-dropdown-${props.id}`}
			dropdownRef={dropdownRef}
			{...props}
		/>
	)
}
