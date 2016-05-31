/**
 * Created by wensheng on 2016/5/30.
 */
import {slideshowSettings} from '../../Core/slideshow/slideshowSettings'
export enum ArticleType{
    basic, slideshow, inline_slideshow
}

export interface ArticleDetail{
    id: number;
    type: ArticleType;
    imageUrl?: string;
    author: string;
    publishTime: string;
    titile: string;
    subtitle: string;
    content: string;
    slideshow: slideshowSettings;
}