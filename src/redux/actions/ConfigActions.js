import { STORE_CONFIG } from '../ActionTypes';

export const storeConfig = (config) => {
    return {
        type: STORE_CONFIG,
        config
    }
};
