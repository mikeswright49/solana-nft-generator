var web3 = require('@solana/web3.js');

export async function getApiClient() {
  // Connect to cluster
  var connection = await new web3.Connection(
    web3.clusterApiUrl("devnet"),
    'confirmed',
  );
  return connection
}