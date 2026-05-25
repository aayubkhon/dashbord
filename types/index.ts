export type GhgEmission = {
  yearMonth: string;
  source: string;
  emissions: number;
};

export type Company = {
  id: string;
  name: string;
  country: string;
  emissions: GhgEmission[];
};

export type Post = {
  id: string;
  title: string;
  resourceUid: string;
  dateTime: string;
  content: string;
};

export type AppState = {
  companies: Company[];
  posts: Post[];
  selectedCompanyId: string | null;
  loading: boolean;
  error: string | null;
};