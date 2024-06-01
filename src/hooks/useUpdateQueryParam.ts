import { useSearchParams } from 'next/navigation'
import { useCallback } from 'react'

export function useUpdateQueryParam() {
	const searchParams = useSearchParams();
	
	return useCallback((key: string, value: string) => {
		const urlSearchParams = new URLSearchParams(searchParams.toString());
		urlSearchParams.set(key, value);
		return `${location.pathname}?${urlSearchParams.toString()}`;
	}, [searchParams]);
}
