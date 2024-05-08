export enum ValidateSearchOrSubscribeTypes {
    SEARCH = 'search',
    SUBSCRIBE = 'subscribe',
}

type ValidationResultReason = 'inputEmpty'|'invalidEmailFormat'|'leadingSpace'|'';

export interface ValidationResult{
    result:boolean
    reason:ValidationResultReason
}
