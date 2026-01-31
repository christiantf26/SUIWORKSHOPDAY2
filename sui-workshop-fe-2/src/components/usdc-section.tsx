import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

export function UsdcSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <img
            src="https://cryptologos.cc/logos/usd-coin-usdc-logo.png"
            alt="USDC"
            className="w-5 h-5"
          />
          USDC
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
          <span className="text-sm text-muted-foreground">Balance</span>
          <span className="text-lg font-bold">0</span>
        </div>

        <Button className="w-full">
            <>
              <Plus className="w-4 h-4 mr-1" />
              Mint 100 USDC
            </>
        </Button>
      </CardContent>
    </Card>
  );
}
