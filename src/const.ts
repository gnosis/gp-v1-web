import BN from 'bn.js'

// Some convenient numeric constant
export const ZERO = new BN(0)
export const ONE = new BN(1)
export const TWO = new BN(2)
export const TEN = new BN(10)

// Max allowance value for ERC20 approve
export const ALLOWANCE_VALUE = new BN(2).pow(new BN(256)).sub(ONE) // 115792089237316195423570985008687907853269984665640564039457584007913129639935

// Model constants
export const FEE_DENOMINATOR = 1000 // Fee is 1/fee_denominator i.e. 1/1000 = 0.1%
export const BATCH_TIME = 300