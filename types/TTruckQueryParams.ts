import {TTruck} from "@/types/TTruck";
import {ESortByValue} from "@/enums/ESortByValue";
import {EOrderByValue} from "@/enums/EOrderByValue";

export type TTruckQueryParams = Partial<TTruck> & {
  sortBy?: ESortByValue;
  orderBy?: EOrderByValue;
  limit?: number;
}
