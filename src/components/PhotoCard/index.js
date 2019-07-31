import React, { Fragment } from 'react';
import { Article, ImageWrapper, Image, Button } from './styles';
import useLocalStorage from '../../hooks/useLocalStorage';
import useNearScreen from '../../hooks/useNearScreen';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
const DEFAULT_IMAGE =
  'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png';

const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const key = `like-${id}`;
  const [liked, setLiked] = useLocalStorage(key, false);
  const [show, ref] = useNearScreen();

  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  return (
    <Article ref={ref}>
      { show &&
        <Fragment>
          <a href={`/detail/${id}`}>
            <ImageWrapper>
              <Image src={src} />
            </ImageWrapper>
          </a>

          <Button onClick={() => setLiked(!liked)}>
            <Icon size='32px' /> {likes} likes
          </Button>
        </Fragment>
      }
    </Article>
  );
};

export default PhotoCard;
