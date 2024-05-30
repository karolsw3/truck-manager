'use server'

import { permanentRedirect } from 'next/navigation'

export default async function Page() {
	permanentRedirect('/erp/trucks')
}
