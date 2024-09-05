'use client';

const IndexHomePage = ({ domainsData }: { domainsData: any }) => (
    <>
      <h1>All Schools Domain Data</h1>
      {domainsData?.map((domain: any) => (
        <ul>
          <li
            style={{
              cursor: 'pointer',
            }}
          >
            <a href={`http://${domain?.domain}.pk-sites.vercel.app/`} style={{ color: 'blue' }}>
              {domain.schoolName?.[0]}
            </a>
          </li>
        </ul>
      ))}
    </>
  );

export default IndexHomePage;
