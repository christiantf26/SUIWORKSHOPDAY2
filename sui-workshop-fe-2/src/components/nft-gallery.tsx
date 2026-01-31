import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ImageIcon } from "lucide-react";

export function NftGallery() {
  const count = 0;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ImageIcon className="w-4 h-4" />
          Your NFTs
          {count > 0 && (
            <span className="ml-auto text-sm font-normal text-muted-foreground">{count}</span>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {count > 0 ? (
          <div className="grid grid-cols-2 gap-2">
            <div className="relative rounded-lg overflow-hidden border">
              <img src="https://via.placeholder.com/150" alt="NFT" className="w-full aspect-square object-cover" />
              <span className="absolute top-1 right-1 bg-black/60 text-white text-xs px-1.5 py-0.5 rounded">
                #0
              </span>
            </div>
          </div>
        ) : (
          <p className="text-center py-6 text-sm text-muted-foreground">No NFTs yet</p>
        )}
      </CardContent>
    </Card>
  );
}
