// Types for Streamify Dashboard Data

// Key Metrics Interface
export interface KeyMetrics {
  totalUsers: number;
  activeUsers: number;
  totalStreams: number;
  revenue: number;
  topArtist: string;
}

// User Growth Data Point
export interface UserGrowthDataPoint {
  month: string;
  totalUsers: number;
  activeUsers: number;
}

// Revenue Distribution Data Point
export interface RevenueDistributionDataPoint {
  source: "Subscriptions" | "Ads" | "Merchandise" | "Other" | "Streams";
  amount: number;
}

// Top Streamed Songs Data Point
export interface TopStreamedSongDataPoint {
  songName: string;
  streams: number;
}

// Recent Streams Data Point
export interface RecentStreamDataPoint {
  songName: string;
  artist: string;
  dateStreamed: Date;
  streamCount: number;
  userId: string;
}

// Mock Data Generation
export const mockKeyMetrics: KeyMetrics = {
  totalUsers: 5250000,
  activeUsers: 2750000,
  totalStreams: 425000000,
  revenue: 42500000,
  topArtist: "Taylor Swift",
};

export const mockUserGrowthData: UserGrowthDataPoint[] = [
  { month: "Jan 2024", totalUsers: 4800000, activeUsers: 2500000 },
  { month: "Feb 2024", totalUsers: 4900000, activeUsers: 2550000 },
  { month: "Mar 2024", totalUsers: 5000000, activeUsers: 2600000 },
  { month: "Apr 2024", totalUsers: 5050000, activeUsers: 2650000 },
  { month: "May 2024", totalUsers: 5100000, activeUsers: 2700000 },
  { month: "Jun 2024", totalUsers: 5150000, activeUsers: 2725000 },
  { month: "Jul 2024", totalUsers: 5200000, activeUsers: 2740000 },
  { month: "Aug 2024", totalUsers: 5250000, activeUsers: 2750000 },
  { month: "Sep 2024", totalUsers: 5300000, activeUsers: 2760000 },
  { month: "Oct 2024", totalUsers: 5350000, activeUsers: 2770000 },
  { month: "Nov 2024", totalUsers: 5400000, activeUsers: 2780000 },
  { month: "Dec 2024", totalUsers: 5450000, activeUsers: 2790000 },
];

export const mockRevenueDistributionData: RevenueDistributionDataPoint[] = [
  { source: "Subscriptions", amount: 35000000 },
  { source: "Ads", amount: 6500000 },
  { source: "Merchandise", amount: 1000000 },
  { source: "Streams", amount: 1500000 },
  { source: "Other", amount: 1000000 },
];

export const mockTopStreamedSongsData: TopStreamedSongDataPoint[] = [
  { songName: "Cruel Summer", streams: 125000000 },
  { songName: "Flowers", streams: 110000000 },
  { songName: "Starboy", streams: 95000000 },
  { songName: "Blinding Lights", streams: 90000000 },
  { songName: "Anti-Hero", streams: 85000000 },
];

export const mockRecentStreamsData: RecentStreamDataPoint[] = [
  {
    songName: "Cruel Summer",
    artist: "Taylor Swift",
    dateStreamed: new Date("2024-08-15T14:30:00Z"),
    streamCount: 1250000,
    userId: "user_234567",
  },
  {
    songName: "Flowers",
    artist: "Miley Cyrus",
    dateStreamed: new Date("2024-08-15T14:25:00Z"),
    streamCount: 1100000,
    userId: "user_345678",
  },
  {
    songName: "Starboy",
    artist: "The Weeknd",
    dateStreamed: new Date("2024-08-15T14:20:00Z"),
    streamCount: 950000,
    userId: "user_456789",
  },
  {
    songName: "Blinding Lights",
    artist: "The Weeknd",
    dateStreamed: new Date("2024-08-15T14:15:00Z"),
    streamCount: 900000,
    userId: "user_567890",
  },
  {
    songName: "Anti-Hero",
    artist: "Taylor Swift",
    dateStreamed: new Date("2024-08-15T14:10:00Z"),
    streamCount: 850000,
    userId: "user_678901",
  },
  {
    songName: "Levitating",
    artist: "Dua Lipa",
    dateStreamed: new Date("2024-08-15T14:05:00Z"),
    streamCount: 800000,
    userId: "user_789012",
  },
  {
    songName: "As It Was",
    artist: "Harry Styles",
    dateStreamed: new Date("2024-08-15T14:00:00Z"),
    streamCount: 750000,
    userId: "user_890123",
  },
  {
    songName: "Shape of You",
    artist: "Ed Sheeran",
    dateStreamed: new Date("2024-08-15T13:55:00Z"),
    streamCount: 700000,
    userId: "user_901234",
  },
  {
    songName: "Bad Guy",
    artist: "Billie Eilish",
    dateStreamed: new Date("2024-08-15T13:50:00Z"),
    streamCount: 650000,
    userId: "user_012345",
  },
  {
    songName: "Stay",
    artist: "The Kid LAROI & Justin Bieber",
    dateStreamed: new Date("2024-08-15T13:45:00Z"),
    streamCount: 600000,
    userId: "user_123456",
  },
  {
    songName: "Vampire",
    artist: "Olivia Rodrigo",
    dateStreamed: new Date("2024-08-15T13:40:00Z"),
    streamCount: 550000,
    userId: "user_234123",
  },
  {
    songName: "Last Night",
    artist: "Morgan Wallen",
    dateStreamed: new Date("2024-08-15T13:35:00Z"),
    streamCount: 520000,
    userId: "user_345234",
  },
  {
    songName: "Rich Flex",
    artist: "Drake & 21 Savage",
    dateStreamed: new Date("2024-08-15T13:30:00Z"),
    streamCount: 480000,
    userId: "user_456345",
  },
  {
    songName: "About Damn Time",
    artist: "Lizzo",
    dateStreamed: new Date("2024-08-15T13:25:00Z"),
    streamCount: 450000,
    userId: "user_567456",
  },
  {
    songName: "Unholy",
    artist: "Sam Smith & Kim Petras",
    dateStreamed: new Date("2024-08-15T13:20:00Z"),
    streamCount: 420000,
    userId: "user_678567",
  },
];

// Utility function to generate additional mock data if needed
export function generateMockData(count: number): RecentStreamDataPoint[] {
  const artists = [
    "Taylor Swift",
    "The Weeknd",
    "Miley Cyrus",
    "Ed Sheeran",
    "Dua Lipa",
  ];
  const songs = [
    "Cruel Summer",
    "Starboy",
    "Flowers",
    "Shape of You",
    "Levitating",
  ];

  return Array.from({ length: count }, () => ({
    songName: songs[Math.floor(Math.random() * songs.length)],
    artist: artists[Math.floor(Math.random() * artists.length)],
    dateStreamed: new Date(
      Date.now() - Math.floor(Math.random() * 30 * 24 * 60 * 60 * 1000)
    ),
    streamCount: Math.floor(Math.random() * 1000000),
    userId: `user_${Math.floor(Math.random() * 1000000)}`,
  }));
}
