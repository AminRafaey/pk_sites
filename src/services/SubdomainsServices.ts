/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable class-methods-use-this */

import { formattedResponse } from 'src/utils/airtable-utils';
import { TABLES, getTableInstance } from './Airtable';

const table = getTableInstance(TABLES.DOMAINS);
const schoolTable = getTableInstance(TABLES.SCHOOL);

class SubdomainsServices {
  /**
   * @description - get schools' subdomains.
   * @param value - Column value.
   * @returns - Return school's subdomain according to provided key value pair.
   */

  async getAllSubDomains() {
    try {
      const records = await table.select().all();
      const formattedResponseData = formattedResponse([...records]);
      return formattedResponseData;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async getSchoolByDomain(subDomain: any) {
    try {
      const query = `{Domain (from Domains)} = '${subDomain}'`;
      const records = await schoolTable
        .select({
          filterByFormula: query,
        })
        .all();
      const formattedResponseData = formattedResponse([...records]);
      return formattedResponseData?.[0];
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async getSingleSchoolByDomain(domain: any) {
    try {
      const query = `{Domain} = '${domain?.value}'`;
      const records = await table
        .select({
          filterByFormula: query,
        })
        .all();
      const formattedResponseData = formattedResponse([...records]);
      return formattedResponseData?.[0];
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async getMainDomainHostName(domain: any) {
    try {
      const query = `{Main Domain Host Name} = '${domain?.value}'`;
      const records = await table
        .select({
          filterByFormula: query,
        })
        .all();
      const formattedResponseData = formattedResponse([...records]);
      return formattedResponseData?.[0];
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}

export default new SubdomainsServices();
