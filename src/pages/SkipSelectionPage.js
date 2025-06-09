import React, { useEffect } from 'react';
import SkipList from '../components/SkipList';
import useSkipApi from '../api/SkipApi';
import '../styles/SkipPage.scss';
import SkipCardSkeleton from '../components/SkipCardSkeleton';


const SkipSelectionPage = () => {
  const { getAllSkips, skips, loading } = useSkipApi();

  useEffect(() => {
    getAllSkips();
  }, []);

  return (
    <div className="page-container">
        <div className='title'>
            Choose Your Skip Size
        </div>
        <div className='subtitle'>
            Select the skip size that best suits your needs
        </div>

      {loading ? (
        <div className="container mt-4">
          <div className="row">
            {Array.from({ length: 6 }).map((_, i) => (
              <div className="col-12 col-md-6 col-lg-4 mb-4" key={i}>
                <SkipCardSkeleton />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <SkipList skips={skips} />
      )}
    </div>
  );
};

export default SkipSelectionPage;
