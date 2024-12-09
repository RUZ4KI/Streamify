import { StateCreator } from "zustand";
import {
  mockKeyMetrics,
  mockRecentStreamsData,
  mockRevenueDistributionData,
  mockTopArtist,
  mockTopStreamedSongsData,
  mockUserGrowthData,
  RevenueDistributionDataPoint,
  TopStreamedSongDataPoint,
} from "@/lib/mockData";

export interface DashboardData {
  songName: string;
  artist: string;
  dateStreamed: Date;
  streamCount: number;
  userId: string;
}

export interface TopArtist {
  name: string;
  streams: number;
  imageUrl: string;
  genre: string;
}

export interface DashboardSlice {
  dashboardData: Array<DashboardData>;
  totalRevenue: number;
  activeUsers: number;
  totalStreams: number;
  lineChart: Array<{ month: string; totalUsers: number; activeUsers: number }>;
  pieChart: Array<RevenueDistributionDataPoint>;
  barChart: Array<TopStreamedSongDataPoint>;
  isLoading: boolean;
  error: string | null;
  topArtist: TopArtist;
  setDashboardData: (data: Array<DashboardData>) => void;
  clearDashboardData: () => void;
  setError: (error: string | null) => void;
  setLoading: (loading: boolean) => void;
}

export const createDashboardSlice: StateCreator<DashboardSlice> = (set) => ({
  dashboardData: mockRecentStreamsData,
  totalRevenue: mockKeyMetrics.revenue,
  activeUsers: mockKeyMetrics.activeUsers,
  totalStreams: mockKeyMetrics.totalStreams,
  lineChart: mockUserGrowthData,
  pieChart: mockRevenueDistributionData,
  barChart: mockTopStreamedSongsData,
  isLoading: false,
  error: null,
  topArtist: mockTopArtist,
  setDashboardData: (data) => set({ dashboardData: data, error: null }),
  clearDashboardData: () => set({ dashboardData: [] }),
  setError: (error) => set({ error }),
  setLoading: (loading) => set({ isLoading: loading }),
});
