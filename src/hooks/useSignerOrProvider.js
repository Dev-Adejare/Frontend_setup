import { useAppKitProvider } from "@reown/appkit/react"
import { BrowserProvider } from "ethers";
import { useEffect, useMemo } from "react";

const usesignerOrProvider = () => {

    const [ signer, setSigner] = useState();
     
    const { walletProvider } = useAppKitProvider("eip155");

    const provider = useMemo( 
        
        () => ( walletProvider ? new BrowserProvider(walletProvider) : null),
        [walletProvider]
    );

    useEffect(() => {
        if(!provider) return setSigner(null);

        provider.getSigner().then((newSigner) => {
            if(!signer) return setSigner(newSigner);
            if(newSigner.address !== signer.address) return setSigner(newSigner);
        })
    })
}

export default usesignerOrProvider
