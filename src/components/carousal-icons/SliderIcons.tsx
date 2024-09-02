import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { styled } from '@mui/system';

export const CustomPrevArrow = ({ prevButtonClick }: { prevButtonClick: () => void }) => {
  const StyledButton = styled('button')(({ theme }) => ({
    display: 'block',
    position: 'absolute',
    left: '10px',
    top: '50%',
    color: 'white',
    cursor: 'pointer',
    zIndex: 1,
    background: 'none',
    border: 'none !important',
    [theme.breakpoints.down('sm')]: {
      top: '35%',
    },
  }));

  return (
    <StyledButton onClick={prevButtonClick} type="button">
      <NavigateBeforeIcon sx={{ width: '35px', height: '35px' }} />
    </StyledButton>
  );
};

export const CustomNextArrow = ({ nextButtonClick }: { nextButtonClick: () => void }) => {
  const StyledButton = styled('button')(({ theme }) => ({
    display: 'block',
    position: 'absolute',
    right: '10px',
    top: '50%',
    color: 'white',
    cursor: 'pointer',
    background: 'none',
    border: 'none !important',
    [theme.breakpoints.down('sm')]: {
      top: '35%',
    },
  }));

  return (
    <StyledButton onClick={nextButtonClick} type="button">
      <NavigateNextIcon sx={{ width: '35px', height: '35px' }} />
    </StyledButton>
  );
};
