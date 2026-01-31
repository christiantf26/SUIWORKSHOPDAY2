import { CONTRACTS, parseUSDC } from "@/lib/contracts";
import { useCurrentAccount, useDAppKit } from "@mysten/dapp-kit-react";
import { Transaction } from "@mysten/sui/transactions";
import { useState } from "react";

export function useMintUsdc() {
  const account = useCurrentAccount();
  const { signAndExecuteTransaction } = useDAppKit();
  const [isPending, setIsPending] = useState(false);

  const mint = async () => {
    if (!account) {
      throw new Error("No connected account");
    }

    setIsPending(true);
    try {
      const tx = new Transaction();

      tx.moveCall({
        target: `${CONTRACTS.PACKAGE_ID}::usdc::mint_to`,
        arguments: [
          tx.object(CONTRACTS.USDC_TREASURY_CAP),
          tx.pure.u64(parseUSDC(100)),
          tx.pure.address(account.address),
        ],
      });

      await signAndExecuteTransaction({ transaction: tx });
    } finally {
      setIsPending(false);
    }
  };

  return { mint, isPending };
}