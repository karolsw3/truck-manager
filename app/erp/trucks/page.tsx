import TruckTable from '@/src/components/TruckTable'
import { Suspense } from 'react'
import TruckTableLoading from '@/src/components/TruckTable/loading'
import { DropdownButton } from '@/src/components/DropdownButton'
import { ESortByValue } from '@/src/enums/ESortByValue'

export default async function TruckPage() {

  return (
    <div>
      <Suspense fallback={<TruckTableLoading />}>
        <TruckTable />
      </Suspense>
    </div>
  );
}
