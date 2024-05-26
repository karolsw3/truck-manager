import {TTruck} from "@/src/types/TTruck";
import {ESortByValue} from "@/src/enums/ESortByValue";
import {EOrderByValue} from "@/src/enums/EOrderByValue";

export type TTruckQueryParams = Partial<TTruck> & {
  sortBy?: ESortByValue;
  orderBy?: EOrderByValue;
  limit?: number;
}
