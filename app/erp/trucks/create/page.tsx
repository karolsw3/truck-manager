'use server'

import { permanentRedirect } from 'next/navigation'

export default async function Page() {
	/*
		Creating trucks is only supposed to happen in a modal at this time.
		When the app grows, this should change.
	*/
	permanentRedirect('/erp/trucks')
}
