/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
export const getTimeWithGMTOffset = (gmtOffset: number): Date => {
  const gmtDateTime = new Date();
  const currentOffset = gmtOffset / 100 + new Date().getTimezoneOffset() / 60;
  const schoolLocalTime = new Date(
    gmtDateTime.getTime() + currentOffset * 60 * 60 * 1000,
  );

  return schoolLocalTime;
};

export const removeLanguageSuffixFromKeys = (data: any) => {
  const suffixes = ['En', 'Pt', 'Es'];

  // Iterate over each object in the array
  for (const obj of data) {
    // Iterate over each key in the object
    for (const key in obj) {
      // Check if the key ends with any of the suffixes
      for (const suffix of suffixes) {
        if (key.endsWith(suffix)) {
          // Remove the suffix from the key
          const newKey = key.slice(0, -2);
          // Rename the key in the object
          obj[newKey] = obj[key];
          delete obj[key];
          break; // Move to the next key
        }
      }
    }
  }

  return data;
}

export const getFieldArrays = (lang: any) => {
  // eslint-disable-next-line no-nested-ternary
  const suffix = lang === 'es' ? 'ES' : lang === 'pt-BR' ? 'PT' : 'EN';
  return {
    allSchoolContentDetail: [
      `School Slogan ${suffix}`, `School Slogan Description ${suffix}`, `Teaching Method ${suffix}`, `Teaching Method Description ${suffix}`,
      `School Vision Title ${suffix}`, `School Vision Description ${suffix}`, `Schedule Class Slogan ${suffix}`, `Client Thought ${suffix}`,
      `School History ${suffix}`, `Master Slogan ${suffix}`, `Master Slogan Description ${suffix}`,
      `Master Plan Slogan ${suffix}`, `School Trial Slogan ${suffix}`, `Satisfied Student Slogan ${suffix}`, `Contact Us ${suffix}`,
      `Contact Us Description ${suffix}`, `Visit ${suffix}`,
      `School Teacher Slogan ${suffix}`, `School Description Quotes ${suffix}`, `Type Of Martial Art ${suffix}`,
      `Trainer Bio Data ${suffix}`, `Training Center ${suffix}`,
      'Banner Background Image', 'School Image', 'Master Image', 'School Light Logo', 'School Dark Logo',
      'Trainer Image', 'Banner Logo', 'School Hall Image', 'School Logo (from All Schools)'
    ],
    methodologyLevel: [
      `Achievement Title ${suffix}`, `Achievement Description ${suffix}`, 'Url'
    ],
    classDivisionsLevel: [
      `Designation ${suffix}`, `Designation Description ${suffix}`, 'Url'
    ],
    satisfiesStudent: [
      `Achievement Title ${suffix}`, 'Number Of Students', 'Svg Url'
    ],
    messages: [
      `Description ${suffix}`, 'Student Name', 'School Name'
    ],
    masterKey: [
      `Master Key Slogan ${suffix}`
    ]
  };
};