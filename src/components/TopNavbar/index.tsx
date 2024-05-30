import { DarkModeToggle } from '@/src/components/DarkModeToggle'
import classNames from 'classnames'
import Link from 'next/link'

export const TopNavbar = () => {
	return (
		<nav
			className={classNames(
				'w-full bg-neutral-900 text-white',
				'py-2 border-b border-neutral-800'
			)}
		>
			<ul
				className={classNames(
					'mx-auto w-full max-w-container flex items-center justify-between',
				)}
			>
				<li>
					<Link href={'/'}>
						Truck ERP
					</Link>
				</li>
				<li>
					<DarkModeToggle />
				</li>
			</ul>
		</nav>
	)
}
