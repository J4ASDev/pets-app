import React, { Fragment } from 'react';
import { Article, ImageWrapper, Image } from './styles';
import { Link } from '@reach/router';
import useLocalStorage from '../../hooks/useLocalStorage';
import useNearScreen from '../../hooks/useNearScreen';
import FavButton from '../FavButton';
import ToggleLikeMutation from '../../containers/ToggleLikeMutation';

const DEFAULT_IMAGE =
  'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png';

const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const key = `like-${id}`;
  const [liked, setLiked] = useLocalStorage(key, false);
  const [show, ref] = useNearScreen();

  return (
    <Article ref={ref}>
      { show &&
        <Fragment>
          <Link to={`/detail/${id}`}>
            <ImageWrapper>
              <Image src={src} />
            </ImageWrapper>
          </Link>

          <ToggleLikeMutation>
            {
              toggleLike => {
                const handleFavClick = () => {
                  !liked && toggleLike({ variables: { input: { id } } });

                  setLiked(!liked);
                };

                return <FavButton liked={liked} likes={likes} onClick={handleFavClick} />;
              }
            }
          </ToggleLikeMutation>
        </Fragment>
      }
    </Article>
  );
};

export default PhotoCard;
