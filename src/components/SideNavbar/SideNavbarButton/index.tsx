import Link from 'next/link'
import classNames from 'classnames'
import { usePathname } from 'next/navigation'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

type SideNavbarButtonProps = {
	children: React.ReactNode
	icon?: StaticImport
	href: string
	disabled?: boolean
}

export const SideNavbarButton = (props: SideNavbarButtonProps) => {
	const pathname = usePathname()
	return (
		<Link
			className={classNames(
				'flex w-full py-2 px-3 rounded-lg text-xs font-medium',
				'items-center',
				pathname === props.href ? 'bg-white dark:bg-neutral-800' : 'bg-transparent hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:bg-opacity-50 hover:dark:bg-opacity-20',
				props.disabled ? 'opacity-40 cursor-not-allowed pointer-events-none' : 'cursor-pointer',
			)}
			href={props.href}
			aria-disabled={props.disabled}
		>
			{props.icon && (
				<Image
					className={'mr-2 dark:invert'}
					src={props.icon}
					width={14}
					alt={''}
				/>
			)}
			{props.children}
		</Link>
	)
}
