import React, { Fragment } from 'react';
import { Article, ImageWrapper, Image } from './styles';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import useNearScreen from '../../hooks/useNearScreen';
import FavButton from '../FavButton';
import ToggleLikeMutation from '../../containers/ToggleLikeMutation';

const DEFAULT_IMAGE =
  'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png';

const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
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
                const handleFavClick = () => toggleLike({ variables: { input: { id } } });

                return <FavButton liked={liked} likes={likes} onClick={handleFavClick} />;
              }
            }
          </ToggleLikeMutation>
        </Fragment>
      }
    </Article>
  );
};

PhotoCard.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  liked: PropTypes.bool,
  likes: PropTypes.number,
  src: PropTypes.string
};

export default PhotoCard;
