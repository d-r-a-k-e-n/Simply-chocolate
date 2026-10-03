import './loader.css';

export default function Loader({ className = '' }) {
  return (
    <div
      className={['loader', className].filter(Boolean).join(' ')}
      role="status"
      aria-label="Loading"
    >
      <span className="loader__spinner" />
    </div>
  );
}
