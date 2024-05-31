'use client'

import classNames from 'classnames'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import XIcon from '@/src/assets/icons/x.svg'
import { MainButton } from '@/src/components/MainButton'
import { EMainButtonTheme } from '@/src/enums/EMainButtonTheme'

type MainModalProps = {
	title: string;
	footerContent: React.ReactNode;
	children?: (closeModal: () => void) => React.ReactNode;
}
export const MainModal = (props: MainModalProps) => {
	const router = useRouter()
	const closeModal = () => {
		router.back()
	}

	return (
		<div className={ classNames(
			'fixed top-0 left-0 w-full h-full text-sm',
			'bg-black bg-opacity-60 z-30 flex items-center justify-center',
			'dark:text-neutral-50'
		) }>
			<div
				className={'w-full max-w-2xl bg-white rounded-xl shadow-lg overflow-hidden dark:bg-neutral-800'}
			>
				<div
					className={classNames(
						'pl-5 pr-4 py-4 w-full flex items-center justify-between bg-neutral-100',
						'dark:bg-neutral-700 border-b border-neutral-200 dark:border-neutral-600'
					)}
				>
					<div>
						<b className={'text-neutral-700 dark:text-neutral-100 font-medium'}>
							{props.title}
						</b>
					</div>
					<div>
						<button
							className={classNames(
								'w-8 h-8 rounded-lg bg-neutral-200 dark:bg-neutral-600',
								'flex items-center justify-center',
								'hover:opacity-75 duration-100',
								'active:opacity-50 focus:ring ring-blue-500 ring-offset-1'
							)}
							onClick={closeModal}
						>
							<Image
								src={ XIcon }
								alt={ 'Close Modal' }
								className={'dark:invert invert-0'}
								width={ 16 }
							/>
						</button>
					</div>
				</div>
				<div
					className={'px-5 py-4 bg-white dark:bg-neutral-800'}
				>
					{props.children?.(closeModal)}
				</div>
				<div
					className={classNames(
						'w-full py-4 px-5 flex items-center justify-between',
						'border-t border-neutral-200 dark:border-neutral-700'
					)}
				>
					<div>
					
					</div>
					<div
						className={'space-x-2 items-center flex'}
					>
						<MainButton
							theme={EMainButtonTheme.NEUTRAL}
							onClick={closeModal}
						>
							Cancel
						</MainButton>
						{props.footerContent}
					</div>
				</div>
			</div>
		</div>
	)
}
