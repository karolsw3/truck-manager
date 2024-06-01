// Allowed next truck status for a given truck status
import { ETruckStatus } from '@/src/enums/ETruckStatus'

export const allowedNextTruckStatus = {
	[ETruckStatus.OUT_OF_SERVICE]: [ETruckStatus.OUT_OF_SERVICE, ETruckStatus.TO_JOB, ETruckStatus.RETURNING, ETruckStatus.AT_JOB, ETruckStatus.LOADING],
	[ETruckStatus.LOADING]: [ETruckStatus.LOADING, ETruckStatus.TO_JOB, ETruckStatus.OUT_OF_SERVICE],
	[ETruckStatus.TO_JOB]: [ETruckStatus.TO_JOB, ETruckStatus.AT_JOB, ETruckStatus.OUT_OF_SERVICE],
	[ETruckStatus.AT_JOB]: [ETruckStatus.AT_JOB, ETruckStatus.RETURNING, ETruckStatus.OUT_OF_SERVICE],
	[ETruckStatus.RETURNING]: [ETruckStatus.RETURNING, ETruckStatus.LOADING, ETruckStatus.OUT_OF_SERVICE]
}
