"use client";

import { useEffect } from "react";
import { useAppStore } from "@/store/store";
import styles from "./page.module.scss"
import { ErrorMessage } from "@/components/ErrorBoundary";
import { Drawer } from "@/components/Drawer";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { PostsList } from "@/components/PostsList";
import { EmissionsChart } from "@/components/Chart";
import AIInsights from "@/components/AIInsight";

export default function Home() {
  const { loadCompanies, loadPosts, getSelectedCompany, loading, error } =
    useAppStore();
  const company = getSelectedCompany();

  useEffect(() => {
    const init = async () => {
      await loadCompanies();
      await loadPosts();
    };
    init();
  }, []);

  return (
    <div className={styles.container}>
      <Drawer />

      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h1>Carbon Emissions Dashboard</h1>
            <p>
              Real-time monitoring and analytics for greenhouse gas emissions
              across your organization
            </p>
          </div>

          {error && (
            <div className={styles.errorSection}>
              <ErrorMessage message={error} onRetry={loadCompanies} />
            </div>
          )}

          {loading && !company && <LoadingSpinner />}

          {company && (
            <div className={styles.grid}>
              <div className={styles.chartSection}>
                <EmissionsChart company={company} />
              </div>

              <div className={styles.updates}>
                <div className="card-premium">
                  <h2 style={{ marginBottom: "8px" }}>📰 Updates & News</h2>
                  <p
                    style={{
                      margin: "0 0 16px 0",
                      fontSize: "12px",
                      color: "#64748b",
                    }}
                  >
                    Latest sustainability initiatives
                  </p>
                  <div className={styles.divider}></div>
                  <PostsList />
                </div>
              <AIInsights emissions={company.emissions} />
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
