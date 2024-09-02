
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable class-methods-use-this */

import { TABLES, getTableInstance } from "./Airtable";

const tableLeads = getTableInstance(TABLES.LEADS);
const table = getTableInstance(TABLES.ALL_SCHOOLS);

class CustomerService {
    /**
     * @description - Get Color Palette of template.
     * @param address - Address of school.
     * @returns - Return Color Palette.
     */

    async getAllSchoolData(selectedSchool: any) {
        try {
            const query = `{Slug} = '${selectedSchool}'`
            const records = await table
                .select({
                    filterByFormula: query,
                })
                .all();

            return records;
        } catch (error) {
            console.log(error);
            return error;
        }
    }



    async signUpFreeClasses(body: any, school: any) {
        try {
            const customer = body;
            const response: any = await tableLeads.create({
                "Full Name": customer?.['Full Name'],
                Email: customer?.Email,
                Phone: customer?.Phone,
                "Additional Information": customer?.['Additional Information'],
                School: [school?.[0]?.id],
                Country: customer?.Country,
                Source: customer?.Source,
            })
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}

export default new CustomerService()



