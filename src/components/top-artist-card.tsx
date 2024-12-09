import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TopArtistCardProps {
  name: string;
  streams: number;
  imageUrl: string;
  genre: string;
}

export function TopArtistCard({ name, streams, imageUrl }: TopArtistCardProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-lg flex items-center justify-between">
          Top Artist (30 days)
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={imageUrl} alt={name} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold text-xl">{name}</h3>
            <div className="flex items-center gap-2">
              <span className="font-medium">{streams.toLocaleString()}</span>
              <span className="text-sm text-muted-foreground">streams</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default TopArtistCard;
