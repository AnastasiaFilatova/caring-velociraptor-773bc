import React from 'react';
import {Helmet} from 'react-helmet';
import _ from 'lodash';

import {withPrefix, attribute} from '../utils';
import '../sass/main.scss';
import Header from './Header';
import Footer from './Footer';

export default class Body extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>{_.get(this.props, 'pageContext.frontmatter.seo.title', null) ? (_.get(this.props, 'pageContext.frontmatter.seo.title', null)) : _.get(this.props, 'pageContext.frontmatter.title', null) + ' | ' + _.get(this.props, 'pageContext.site.siteMetadata.title', null)}</title>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initialScale=1.0" />
                    <meta name="google" content="notranslate" />
                    <meta name="description" content={_.get(this.props, 'pageContext.frontmatter.seo.description', null) || ''} />
                    {_.get(this.props, 'pageContext.frontmatter.seo.robots', null) && (
                    <meta name="robots" content={_.join(_.get(this.props, 'pageContext.frontmatter.seo.robots', null), ',')}/>
                    )}
                    {_.map(_.get(this.props, 'pageContext.frontmatter.seo.extra', null), (meta, meta_idx) => {
                        let key_name = _.get(meta, 'keyName', null) || 'name';
                        return (
                          _.get(meta, 'relativeUrl', null) ? (
                            _.get(this.props, 'pageContext.site.siteMetadata.domain', null) && ((() => {
                                let domain = _.trim(_.get(this.props, 'pageContext.site.siteMetadata.domain', null), '/');
                                let rel_url = withPrefix(_.get(meta, 'value', null));
                                let full_url = domain + rel_url;
                                return (
                                  <meta key={meta_idx} {...(attribute(key_name, _.get(meta, 'name', null)))} content={full_url}/>
                                );
                            })())
                          ) : 
                            <meta key={meta_idx + '.1'} {...(attribute(key_name, _.get(meta, 'name', null)))} content={_.get(meta, 'value', null)}/>
                        )
                    })}
                    {_.get(this.props, 'pageContext.site.siteMetadata.favicon', null) && (
                    <link rel="icon" href={withPrefix(_.get(this.props, 'pageContext.site.siteMetadata.favicon', null))}/>
                    )}
                </Helmet>
                <div id="site-wrap" className="site">
                  <Header {...this.props} />
                  <main id="content" className="site-content">
                    {this.props.children}
                    



                    <div className="container container--lg">
                
                <div key={feature_idx} className="section">
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
                    {_.get(feature, 'actions', null) && (
                    <div className="section__actions btn-group">
                      <SectionActions {...this.props} actions={_.get(feature, 'actions', null)} />
                    </div>
                    )}
                  </div>
                  </main>
                  <Footer {...this.props} />
                </div>
            </React.Fragment>
        );
    }
}
