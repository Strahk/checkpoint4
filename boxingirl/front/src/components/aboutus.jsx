import React from 'react';

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  };

  render() {
    return (
      <div>
        <div>
          <h1>A propos du site</h1>
        </div>
        <div>
          Ce site a pour objectif de renforcer la présence féminine dans les clubs de boxes anglaise et de manière plus générale dans les arts martiaux.
          <hr />
          En effet, depuis 2012 on observe une augmentation d'environ 15% de femmes licencées en club en Midi-Pyrénées. Aujourd'hui, 35% des licenciés sont des femmes.
          Une augmentation encourageante mais pas suffisante à la vue de la progression exponentielle des violences faites envers les femmes.
          Il nous semble donc nécessaire, voire vital, de prémunir plus de femmes des gestes et postures d'auto-défense.
          <hr />
          Il est important que l'image des sports de combat et de self-défense s'améliore. Au-delà de l'aspect violent que peuvent renvoyer certaines pratiques,
          pratiquer un sport de self-défence nécessite respect, maîtrise de soi et surtout de la discipline, des valeurs que nous souhaitons enseigner au plus grand nombre par les arts martiaux éducatifs.
          Outre cet aspect, pratiquer un sport régulièrement améliorera vos qualités physiques ainsi que votre hygiène de vie.
          Lancez vous mesdames !
        </div>
      </div>
    )
  }
};

export default AboutUs;