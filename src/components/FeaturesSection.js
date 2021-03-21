import React from 'react';
import _ from 'lodash';

import {classNames, withPrefix, markdownify} from '../utils';
import SectionActions from './SectionActions';

export default class FeaturesSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section className="section section--features">
              <div className="container container--lg">
                  <div className="flex flex--middle flex-center flex-col-2">
                      <div className="cell section__media">
                          <img src="/images/about-min-768x512.jpg" alt="about" />
                      </div>
                      </div>
                {_.map(_.get(section, 'features', null), (feature, feature_idx) => (
                <div key={feature_idx} className={classNames('flex', 'flex--middle', 'flex--center', 'flex--col-2', {'align-center': _.get(feature, 'align', null) === 'center', 'align-right': _.get(feature, 'align', null) === 'right'})}>
                  {_.get(feature, 'image', null) && (
                  <div className={classNames('cell', 'section__media', {'section__media--right': _.get(feature, 'image_position', null) === 'right'})}>
                    <img src={withPrefix(_.get(feature, 'image', null))} alt={_.get(feature, 'image_alt', null)} />
                  </div>
                  )}
                  <div className="section__body cell">
                    {_.get(feature, 'title', null) && (
                      _.get(section, 'title', null) ? (
                      <h3 className="section__title"><div id={_.get(feature, 'title', null)}>{_.get(feature, 'title', null)}</div></h3>
                      ) : 
                      <h2 className="section__title">{_.get(feature, 'title', null)}</h2>
                    )}
                    {_.get(feature, 'content', null) && (
                    <div className="section__copy">
                      {markdownify(_.get(feature, 'content', null))}
                    </div>
                    )}
                  </div>
                </div>
                ))}
              </div>
            </section>
        );
    }
}
