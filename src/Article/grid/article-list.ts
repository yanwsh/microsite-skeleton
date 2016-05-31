/**
 * Created by wensheng on 2016/5/30.
 */
export interface ArticleList{
    articles: ArticleInfo[];
}

export interface ArticleInfo{
    id: number;
    shortTitle: string;
    subtitle: string;
    imageUrl: string;
}