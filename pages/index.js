import { useState } from 'react';
import { ethers } from 'ethers';

export default function Home() {
  const [connectedWallet, setConnectedWallet] = useState(null);

  async function connectToMetamask() {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      setConnectedWallet(address);
    } else {
      alert('Metamask is not installed!');
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: 'beige'}}>
      <h1 style={{ marginBottom: '2rem' }}>Connect To NFT Marketplace</h1>
      <button style={{ padding: '1rem 2rem', fontSize: '1.2rem', borderRadius: '0.5rem', backgroundColor: '#4caf50', color: 'white', border: 'none' }} onClick={connectToMetamask}>Connect Wallet</button>
      {connectedWallet && (
        <p style={{ marginTop: '2rem' }}>Connected Wallet Address: {connectedWallet}</p>
      )}
    </div>
  );
}
