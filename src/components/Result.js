import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';

function Result(props) {
  return (
    <CSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div>
        <p>Ton résultat:</p>
        <p>A l'avenir en Suisse, tu</p>
<p>• As des cuisses musclées</p>
<p>• ne sais plus ce qu'est un sac poubelle</p>
<p>• consommes du bonheur immatériel</p>
<p>• manges les tomates de ton balcon</p>
<img width="100%" alt="" src="Future_Switzerland_1.png" />
      </div>
    </CSSTransitionGroup>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;
