import '../styles/SkipCardSkeleton.scss';

const SkipCardSkeleton = () => {
  return (
    <div className="skip-card skeleton">
      <div className="skeleton-title" />
      <div className="skeleton-text" />
      <div className="skeleton-text short" />
      <div className="skeleton-button" />
    </div>
  );
};

export default SkipCardSkeleton;
