/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable class-methods-use-this */

import { formattedResponse } from "src/utils/airtable-utils";
import { DefaultSchool } from "src/db/default";
import { TABLES, getTableInstance } from "./Airtable";
import { getFieldArrays, removeLanguageSuffixFromKeys } from "./utlis";

const siteDetailPageTranslatedData = getTableInstance(TABLES.SITE_CONTENT)
const siteMethodologyTranslatedData = getTableInstance(TABLES.METHODOLOGY_LEVEL)
const classesDivisionLevelTable = getTableInstance(TABLES.CLASSES_DIVISION_LEVEL)
const satisfiedStudentTable = getTableInstance(TABLES.SATISFIED_STUDENTS)
const messagesTable = getTableInstance(TABLES.MESSAGES)
const trainerTeamTable = getTableInstance(TABLES.TRAINER_TEAM)
const schoolImagesTable = getTableInstance(TABLES.SCHOOL_IMAGES)
const masterKeySlogansTable = getTableInstance(TABLES.MASTER_KEY_SLOGANS)
const themeColorPaletteTable = getTableInstance(TABLES.THEME_COLOR_PALETTE)


class SiteTranslationServices {

    async allPagesDetailTranslatedData(school?: string, language?: any) {

        const { allSchoolContentDetail, methodologyLevel, classDivisionsLevel, satisfiesStudent, messages, masterKey } = getFieldArrays(language);
        try {
            const query = `{Slug (from All Schools)} = '${school}'`

            const detailPageRecords: any = await siteDetailPageTranslatedData
                .select({
                    filterByFormula: query,
                    fields: allSchoolContentDetail,
                })
                .all();

            const methodologyRecords: any = await siteMethodologyTranslatedData
                .select({
                    filterByFormula: query,
                    fields: methodologyLevel
                })
                .all();
            const classDivisionStudentRecords: any = await classesDivisionLevelTable
                .select({
                    filterByFormula: query,
                    fields: classDivisionsLevel
                })
                .all();
            const satisfiedStudentRecords: any = await satisfiedStudentTable
                .select({
                    filterByFormula: query,
                    fields: satisfiesStudent
                })
                .all();
            const studentMessagesRecords: any = await messagesTable
                .select({
                    filterByFormula: query,
                    fields: messages
                })
                .all();
            const trainerTeamRecords: any = await trainerTeamTable
                .select({
                    filterByFormula: query,

                })
                .all();
            const schoolImagesRecords: any = await schoolImagesTable
                .select({
                    filterByFormula: query,
                })
                .all();
            const masterKeySloganRecords: any = await masterKeySlogansTable
                .select({
                    filterByFormula: query,
                    fields: masterKey,
                })
                .all();
            const themeColorPaletteRecord: any = await themeColorPaletteTable
                .select({
                    filterByFormula: query,
                })
                .all();


            const siteContentData = removeLanguageSuffixFromKeys(formattedResponse(detailPageRecords));
            const suffixMethodologyRemoveData = removeLanguageSuffixFromKeys(formattedResponse(methodologyRecords));
            const suffixClassesDivisionStudentRemoveData = removeLanguageSuffixFromKeys(formattedResponse(classDivisionStudentRecords));
            const suffixSatisfiedStudentRemoveData = removeLanguageSuffixFromKeys(formattedResponse(satisfiedStudentRecords));
            const suffixStudentMessagesRemoveData = removeLanguageSuffixFromKeys(formattedResponse(studentMessagesRecords));
            const suffixMasterKeyRemoveData = removeLanguageSuffixFromKeys(formattedResponse(masterKeySloganRecords));
            const trainerFormattedRecord = formattedResponse(trainerTeamRecords)
            const schoolImagesData = formattedResponse(schoolImagesRecords)
            const themeColorData = formattedResponse(themeColorPaletteRecord)
            if (language === 'pt-BR') {
                return {
                    translatedDetailPageRecordData: siteContentData?.[0] ?? DefaultSchool?.pt?.translatedDetailPageRecordData,
                    methodologyRecordArray: suffixMethodologyRemoveData && suffixMethodologyRemoveData.length > 0 ? suffixMethodologyRemoveData : DefaultSchool?.pt?.methodologyRecordArray,
                    classesDivisionData: suffixClassesDivisionStudentRemoveData && suffixClassesDivisionStudentRemoveData.length > 0 ? suffixClassesDivisionStudentRemoveData : DefaultSchool?.pt?.classesDivisionData,
                    satisfiedStudentData: suffixSatisfiedStudentRemoveData && suffixSatisfiedStudentRemoveData.length > 0 ? suffixSatisfiedStudentRemoveData : DefaultSchool?.pt?.satisfiedStudentData,
                    studentMessagesData: suffixStudentMessagesRemoveData && suffixStudentMessagesRemoveData.length > 0 ? suffixStudentMessagesRemoveData : DefaultSchool?.pt?.studentMessagesData,
                    masterKeySloganData: suffixMasterKeyRemoveData && suffixMasterKeyRemoveData.length > 0 ? suffixMasterKeyRemoveData : DefaultSchool?.pt?.masterKeySloganData,
                    trainerData: trainerFormattedRecord && trainerFormattedRecord.length > 0 ? trainerFormattedRecord : DefaultSchool?.pt?.trainerData,
                    schoolImagesUrl: schoolImagesData && schoolImagesData.length > 0 ? schoolImagesData : DefaultSchool?.pt?.schoolImagesUrl,
                    themePalette: themeColorData?.[0] ?? DefaultSchool?.pt?.themePalette
                };
            } if (language === 'es') {
                return {
                    translatedDetailPageRecordData: siteContentData?.[0] ?? DefaultSchool?.es?.translatedDetailPageRecordData,
                    methodologyRecordArray: suffixMethodologyRemoveData && suffixMethodologyRemoveData.length > 0 ? suffixMethodologyRemoveData : DefaultSchool?.es?.methodologyRecordArray,
                    classesDivisionData: suffixClassesDivisionStudentRemoveData && suffixClassesDivisionStudentRemoveData.length > 0 ? suffixClassesDivisionStudentRemoveData : DefaultSchool?.es?.classesDivisionData,
                    satisfiedStudentData: suffixSatisfiedStudentRemoveData && suffixSatisfiedStudentRemoveData.length > 0 ? suffixSatisfiedStudentRemoveData : DefaultSchool?.es?.satisfiedStudentData,
                    studentMessagesData: suffixStudentMessagesRemoveData && suffixStudentMessagesRemoveData.length > 0 ? suffixStudentMessagesRemoveData : DefaultSchool?.es?.studentMessagesData,
                    masterKeySloganData: suffixMasterKeyRemoveData && suffixMasterKeyRemoveData.length > 0 ? suffixMasterKeyRemoveData : DefaultSchool?.es?.masterKeySloganData,
                    trainerData: trainerFormattedRecord && trainerFormattedRecord.length > 0 ? trainerFormattedRecord : DefaultSchool?.es?.trainerData,
                    schoolImagesUrl: schoolImagesData && schoolImagesData.length > 0 ? schoolImagesData : DefaultSchool?.es?.schoolImagesUrl,
                    themePalette: themeColorData?.[0] ?? DefaultSchool?.es?.themePalette
                };
            } 

                return {
                    translatedDetailPageRecordData: siteContentData?.[0] ?? DefaultSchool?.en?.translatedDetailPageRecordData,
                    methodologyRecordArray: suffixMethodologyRemoveData && suffixMethodologyRemoveData.length > 0 ? suffixMethodologyRemoveData : DefaultSchool?.en?.methodologyRecordArray,
                    classesDivisionData: suffixClassesDivisionStudentRemoveData && suffixClassesDivisionStudentRemoveData.length > 0 ? suffixClassesDivisionStudentRemoveData : DefaultSchool?.en.classesDivisionData,
                    satisfiedStudentData: suffixSatisfiedStudentRemoveData && suffixSatisfiedStudentRemoveData.length > 0 ? suffixSatisfiedStudentRemoveData : DefaultSchool?.en.satisfiedStudentData,
                    studentMessagesData: suffixStudentMessagesRemoveData && suffixStudentMessagesRemoveData.length > 0 ? suffixStudentMessagesRemoveData : DefaultSchool?.en?.studentMessagesData,
                    masterKeySloganData: suffixMasterKeyRemoveData && suffixMasterKeyRemoveData.length > 0 ? suffixMasterKeyRemoveData : DefaultSchool?.en?.masterKeySloganData,
                    trainerData: trainerFormattedRecord && trainerFormattedRecord.length > 0 ? trainerFormattedRecord : DefaultSchool?.en?.trainerData,
                    schoolImagesUrl: schoolImagesData && schoolImagesData.length > 0 ? schoolImagesData : DefaultSchool?.en.schoolImagesUrl,
                    themePalette: themeColorData?.[0] ?? DefaultSchool?.en?.themePalette
                };
            
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

}

export default new SiteTranslationServices;