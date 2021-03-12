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
                    <section class="elementor-element elementor-element-44f13b9 elementor-section-height-min-height elementor-section-boxed elementor-section-height-default elementor-section-items-middle elementor-section elementor-top-section" data-id="44f13b9" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
<div class="elementor-background-overlay"></div>
<div class="elementor-container elementor-column-gap-default">
<div class="elementor-row">
<div class="elementor-element elementor-element-9f71c66 elementor-column elementor-col-100 elementor-top-column" data-id="9f71c66" data-element_type="column">
<div class="elementor-column-wrap  elementor-element-populated">
<div class="elementor-widget-wrap">
<div class="elementor-element elementor-element-fa0c2a8 elementor-widget elementor-widget-heading" data-id="fa0c2a8" data-element_type="widget" data-widget_type="heading.default">
<div class="elementor-widget-container">
<h2 class="elementor-heading-title elementor-size-default"><a href="https://www.linkedin.com/in/andreydevyatkin">Certificates</a></h2>	</div>
</div>
<div class="elementor-element elementor-element-3068fdd gallery-spacing-custom elementor-widget elementor-widget-image-gallery" data-id="3068fdd" data-element_type="widget" data-widget_type="image-gallery.default">
<div class="elementor-widget-container">
<div class="elementor-image-gallery">
<div id="gallery-1" class="gallery galleryid-6 gallery-columns-5 gallery-size-thumbnail"><figure class="gallery-item">
<div class="gallery-icon landscape">
<a data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="3068fdd" data-elementor-lightbox-title="AWS-SolArchitect-Associate" href="/wp-content/uploads/2020/09/AWS-SolArchitect-Associate-1.png"><img width="150" height="150" src="/wp-content/uploads/2020/09/AWS-SolArchitect-Associate-1-150x150.png" class="attachment-thumbnail size-thumbnail" alt="" loading="lazy" srcset="/wp-content/uploads/2020/09/AWS-SolArchitect-Associate-1-150x150.png 150w, /wp-content/uploads/2020/09/AWS-SolArchitect-Associate-1-300x300.png 300w, /wp-content/uploads/2020/09/AWS-SolArchitect-Associate-1.png 600w" sizes="(max-width: 150px) 100vw, 150px"></a>
</div></figure><figure class="gallery-item">
<div class="gallery-icon landscape">
<a data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="3068fdd" data-elementor-lightbox-title="AWS-Developer-Associate" href="/wp-content/uploads/2020/09/AWS-Developer-Associate-1.png"><img width="150" height="150" src="/wp-content/uploads/2020/09/AWS-Developer-Associate-1-150x150.png" class="attachment-thumbnail size-thumbnail" alt="" loading="lazy" srcset="/wp-content/uploads/2020/09/AWS-Developer-Associate-1-150x150.png 150w, /wp-content/uploads/2020/09/AWS-Developer-Associate-1-300x300.png 300w, /wp-content/uploads/2020/09/AWS-Developer-Associate-1.png 600w" sizes="(max-width: 150px) 100vw, 150px"></a>
</div></figure><figure class="gallery-item">
<div class="gallery-icon landscape">
<a data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="3068fdd" data-elementor-lightbox-title="AWS-SysOpAdmin-Associate" href="/wp-content/uploads/2020/09/AWS-SysOpAdmin-Associate-1.png"><img width="150" height="150" src="/wp-content/uploads/2020/09/AWS-SysOpAdmin-Associate-1-150x150.png" class="attachment-thumbnail size-thumbnail" alt="" loading="lazy" srcset="/wp-content/uploads/2020/09/AWS-SysOpAdmin-Associate-1-150x150.png 150w, /wp-content/uploads/2020/09/AWS-SysOpAdmin-Associate-1-300x300.png 300w, /wp-content/uploads/2020/09/AWS-SysOpAdmin-Associate-1.png 600w" sizes="(max-width: 150px) 100vw, 150px"></a>
</div></figure><figure class="gallery-item">
<div class="gallery-icon landscape">
<a data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="3068fdd" data-elementor-lightbox-title="AWS-Security-Specialty" href="/wp-content/uploads/2020/09/AWS-Security-Specialty-1.png"><img width="150" height="150" src="/wp-content/uploads/2020/09/AWS-Security-Specialty-1-150x150.png" class="attachment-thumbnail size-thumbnail" alt="" loading="lazy" srcset="/wp-content/uploads/2020/09/AWS-Security-Specialty-1-150x150.png 150w, /wp-content/uploads/2020/09/AWS-Security-Specialty-1-300x300.png 300w, /wp-content/uploads/2020/09/AWS-Security-Specialty-1.png 600w" sizes="(max-width: 150px) 100vw, 150px"></a>
</div></figure><figure class="gallery-item">
<div class="gallery-icon landscape">
<a data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="3068fdd" data-elementor-lightbox-title="Terraform-Associate-Badge" href="/wp-content/uploads/2020/09/Terraform-Associate-Badge-1.png"><img width="150" height="150" src="/wp-content/uploads/2020/09/Terraform-Associate-Badge-1-150x150.png" class="attachment-thumbnail size-thumbnail" alt="" loading="lazy" srcset="/wp-content/uploads/2020/09/Terraform-Associate-Badge-1-150x150.png 150w, /wp-content/uploads/2020/09/Terraform-Associate-Badge-1.png 220w" sizes="(max-width: 150px) 100vw, 150px"></a>
</div></figure>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
                  </main>
                  <Footer {...this.props} />
                </div>
            </React.Fragment>
        );
    }
}
