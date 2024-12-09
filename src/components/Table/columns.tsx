import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "../ui/button";
import { DashboardData } from "@/store/slices/dashboardSlice";
import moment from "moment";

export const columns: ColumnDef<DashboardData>[] = [
  {
    accessorKey: "userId",
    header: "User ID",
    cell: ({ row }) => {
      const userId = row.getValue("userId");
      return <div>{userId.toUpperCase()}...</div>;
    },
  },
  {
    accessorKey: "dateStreamed",
    header: "Date Streamed",
    cell: ({ row }) => {
      const dateStreamed = row.getValue("dateStreamed");
      return <div>{moment(dateStreamed).format("DD MMM YYYY")}</div>;
    },
  },
  {
    accessorKey: "songName",
    header: "Song Name",
  },
  {
    accessorKey: "artist",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Artist
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "streamCount",
    header: () => <div className="text-right">Stream Count</div>,
    cell: ({ row }) => {
      const streamCount = row.getValue("streamCount");

      return (
        <div className="text-right font-medium">
          {streamCount.toLocaleString()}
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy user ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View artist</DropdownMenuItem>
            <DropdownMenuItem>View song</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
