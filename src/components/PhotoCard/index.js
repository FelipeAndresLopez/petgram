import React from 'react';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';
import { Article, ImgWrapper, Image } from './styles';
import { useNearScreen } from '../../hooks/useNearScreen';
import { LikeButton } from '../LikeButton';
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation';

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png';

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, ref] = useNearScreen();

  return (
    <Article ref={ref}>
      {
        show && (
          <>
            <Link to={`/detail/${id}`}>
              <ImgWrapper>
                <Image src={src} alt="" />
              </ImgWrapper>
            </Link>
            <ToggleLikeMutation>
              {
                (toggleLike) => {
                  const handleLikeBtnClick = () => {
                    toggleLike({
                      variables: {
                        input: { id }
                      }
                    });
                  };
                  return <LikeButton liked={liked} likes={likes} onClick={handleLikeBtnClick} />
                }
              }
            </ToggleLikeMutation>
          </>
        )
      }

    </Article>
  );
};

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: function (props, propName) {
    const propValue = props[propName];

    if (propValue === undefined) {
      return new Error(`${propName} value must be defined`);
    }

    if (propValue < 0) {
      return new Error(`${propName} value must be greater than 0`);
    }
  }
};
