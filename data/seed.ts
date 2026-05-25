import { Company, Post } from "@/types";

export const companies: Company[] = [
  {
    id: "c1",
    name: "Acme Corp",
    country: "US",
    emissions: [
      { yearMonth: "2025-01", source: "electricity", emissions: 120 },
      { yearMonth: "2025-02", source: "electricity", emissions: 110 },
      { yearMonth: "2025-02", source: "supplement", emissions: 180 },
      { yearMonth: "2025-03", source: "natural_gas", emissions: 95 },
      { yearMonth: "2025-04", source: "electricity", emissions: 130 },
    ],
  },
  {
    id: "c2",
    name: "Globex",
    country: "DE",
    emissions: [
      { yearMonth: "2025-01", source: "natural_gas", emissions: 80 },
      { yearMonth: "2025-02", source: "electricity", emissions: 105 },
      { yearMonth: "2025-02", source: "supplement", emissions: 180 },
      { yearMonth: "2025-03", source: "natural_gas", emissions: 120 },
      { yearMonth: "2025-04", source: "electricity", emissions: 90 },
    ],
  },
  {
    id: "c3",
    name: "Tesla",
    country: "US",
    emissions: [
      { yearMonth: "2025-01", source: "natural_gas", emissions: 60 },
      { yearMonth: "2025-02", source: "electricity", emissions: 95 },
      { yearMonth: "2025-02", source: "supplement", emissions: 180 },
      { yearMonth: "2025-03", source: "natural_gas", emissions: 150 },
      { yearMonth: "2025-04", source: "electricity", emissions: 70 },
    ],
  },
  {
    id: "c4",
    name: "Tayota",
    country: "JA",
    emissions: [
      { yearMonth: "2025-01", source: "natural_gas", emissions: 40 },
      { yearMonth: "2025-02", source: "electricity", emissions: 130 },
      { yearMonth: "2025-02", source: "supplement", emissions: 180 },
      { yearMonth: "2025-03", source: "natural_gas", emissions: 110 },
      { yearMonth: "2025-04", source: "electricity", emissions: 60 },
    ],
  },
  {
    id: "c5",
    name: "Samsung",
    country: "KO",
    emissions: [
      { yearMonth: "2025-01", source: "natural_gas", emissions: 70 },
      { yearMonth: "2025-02", source: "electricity", emissions: 135 },
      { yearMonth: "2025-03", source: "natural_gas", emissions: 160 },
      { yearMonth: "2025-02", source: "supplement", emissions: 180 },
      { yearMonth: "2025-04", source: "electricity", emissions: 80 },
    ],
  },
];

export const posts: Post[] = [
  {
    id: "p1",
    title: "Quarterly Sustainability Report",
    resourceUid: "c1",
    dateTime: "2025-02",
    content: "Acme Corp committed to 50% CO2 reduction by 2030",
  },
  {
    id: "p2",
    title: "Green Energy Initiative",
    resourceUid: "c2",
    dateTime: "2025-03",
    content: "Globex switches to 100% renewable energy sources",
  },
  {
    id: "p3",
    title: "Blue Energy",
    resourceUid: "c3",
    dateTime: "2025-03",
    content: "Globex switches to 100% renewable energy sources",
  },
  {
    id: "p4",
    title: "Green Energy Initiative",
    resourceUid: "c4",
    dateTime: "2025-03",
    content: "Globex switches to 100% renewable energy sources",
  },
];
