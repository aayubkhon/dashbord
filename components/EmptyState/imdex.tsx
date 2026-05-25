'use client';

type EmptyStateProps = {
  title: string;
  message: string;
};

export function EmptyState({ title, message }: EmptyStateProps) {
  return (
    <div className="card" style={{ textAlign: 'center', paddingTop: '48px', paddingBottom: '48px' }}>
      <div style={{ fontSize: '48px', marginBottom: '12px' }}>📭</div>
      <h3 style={{ margin: '0 0 8px 0' }}>{title}</h3>
      <p style={{ margin: '0', color: '#64748b' }}>{message}</p>
    </div>
  );
}