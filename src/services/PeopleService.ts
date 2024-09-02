/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable class-methods-use-this */
import { formattedResponse } from 'src/utils/airtable-utils';
import { orderRanks } from 'src/utils/ranks-utils';
import { TABLES, getTableInstance } from './Airtable';
import RanksService from './RanksService';

const table = getTableInstance(TABLES.PEOPLE);

class PeopleService {
  /**
   * @description - get Profile after send page to browser.
   * @param username - Username.
   * @returns - Return user profile basic data like username and avatar.
   */

  async getUser(username: string) {
    try {
      const records = await table
        .select({ filterByFormula: `{username} = '${username}'` })
        .all();
      return records;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getMasterDetail({ value }: { value: string; }) {
    const finalResponse = [];
    let details: any;
    let ranks: any;

    try {
      const query = `TRIM(LOWER({${'Username'}})) = '${value}'`;
      finalResponse.push(
        table.select({ filterByFormula: query }).all(),
      );

      finalResponse.push(
        RanksService.getRank(value)
      );

      await Promise.all(finalResponse).then((res) => {
        details = res[0]
        ranks = res[1]
      })

      const finalDataDetailInstructor = formattedResponse(details);
      const finalRanksInstructor = formattedResponse(ranks);

      const orderRank = orderRanks(finalRanksInstructor);
      return { instructorRankData: orderRank?.[0], instructorDetail: finalDataDetailInstructor?.[0] };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getUserBySearch(searchQuery: string): Promise<any> {
    try {
      let query =
        'AND( {Email} != "", {Username} != "", {Firebase ID} != "", {Firebase ID} != "User id to link user to firebase", {First Name} != "", {Last Name} != "" )';
      if (searchQuery) {
        query = `AND(OR(SEARCH("${searchQuery
          .toLocaleLowerCase()
          .trim()}", TRIM(LOWER({Username}))), SEARCH("${searchQuery
            .toLocaleLowerCase()
            .trim()}", TRIM(LOWER({Display Name}))), SEARCH("${searchQuery
              .toLocaleLowerCase()
              .trim()}", TRIM(LOWER({Email}))) ), {Email} != "", {Username} != "", {Firebase ID} != "", {Firebase ID} != "User id to link user to firebase", {First Name} != "", {Last Name} != "" )`;
      }
      const records: any = await table
        .select({
          filterByFormula: query,
        })
        .firstPage();
      return formattedResponse(records);
    } catch (error) {
      console.log(error);
      return [];
    }
  }
}

export default new PeopleService();
