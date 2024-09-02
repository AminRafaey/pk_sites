import React from 'react';
import { MICRO_DATA } from 'src/utils/micro-data';
import {
  CardDescription,
  CardPlaning,
  CardPlaningLogo,
  CardSection,
  CardTitle,
} from './school-styled';

type AchievementCardProps = {
  achievementData?: any;
};

const AchievementCard: React.FC<AchievementCardProps> = ({ achievementData }) => (
    <CardSection >
      <CardPlaning>
        <CardPlaningLogo itemProp={MICRO_DATA.IMAGE} src={achievementData?.url} />
        <CardTitle itemProp={MICRO_DATA.NAME}>{achievementData?.designation}</CardTitle>
        <CardDescription itemProp={MICRO_DATA.DISAMBIGUATING_DESCRIPTION}>
          {achievementData?.designationDescription}
        </CardDescription>
      </CardPlaning>
    </CardSection>
  )
export default AchievementCard;
