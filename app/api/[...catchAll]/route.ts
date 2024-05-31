import { businessConfig } from '@/businessConfig'

/*
	A special handler used to mask the target URL
	In our case we're using it as the API protocol is http,
	which is a big no-no on Vercel

	In a real case scenario, this wouldn't be a great idea
 */
async function handler(req: Request) {
	const { method, headers } = req;
	try {
		const nextUrl = new URL(req.url as string);
		const pathname = nextUrl.pathname
		// Remove "/api/" from pathname
		const clearPathname = pathname.replace('api/', '')
		const searchParamsString = nextUrl.searchParams.toString() ? `?${nextUrl.searchParams}`:''
		const url = `${businessConfig.trucksApiUrl}${clearPathname}${searchParamsString}`
		let body = null
		try {
			body = JSON.stringify(await req.json())
		} catch {}
		console.log(url)
		console.log(method)
		console.log(body)
		const response = await fetch(url, {
			method,
			headers: { 'Content-Type': 'application/json' },
			body
		});
		const trucks = await response.json()
		return Response.json(trucks);
	} catch (error) {
		console.log(error)
		return new Response('An error occurred', {
			status: 500
		});
	}
}

export async function GET(request: Request) {
	return await handler(request);
}

export async function POST(request: Request) {
	return await handler(request);
}

export async function PUT(request: Request) {
	return await handler(request);
}

export async function DELETE(request: Request) {
	return await handler(request);
}
