/**
 * Created by wensheng on 2016/5/21.
 */
export interface Nav{
    id: number,
    name: string,
    url: string,
    active?: boolean
}

export interface NavbarSettings{
    nav: Nav[]
}