import { VideoExtractor, IVideo, ProxyConfig } from '../models';
import { AxiosAdapter } from 'axios';
declare class GogoCDN extends VideoExtractor {
    protected serverName: string;
    protected sources: IVideo[];
    private readonly keys;
    private referer;
    private isUsingProxy;
    constructor(proxyConfig?: ProxyConfig, adapter?: AxiosAdapter, isUsingProxy?: boolean);
    extract: (videoUrl: URL) => Promise<IVideo[]>;
    private addSources;
    private generateEncryptedAjaxParams;
    private decryptAjaxData;
}
export default GogoCDN;
