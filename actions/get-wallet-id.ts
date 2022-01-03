export function getWalletId(apiClient) {
    if (process.env.SOLANA_WALLET_ID) {
        return process.env.SOLANA_WALLET_ID
    }

    
}