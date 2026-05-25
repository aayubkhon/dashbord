'use client';

import { useAppStore } from '@/store/store';
import styles from './PostsList.module.scss';

export function PostsList() {
  const { posts, selectedCompanyId } = useAppStore();

  const companyPosts = posts.filter(p => p.resourceUid === selectedCompanyId);

  if (companyPosts.length === 0) {
    return <p className={styles.empty}>No updates available</p>;
  }

  return (
    <div className={styles.postsList}>
      {companyPosts.map(post => (
        <div key={post.id} className={styles.postItem}>
          <h4>{post.title}</h4>
          <p className={styles.postDate}>{post.dateTime}</p>
          <p className={styles.postContent}>{post.content}</p>
        </div>
      ))}
    </div>
  );
}