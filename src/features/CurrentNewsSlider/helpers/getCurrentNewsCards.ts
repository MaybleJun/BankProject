import { TNewsCardProps } from '../CurrentNewsSlider';
import { fetchNewsReel } from '../api/api';

interface CurrentNewsApiResponse {
    articles: TNewsCardProps[];
}

export const getCurrentNewsCards = async function (
    controller?: AbortController,
): Promise<TNewsCardProps[]> {
    try {
        const response: CurrentNewsApiResponse = await fetchNewsReel(controller);
        const newsList = response.articles.filter(
            ({ description, urlToImage }: TNewsCardProps) => !!description && !!urlToImage,
        );
        return newsList;
    } catch (error) {
        console.error('Error fetching news reel:', error);
        return [];
    }
};
