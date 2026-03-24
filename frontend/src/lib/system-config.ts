// Pi Network system configuration
export const systemConfig = {
  // Payment configuration
  payments: {
    enabled: true,
    testnet: true,
    sandbox: false,
  },  

  // App features
  features: {
    treeGrowth: true,  
    memories: true,  
    globalGrove: true,
    rewards: true,
  },

  // Tree stats
  tree: {
    initialDays: 45,  
    initialBranches: 8,
    initialMemories: 12,
    initialPiEarned: 12.5,
    growthProgress: 75,
  },

  // Colors  
  colors: {
    primary: "#4CAF50",
    secondary: "#8B5A2B",
    background: "#FFFFFF",
  },   
};  

export default systemConfig;
