import { ETruckStatus } from '@/src/enums/ETruckStatus'

export type TTruck = {
  id: number;
  code: string;
  name: string;
  status: ETruckStatus;
  description?: string;
}
