import { NextPage } from 'next';
import CreateSiteModal from './createSiteModal';

interface SchoolDetailProps {
  params: { schoolSlug: string };
}

const HomePage: NextPage<SchoolDetailProps> = async () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '100%',
    }}
  >
    Admin Page
    <CreateSiteModal />
  </div>
);
export default HomePage;
