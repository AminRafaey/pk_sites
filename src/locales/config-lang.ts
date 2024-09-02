// @mui
import { enUS, ptBR , esES} from '@mui/material/locale';

// PLEASE REMOVE `LOCAL STORAGE` WHEN YOU CHANGE SETTINGS.
// ----------------------------------------------------------------------

export const allLangs = [
  {
    label: 'English',
    value: 'en',
    systemValue: enUS,
    icon: 'flagpack:gb-nir',
  },
  {
    label: 'Spanish',
    value: 'es',
    systemValue: esES,
    icon: 'flagpack:gb-nir',
  },
  {
    label: 'Portuguese',
    value: 'pt',
    systemValue: ptBR,
    icon: 'flagpack:gb-nir',
  },
];

export const defaultLang = allLangs[0]; // English

// GET MORE COUNTRY FLAGS
// https://icon-sets.iconify.design/flagpack/
// https://www.dropbox.com/sh/nec1vwswr9lqbh9/AAB9ufC8iccxvtWi3rzZvndLa?dl=0