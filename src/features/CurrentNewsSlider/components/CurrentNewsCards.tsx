import React, { forwardRef, useEffect, useState } from "react";
import imgMissing from "../../../assets/picture.missing.png";
import { convertMinutesToMilliseconds } from "../../../utils/convertMinutesToMilliseconds";
import { getCurrentNewsCards } from "../helpers/getCurrentNewsCards";
import "./CurrentNewsCards.scss";

export type TNewsCardProps = {
  title?: string;
  description?: string;
  url?: string;
  urlToImage?: string;
};

type CurrentNewsCardsListProps = {
  updateIntervalMinutes?: number;
};

const CurrentNewsCardImage: React.FC<{ urlToImage?: string; title?: string }> = ({ urlToImage, title }) => {
  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.currentTarget;
    target.src = imgMissing;
  };

  return (
    <img
      className="CurrentNewsCard__image"
      src={urlToImage || imgMissing}
      onError={handleError}
      alt={title || "News image"}
      width={256}
      height={120}
    />
  );
};

const CurrentNewsCardFigure: React.FC<{ urlToImage?: string; title?: string }> = ({ urlToImage, title }) => (
  <figure className="CurrentNewsCard__figure">
    <CurrentNewsCardImage urlToImage={urlToImage} title={title} />
    <figcaption className="CurrentNewsCard__title">{title}</figcaption>
  </figure>
);

const NewsCard: React.FC<TNewsCardProps> = ({ title, description, url, urlToImage }) => (
  <div className="CurrentNewsCard">
    {url ? (
      <a href={url} target="_blank" rel="noopener noreferrer">
        <CurrentNewsCardFigure urlToImage={urlToImage} title={title} />
      </a>
    ) : (
      <CurrentNewsCardFigure urlToImage={urlToImage} title={title} />
    )}
    <p className="CurrentNewsCard__desc">{description}</p>
  </div>
);

const CurrentNewsCards = forwardRef<HTMLDivElement, CurrentNewsCardsListProps>(
  ({ updateIntervalMinutes = 15 }, ref) => {
    const [newsArticles, setNewsArticles] = useState<TNewsCardProps[] | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const updateIntervalMs = convertMinutesToMilliseconds(updateIntervalMinutes);

    useEffect(() => {
      const controller = new AbortController();

      const fetchNews = async () => {
        try {
          setIsLoading(true);
          const news = await getCurrentNewsCards(controller);
          if (!controller.signal.aborted) {
            setNewsArticles(news);
          }
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      };

      fetchNews();

      const newsUpdateIntervalId = setInterval(() => {
        fetchNews();
      }, updateIntervalMs);

      return () => {
        controller.abort();
        clearInterval(newsUpdateIntervalId);
      };
    }, [updateIntervalMs]);

    return (
      <>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="CurrentNewsCards" ref={ref}>
            {newsArticles?.map(({ title, description, url, urlToImage }, index) => (
              <NewsCard
                key={index}
                urlToImage={urlToImage}
                title={title}
                url={url}
                description={description}
              />
            ))}
          </div>
        )}
      </>
    );
  }
);

export default CurrentNewsCards;
