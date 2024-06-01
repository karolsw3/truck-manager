import TruckTable from '@/src/components/TruckTable'
import { Suspense } from 'react'
import TruckTableLoading from '@/src/components/TruckTable/loading'

type PageProps = {
  searchParams: {
    page: string | null;
    sortBy: string | null;
    orderBy: string | null;
  }
}
export default async function Page({ searchParams }: PageProps) {
  return (
    <div>
      <Suspense fallback={<TruckTableLoading />}>
        <TruckTable
          {...searchParams}
        />
      </Suspense>
    </div>
  );
}
