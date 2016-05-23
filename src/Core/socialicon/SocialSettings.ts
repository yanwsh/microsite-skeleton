/**
 * Created by wensheng on 2016/5/22.
 */
export interface Social{
    id: number,
    name: string,
    className: string,
    clickUrl?: string,
    target?: string,
    onClick?: () => any
}

export interface SocialSettings{
    socials: Social[]
}