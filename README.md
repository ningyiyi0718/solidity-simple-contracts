# solidity-simple-contracts
solidity simple contracts

## 安装hardhat
``` npm install --save-dev hardhat ```
``` npm install --save-dev @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers ```

### 安装hardhat不成功的话, 命令行设置一下代理
``` windows: set http_proxy=http://127.0.0.1:8001 ```
``` mac: export http_proxy=http://127.0.0.1:8001 ```

``` git config --global http.proxy 127.0.0.1:8087 ``` 
``` git config --global http.sslVerify false ```

## 初始化
``` yarn install ```

## 测试
``` npx hardhat test test/test_kitties.js --network heco ```