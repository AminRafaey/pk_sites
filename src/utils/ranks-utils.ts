import { IRank, Rank } from 'src/shared/models/Rank.model';
/**
 * @description - Ranks ordering according to issued date and then order number.
 * @param ranks - Ranks Array.
 * @returns - Return Ordered ranks.
 */
export function orderRanks(ranks: Rank[] | IRank[]): Rank[] | IRank[] {
  return [...JSON.parse(JSON.stringify(ranks))].sort((a, b) => {
    const date1 = b.graduated ? new Date(b.graduated) : 0;
    const date2 = a.graduated ? new Date(a.graduated) : 0;
    if (a?.orderFromRank && b?.orderFromRank && date1 === 0 && date2 === 0) {
      return b.orderFromRank - a.orderFromRank;
    }
    return +date1 - +date2;
  });
}

