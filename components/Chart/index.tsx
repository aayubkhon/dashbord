"use client";

import { useState } from "react";
import {
  LineChart,
  BarChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Company } from "@/types";
import styles from "./Chart.module.scss";

type ChartProps = {
  company: Company | undefined;
};

const COLORS = ["#1e40af", "#ef4444", "#10b981", "#f59e0b", "#8b5cf6"];

export function EmissionsChart({ company }: ChartProps) {
  const [chartType, setChartType] = useState<"line" | "bar">("line");

  if (!company) {
    return (
      <div className={styles.chartContainer + " card-premium"}>
        <div className={styles.emptyState}>
          <div>📊</div>
          <p>Select a company to view emissions data</p>
        </div>
      </div>
    );
  }

  const data = company.emissions.map((e) => ({
    month: e.yearMonth.slice(-2),
    emissions: e.emissions,
    source: e.source,
  }));

  const sourceData = company.emissions.reduce(
    (acc, e) => {
      const existing = acc.find((x) => x.source === e.source);
      if (existing) {
        existing.total += e.emissions;
      } else {
        acc.push({ source: e.source, total: e.emissions });
      }
      return acc;
    },
    [] as Array<{ source: string; total: number }>,
  );

  const totalEmissions = company.emissions.reduce(
    (sum, e) => sum + e.emissions,
    0,
  );
  const avgEmissions = (totalEmissions / company.emissions.length).toFixed(1);

  return (
    <div className={styles.chartsWrapper}>
      {/* Header */}
      <div className="card-premium">
        <div className={styles.chartHeader}>
          <div>
            <h3>{company.name}</h3>
            <p>{company.country} • Greenhouse Gas Emissions Report</p>
          </div>
          <div className={styles.chartControls}>
            <button
              onClick={() => setChartType("line")}
              className={chartType === "line" ? "btn-primary" : "btn-secondary"}
            >
              Trend
            </button>
            <button
              onClick={() => setChartType("bar")}
              className={chartType === "bar" ? "btn-primary" : "btn-secondary"}
            >
              Comparison
            </button>
          </div>
        </div>
      </div>

      {/* Main Chart */}
      <div className="card-premium" style={{ height: "400px" }}>
        <ResponsiveContainer width="100%" height="100%">
          {chartType === "line" ? (
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip
                contentStyle={{ backgroundColor: "#fff", borderRadius: "8px" }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="emissions"
                stroke="#1e40af"
                strokeWidth={3}
                dot={{ fill: "#1e40af", r: 6 }}
              />
            </LineChart>
          ) : (
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip
                contentStyle={{ backgroundColor: "#fff", borderRadius: "8px" }}
              />
              <Bar dataKey="emissions" fill="#1e40af" radius={[12, 12, 0, 0]} />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>

      {/* Donut Chart + Stats */}
      <div className={styles.chartStats}>
        {/* Donut Chart */}
        <div className="card-premium">
          <h4 style={{ marginBottom: "24px" }}>Emissions by Source</h4>
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={sourceData}
                dataKey="total"
                nameKey="source"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={2}
                label={({ name, percent }) =>
                  `${name} ${((percent ?? 0) * 100).toFixed(0)}%`
                }
                labelLine={false}
              >
                {sourceData.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                formatter={(value) => `${value} tons CO2`}
                contentStyle={{
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  border: "1px solid #e2e8f0",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Stats Cards */}
        <div className={styles.statsRight}>
          <div className="card-premium stat-primary">
            <p className={styles.statLabel}>Total Emissions</p>
            <p className={styles.statValue}>{totalEmissions}</p>
            <p className={styles.statUnit}>tons CO2</p>
          </div>

          <div className="card-premium stat-success">
            <p className={styles.statLabel}>Monthly Average</p>
            <p className={styles.statValue}>{avgEmissions}</p>
            <p className={styles.statUnit}>tons CO2</p>
          </div>

          <div className="card-premium stat-warning">
            <p className={styles.statLabel}>Data Sources</p>
            <p className={styles.statValue}>{sourceData.length}</p>
            <p className={styles.statUnit}>categories</p>
          </div>
        </div>
      </div>
    </div>
  );
}
