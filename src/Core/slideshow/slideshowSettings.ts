/**
 * Created by wensheng on 2016/5/28.
 */
export interface slideshow{
    id: number;
    imageUrl: string;
    alt?: string;
    isActive: boolean;
    caption?: string;
    subCaption?: string;
}

export interface slideshowSettings{
    slides: slideshow[];
}