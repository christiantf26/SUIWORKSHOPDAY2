import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

export function NftMintSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="w-4 h-4" />
          Mint NFT
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="relative rounded-lg overflow-hidden">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh1cpBR8d2D2P55Z2kQzlr6uGuhRfWzEnoVQ&s"
            alt="PSIL NFT"
            className="w-full aspect-square object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 p-3 text-white">
            <p className="font-bold">Pria Solo Itu Lagi</p>
            <p className="text-xs opacity-80">SAYA AKAN PULANG KE SOLO</p>
          </div>
        </div>

        <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
          <span className="text-sm text-muted-foreground">Price</span>
          <span className="font-bold">0 USDC</span>
        </div>

        <Button className="w-full">
          <>
            <Sparkles className="w-4 h-4 mr-1" />
            Mint
          </>
        </Button>
      </CardContent>
    </Card>
  );
}
