// npx tsc-watch buildlab/lab-s/keypair.ts --outDir ./buildlab/lab-s/ignore-generated --onSuccess "node ./buildlab/lab-s/ignore-generated/keypair.js"

import * as web3 from '@solana/web3.js';
(async () => {
  const keypair = web3.Keypair.generate();
  console.log('keypair', keypair, keypair.publicKey.toString());
})();
