import TruckTable from '@/src/components/TruckTable'
import { Suspense } from 'react'
import TruckTableLoading from '@/src/components/TruckTable/loading'

export default async function Page() {
  return (
    <div>
      <Suspense fallback={<TruckTableLoading />}>
        <TruckTable />
      </Suspense>
    </div>
  );
}
