import { useAppKitProvider } from "@reown/appkit/react";
import { BrowserProvider } from "ethers";
import { useEffect, useMemo, useState } from "react";

const useSignerOrProvider = () => {
  const [signer, setSigner] = useState();

  const { walletProvider } = useAppKitProvider();

  const provider = useMemo(
    () => (walletProvider ? new BrowserProvider(walletProvider) : null),
    [walletProvider]
  );

  useEffect(() => {
    if (!provider) return setSigner(null);

    provider.getSigner().then((newSigner) => {
      if (!signer) return setSigner(newSigner);
      if (newSigner.address === signer.address) return setSigner(newSigner);
    });
  }, [provider, signer]);

  return { signer, provider };
};

export default useSignerOrProvider;