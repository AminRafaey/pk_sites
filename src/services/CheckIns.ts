/* eslint-disable import/no-cycle */
/* eslint-disable class-methods-use-this */

import dayjs from 'dayjs';
import { formattedResponse } from 'src/utils/airtable-utils';
import { getTableInstance, TABLES } from './Airtable';
import { getTimeWithGMTOffset } from './utlis';

const allSchedules = getTableInstance(TABLES.ALL_SCHEDULES_CHECK_IN);

class RanksService {
  /**
   * @description - get Profile after send page to browser.
   * @param username - Username.
   * @returns - Return user profile basic data like username and avatar.
   */

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type

  async getCurrentSchoolClasses(
    schoolName: string,
    allWeek?: boolean | undefined,
  ) {
    try {
      const records: any = await allSchedules
        .select({
          filterByFormula: `{Slug Lookup} = '${schoolName}'`,
        })
        .all();
      const recs = await formattedResponse(records);
      const timezone = getTimeWithGMTOffset(recs?.[0]?.gmtOffsetFromSchoolLink);
      const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ];

      const dayOfWeek = days[dayjs(timezone).day()];

      const filteredRecs = allWeek
        ? recs
        : recs?.filter((el: any) => (el?.weekday ? el?.weekday === dayOfWeek : el));
      return {
        classData: filteredRecs?.sort((a: any, b: any) => a.timeStart - b.timeStart),
        zoneTime: timezone,
      };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }


}

export default new RanksService();
