'use client';

import Skeleton from '@mui/material/Skeleton';
import React, { LegacyRef, useEffect, useRef, useState } from 'react';
import { useOnScreen } from 'src/hooks/useOnScreen';
import { DefaultAvatar } from 'src/shared/DefaultAvatar';

import { appFetchClientSide } from 'src/utils/fetch';
import { API_ROUTES } from 'src/utils/api-routes';
import { Avatar, Belt, UserAvatarWrapper } from './components/userAvatar-styled';

type UserAvatarProps = {
  username?: string;
  beltHeight?: number;
  avatarDimension?: number;
};

const UserAvatar: React.FC<UserAvatarProps> = ({
  username,
  avatarDimension = 48,
  beltHeight = 7,
}) => {
  const [isLoading, setLoading] = useState(true);
  const [avatarData, setAvatarData] = useState<any>();

  const ref = useRef<HTMLInputElement | undefined>();
  const isVisible = useOnScreen(ref);

  useEffect(() => {
    if (isVisible) {
      try {
        setLoading(true);
        // eslint-disable-next-line consistent-return
        const fetchData = async () => {
          const url = window?.location?.origin;
          if (url) {
            const getInstructorNameBelt = await appFetchClientSide(
              `${url}${API_ROUTES.getInstructorNameBelt}/${username}`
            );
            setAvatarData(getInstructorNameBelt);
            setLoading(false);
            return getInstructorNameBelt;
          }
        };
        fetchData();
      } catch (e) {
        setLoading(false);
        console.log(e, 'error in userAvatar of ');
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible, username]);

  if (isLoading && username) {
    return (
      <div ref={ref as LegacyRef<HTMLDivElement> | undefined}>
        <Skeleton
          animation="pulse"
          sx={{ backgroundColor: '#5A5A5A' }}
          variant="rectangular"
          width={avatarDimension}
          height={avatarDimension}
        />
      </div>
    );
  }

  const avatar = avatarData?.instructorDetail?.photo
    ? avatarData?.instructorDetail?.photo?.[0]?.url
    : '';
  const featuredRank = avatarData?.instructorRankData?.rankImageW64H8FromMartialArtsRanks?.[0]?.url;
  const belt = featuredRank || '/icons/beltDefault.png';

  return (
    <UserAvatarWrapper
      ref={ref as LegacyRef<HTMLDivElement> | undefined}
      avatarDimension={avatarDimension}
    >
      <Avatar avatarDimension={avatarDimension} src={avatar || DefaultAvatar} alt={username} />
      <Belt
        avatarDimension={avatarDimension}
        beltHeight={beltHeight}
        src={belt || '/icons/beltDefault.png'}
        alt={username}
      />
    </UserAvatarWrapper>
  );
};
export default UserAvatar;
