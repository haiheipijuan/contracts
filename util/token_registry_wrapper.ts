import { Token } from './types';
import { ContractInstance } from './types';

export class TokenRegWrapper {
  private tokenReg: ContractInstance;
  constructor(tokenRegContractInstance: ContractInstance) {
    this.tokenReg = tokenRegContractInstance;
  }
  public addTokenAsync(token: Token, from: string) {
    const tx = this.tokenReg.addToken(
      token.address,
      token.name,
      token.symbol,
      token.url,
      token.decimals,
      token.ipfsHash,
      token.swarmHash,
      { from },
    );
    return tx;
  }
  public async getTokenMetaDataAsync(tokenAddress: string) {
    const data = await this.tokenReg.getTokenMetaData(tokenAddress);
    const token: Token = {
      address: data[0],
      name: data[1],
      symbol: data[2],
      url: data[3],
      decimals: data[4].toNumber(),
      ipfsHash: data[5],
      swarmHash: data[6],
    };
    return token;
  }
  public async getTokenByNameAsync(tokenName: string) {
    const data = await this.tokenReg.getTokenByName(tokenName);
    const token: Token = {
      address: data[0],
      name: data[1],
      symbol: data[2],
      url: data[3],
      decimals: data[4].toNumber(),
      ipfsHash: data[5],
      swarmHash: data[6],
    };
    return token;
  }
  public async getTokenBySymbolAsync(tokenSymbol: string) {
    const data = await this.tokenReg.getTokenBySymbol(tokenSymbol);
    const token: Token = {
      address: data[0],
      name: data[1],
      symbol: data[2],
      url: data[3],
      decimals: data[4].toNumber(),
      ipfsHash: data[5],
      swarmHash: data[6],
    };
    return token;
  }
}
