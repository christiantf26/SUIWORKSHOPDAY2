import { USDC_TYPE } from "@/lib/contracts";
import { 
  useCurrentAccount, 
  useCurrentClient 
} from "@mysten/dapp-kit-react";
import { useQuery } from "@tanstack/react-query";

export function useUsdcBalance() {
  const account = useCurrentAccount();
  const client = useCurrentClient();

  return useQuery({
    queryKey: ["usdc-balance"],
    queryFn: async () => {
      if (!account) return { balance: 0n };
      const { objects } = await client.listCoins({
        owner: account.address,
        coinType: USDC_TYPE,
      });

      const balance = objects.reduce((total, coin) => {
        return total + BigInt(coin.balance || 0);
      }, 0n);

      return { balance };
    }
  })
}