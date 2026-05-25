"use client";

import { GhgEmission } from "@/types";
import styles from "./AIInsights.module.scss";

type Props = {
  emissions: GhgEmission[];
};

export default function AIInsights({ emissions }: Props) {
  if (emissions.length < 2) {
    return (
      <div className={`card-premium ${styles.insightsContainer}`}>
        <h3 className={styles.title}>AI Insights</h3>
        <p className={styles.empty}>Not enough data for analysis</p>
      </div>
    );
  }

  const latest = emissions[emissions.length - 1];
  const previous = emissions[emissions.length - 2];
  const diff = latest.emissions - previous.emissions;
  const percent = Math.abs((diff / previous.emissions) * 100).toFixed(1);
  const increased = diff > 0;

  // Get most common source
  const sourceCount: { [key: string]: number } = {};
  emissions.forEach((e) => {
    sourceCount[e.source] = (sourceCount[e.source] || 0) + 1;
  });
  const mainSource =
    Object.entries(sourceCount).sort(([, a], [, b]) => b - a)[0]?.[0] ||
    "unknown";

  // Trend analysis
  const trend = emissions.slice(-3).map((e) => e.emissions);
  const isTrendImproving = trend[0] > trend[1] && trend[1] > trend[2];

  return (
    <div className={`card-premium ${styles.insightsContainer}`}>
      <h3 className={styles.title}>🤖 AI Insights</h3>

      <div className={styles.insightsList}>
        {/* Emissions Change */}
        <div className={styles.insightItem}>
          <span className={styles.emoji}>{increased ? "⚠️" : "✅"}</span>
          <span className={styles.text}>
            Emissions{" "}
            <span className={styles.highlight}>
              {increased ? "increased" : "decreased"}
            </span>{" "}
            by{" "}
            <span
              className={`${styles.percent} ${increased ? styles.danger : styles.success}`}
            >
              {percent}%
            </span>
          </span>
        </div>

        {/* Main Source */}
        <div className={styles.insightItem}>
          <span className={styles.emoji}>🌱</span>
          <span className={styles.text}>
            Main emission source:{" "}
            <span className={styles.highlight}>
              {mainSource.replace("_", " ")}
            </span>
          </span>
        </div>

        {/* Trend */}
        <div className={styles.insightItem}>
          <span className={styles.emoji}>{isTrendImproving ? "📈" : "📉"}</span>
          <span className={styles.text}>
            Estimated annual trend{" "}
            <span
              className={`${styles.highlight} ${isTrendImproving ? styles.success : styles.danger}`}
            >
              {isTrendImproving ? "improving" : "worsening"}
            </span>
          </span>
        </div>

        {/* Total Emissions */}
        <div className={styles.insightItem}>
          <span className={styles.emoji}>📊</span>
          <span className={styles.text}>
            Total emissions:{" "}
            <span className={styles.highlight}>
              {emissions.reduce((sum, e) => sum + e.emissions, 0)} tons CO2
            </span>
          </span>
        </div>

        {/* Last Updated */}
        <div className={styles.insightItem}>
          <span className={styles.emoji}>⏱️</span>
          <span className={styles.text}>
            Last updated:{" "}
            <span className={styles.highlight}>{latest.yearMonth}</span>
          </span>
        </div>
      </div>

      {/* Recommendation */}
      <div className={styles.recommendation}>
        <p className={styles.recommendationText}>
          💡 <strong>Recommendation:</strong> Focus on reducing{" "}
          <span className={styles.highlight}>
            {mainSource.replace("_", " ")}
          </span>{" "}
          emissions to meet your climate targets.
        </p>
      </div>
    </div>
  );
}
