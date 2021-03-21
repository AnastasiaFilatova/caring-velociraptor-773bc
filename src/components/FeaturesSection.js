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
                          <img src="/images/about-section-bg.jpg" alt="about" />
                      </div>
                      <div className="section__body cell">
                          <h3 className="section__title">About Andrey</h3>
                          <div className="section__copy">
                              <p>Independent consultant specialized in building secure application delivery platforms on AWS using HashiStack and Kubernetes.</p>
                              <p>AWS architect (6x certifications)</p>
                              <p>Continuous Integration and Continuous delivery expert</p>
                              <p>Trainer (Git, Jenkins, Docker, CI/CD, Terraform, Vault)</p>
                              <p>Public speaker</p>
                              <p>Co-Founder at FivexL. Cloud Engineering Specialists</p>
                              <p>Co-host at DevSecOps Talks Podcast</p>
                              <p>Meetups organizer (Cloud Native Las Palmas de Gran Canaria, HashiCorp User Group Las Palmas de Gran Canaria).</p>
                          </div>
                      </div>
                  </div>
                  <div className="flex flex--middle flex-center flex-col-2">
                      <div className="section__body cell">
                          <h3 className="section__title">Consulting</h3>
                          <div className="section__copy">
                              <p>AWS infrastructure architecture - evolving existing or building from the ground up</p>
                              <p>Immutable Could infrastructure using HashiCorp Packer and HashiCorp Terraform</p>
                              <p>Orchestrating applications using AWS ECS/Kubernetes/HashiCorp Nomad</p>
                              <p>Infrastructure and application secret management using HashiCorp Vault</p>
                              <p>Cloud infrastructure and application security</p>
                              <p>Compliance in the Cloud environments</p>
                              <p>Building and scaling Continuous Integration and Continuous Delivery pipelines using Jenkins</p>
                          </div>
                      </div>
                      <div className="cell section__media">
                          <img src="/images/consulting_main-768x515.png" alt="consulting" />
                      </div>
                  </div>
                  <div className="section--cta section__body">
                      <div className="container container-md">
                          <h3 className="section__title">Certificates</h3>
                          <div className="section__copy">
                              <img src="/images/AWS-SolArchitect-Associate.png" alt="AWS-SolArchitect-Associate certificate" />
                              <img src="/images/AWS-Developer-Associate.png" alt="AWS-Developer-Associate certificate" />
                              <img src="/images/AWS-SysOpAdmin-Associate.png" alt="AWS-SysOpAdmin-Associate certificate" /><br />
                              <img src="/images/AWS-Security-Specialty.png" alt="AWS-Security-Specialty certificate" />
                              <img src="/images/Terraform-Associate-Badge.png" alt="Terraform-Associate-Badge png" />                  
                          </div>
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
