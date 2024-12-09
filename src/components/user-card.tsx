import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingDown, TrendingUp } from "lucide-react";

function TrendIcon({
  isProgress,
  percentageChange,
}: {
  isProgress: boolean;
  percentageChange: number;
}) {
  return isProgress ? (
    <div className="flex rounded-sm border border-green-500 items-center gap-2 text-green-500 px-1 py-0.5">
      <TrendingUp className="h-4 w-4 text-green-500" />
      <div className="text-xs">{percentageChange}%</div>
    </div>
  ) : (
    <div className="flex items-center gap-2 text-red-500 px-1 py-0.5 rounded-sm border border-red-500">
      <TrendingDown className="h-4 w-4 text-red-500" />
      <div className="text-xs">{percentageChange}%</div>
    </div>
  );
}

export function UserCard({
  title,
  description,
  isProgress,
}: {
  title: string;
  description: number;
  isProgress: boolean;
}) {
  const percentageChange = 5.5;

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-lg flex items-center justify-between">
          <div>{title}</div>
          <TrendIcon
            isProgress={isProgress}
            percentageChange={percentageChange}
          />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-end gap-0.5">
          <p className="text-2xl font-semibold">
            {description.toLocaleString()}
          </p>
          &nbsp;
          <p className="text-lg font-medium text-muted-foreground">500</p>
        </div>
        <div className="text-muted-foreground text-sm">
          {isProgress
            ? "Increase by 14 this month"
            : "Decrease by 14 this month"}
        </div>
      </CardContent>
    </Card>
  );
}

export default UserCard;
