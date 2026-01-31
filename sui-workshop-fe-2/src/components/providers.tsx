import { dAppKit } from "@/lib/dapp-kit";
import { DAppKitProvider } from "@mysten/dapp-kit-react";
import { 
  QueryClient, 
  QueryClientProvider 
} from "@tanstack/react-query";

export const queryClient = new QueryClient();

export function Providers({ 
  children 
}: { 
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <DAppKitProvider dAppKit={dAppKit}>
        {children}
      </DAppKitProvider>
    </QueryClientProvider>
  );
}