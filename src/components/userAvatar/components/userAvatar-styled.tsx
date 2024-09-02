import { styled } from '@mui/system';

export const UserAvatarWrapper = styled('div')<{ avatarDimension: number }>(
  ({ avatarDimension }) => ({
    position: 'relative',
    height: `${avatarDimension}px`,
    width: `${avatarDimension}px`,
  })
);

export const Avatar = styled('img')<{ avatarDimension: number }>(
  ({ avatarDimension }) => ({
    objectFit: 'cover',
    height: `${avatarDimension}px`,
    width: `${avatarDimension}px`,
    position: 'relative',
    cursor: 'pointer',
  })
);

export const Belt = styled('img')<{
  avatarDimension: number;
  beltHeight: number;
}>(({ avatarDimension, beltHeight }) => ({
  position: 'absolute',
  backgroundColor: '#484848',
  alignContent: 'flex-end',
  width: `${avatarDimension}px`,
  height: `${beltHeight}px`,
  top: `${avatarDimension - beltHeight}px`,
  left: '0px',
}));
