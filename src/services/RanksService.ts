/* eslint-disable import/no-cycle */
/* eslint-disable class-methods-use-this */
import { getTableInstance, TABLES } from './Airtable';

const table = getTableInstance(TABLES.RANK);

class RanksService {
  /**
   * @description - get Profile after send page to browser.
   * @param username - Username.
   * @returns - Return user profile basic data like username and avatar.
   */

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type

  async getRank(username: string): Promise<any> {
    try {
      const records = await table
        .select({ filterByFormula: `{Username} = '${username}'` })
        .all();

      if (!records || records.length === 0) {
        return [];
      }
      return records;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default new RanksService();
