import { Wallet } from "lucide-react";
import { UsdcSection } from "./components/usdc-section";
import { ConnectButton } from "@mysten/dapp-kit-react";

export function App() {
  return (
    <div className="min-h-screen bg-background bg-grid">
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="font-bold">Sui Workshop Mas Titut</h1>
        <ConnectButton />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6">
        {/* <span>Start Here!</span> */}
        <UsdcSection />
      </main>
    </div>
  );
}
