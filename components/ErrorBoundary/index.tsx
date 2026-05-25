'use client';

type ErrorProps = {
  message: string;
  onRetry?: () => void;
};

export function ErrorMessage({ message, onRetry }: ErrorProps) {
  return (
    <div style={{
      background: '#fee2e2',
      border: '1px solid #fecaca',
      borderRadius: '12px',
      padding: '16px',
      display: 'flex',
      gap: '12px'
    }}>
      <div style={{ fontSize: '24px' }}>⚠️</div>
      <div style={{ flex: 1 }}>
        <h3 style={{ margin: '0 0 8px 0', color: '#991b1b' }}>Error</h3>
        <p style={{ margin: '0 0 12px 0', color: '#dc2626' }}>{message}</p>
        {onRetry && (
          <button onClick={onRetry} className="btn-secondary">
            Retry
          </button>
        )}
      </div>
    </div>
  );
}