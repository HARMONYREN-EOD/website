async function donate() {
  try {
    const eurAmount = parseFloat(document.getElementById("donation-amount").value);
    if (isNaN(eurAmount) || eurAmount <= 0) {
      console.log("Invalid amount");
      return;
    }

    const response = await fetch('https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=BNB');
    const data = await response.json();
    const bnbAmount = eurAmount * data.BNB;

    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const userAddress = accounts[0];

    const chainId = await window.ethereum.request({ method: 'eth_chainId' });
    if (chainId !== '0x38') {
      alert("Please switch to Binance Smart Chain (BSC) network in MetaMask.");
      return;
    }

    const valueInWei = BigInt(Math.floor(bnbAmount * 1e18)).toString(16);

    await window.ethereum.request({
      method: 'eth_sendTransaction',
      params: [{
        from: userAddress,
        to: '0x850a059814C88a51B6239F4a5be5cF46c98EB3fa',
        value: '0x' + valueInWei
      }]
    });

    const successDiv = document.getElementById("show-on-success");
    if (successDiv) {
      successDiv.style.display = "block";
    }
    console.log(`Sent ${bnbAmount} BNB successfully!`);

  } catch (error) {
    // Ignore user rejection
    if (error.code === 4001) {
      return;
    }
    console.error(error);
  }
}
