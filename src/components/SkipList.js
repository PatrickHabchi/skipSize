import React from 'react';
import SkipCard from './SkipCard';
import '../styles/SkipList.scss';

function SkipList({ skips }) {
    return (
        <div className="skip-list container">
            <div className="row">
                {skips.map((skip) => (
                    <div className="col-12 col-md-6 col-lg-4 mb-4" key={skip.id}>
                        <SkipCard skip={skip} />
                    </div>
                ))}
            </div>
        </div>

    );
};

export default SkipList;