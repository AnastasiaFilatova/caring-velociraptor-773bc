import React from 'react';
import _ from 'lodash';

import {classNames, withPrefix} from '../utils';
import SectionActions from './SectionActions';

export default class CtaSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section className="section section--cta">
              <div className="container container--lg">
                <div className={classNames('section__body', 'align-center', {'inverse bg-blue': _.get(section, 'has_background', null) && (_.get(section, 'background_color', null) === 'blue'), 'bg-gray': _.get(section, 'has_background', null) && (_.get(section, 'background_color', null) === 'gray')})}>
                  <div className="container container--md">
                    {_.get(section, 'title', null) && (
                    <h2 className="section__title">{_.get(section, 'title', null)}</h2>
                    )}
                    {_.get(section, 'subtitle', null) && (
                    <div className="section__copy">
                      <p>{_.get(section, 'subtitle', null)}</p>
                    </div>
                    )}
                    <img src="/images/AWS-SolArchitect-Associate.png" alt="AWS-SolArchitect-Associate certificate" />
                    <img src="/images/AWS-Developer-Associate.png" alt="AWS-Developer-Associate certificate" />
                    <img src="/images/AWS-SysOpAdmin-Associate.png" alt="AWS-SysOpAdmin-Associate certificate" /><br />
                    <img src="/images/AWS-Security-Specialty.png" alt="AWS-Security-Specialty certificate" />
                    <img src="/images/Terraform-Associate-Badge.png" alt="Terraform-Associate-Badge png" />
                    {_.get(section, 'actions', null) && (
                    <div className="section__actions btn-group">
                      <SectionActions {...this.props} actions={_.get(section, 'actions', null)} />
                    </div>
                    )}
                  </div>

                  <div className="container container--md">
                    
                    <h2 className="section__title">Some of the happy customers</h2>
                    
                    <img src="/images/hippo.png" alt="hippo customer" />
                    <img src="/images/praqma.png" alt="praqma customer" />
                    <img src="/images/atlas_copco.png" alt="atlas_copco customer" /><br />
                    <img src="/images/volvo.png" alt="volvo customer" />
                    <img src="/images/ericsson.png" alt="ericsson customer" />
                    
                    {_.get(section, 'actions', null) && (
                    <div className="section__actions btn-group">
                      <SectionActions {...this.props} actions={_.get(section, 'actions', null)} />
                    </div>
                    )}
                  </div>
                </div>
              </div>
            </section>
        );
    }
}
