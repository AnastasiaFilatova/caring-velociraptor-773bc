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
                    <section class="section bg-none pt-6 pb-6 sb-outline-node" data-sb-field-path="['content/pages/index.md'].fields.sections.items[1]" data-sb-xpath="/html/body[1]/div[1]/div[1]/main[1]/section[2]" data-sb-path="1.0.0.1.1.0.0" data-sb-type="object"><div class="container container--medium mb-5 text-center"><div class="section__subtitle sb-outline-node" data-sb-field-path="['content/pages/index.md'].fields.sections.items[1].fields.subtitle" data-sb-xpath="/html/body[1]/div[1]/div[1]/main[1]/section[2]/div[1]/div[1]/text()[1]" data-sb-path="1.0.0.1.1.0.0.0" data-sb-type="text">Grid Section Example</div><h2 class="section__title mt-0 sb-outline-node" data-sb-field-path="['content/pages/index.md'].fields.sections.items[1].fields.title" data-sb-xpath="/html/body[1]/div[1]/div[1]/main[1]/section[2]/div[1]/h2[1]/text()[1]" data-sb-path="1.0.0.1.1.0.1.0" data-sb-type="text" contenteditable="false">Image Grid</h2></div><div class="container"><div class="grid"><div class="cell-12 cell-md-6 cell-lg-4 cell-xl-3 my-2"><div class="item"><div class="flex flex-column"><div><div class="item__media"><img src="/images/logo-1.svg" alt="Contentful logo" class="mx-auto sb-outline-node" data-sb-field-path="['content/pages/index.md'].fields.sections.items[1].fields.grid_items.items[0].fields.image.fields.url" data-sb-xpath="/html/body[1]/div[1]/div[1]/main[1]/section[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/img[1]/@src" data-sb-path="1.0.0.1.1.1.0.0.0.0.0.0.0" data-sb-type="attribute"></div></div></div></div></div><div class="cell-12 cell-md-6 cell-lg-4 cell-xl-3 my-2"><div class="item"><div class="flex flex-column"><div><div class="item__media"><img src="/images/logo-2.svg" alt="Netlify logo" class="mx-auto sb-outline-node" data-sb-field-path="['content/pages/index.md'].fields.sections.items[1].fields.grid_items.items[1].fields.image.fields.url" data-sb-xpath="/html/body[1]/div[1]/div[1]/main[1]/section[2]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/img[1]/@src" data-sb-path="1.0.0.1.1.1.0.1.0.0.0.0.0" data-sb-type="attribute"></div></div></div></div></div><div class="cell-12 cell-md-6 cell-lg-4 cell-xl-3 my-2"><div class="item"><div class="flex flex-column"><div><div class="item__media"><img src="/images/logo-3.svg" alt="Gatsby logo" class="mx-auto sb-outline-node" data-sb-field-path="['content/pages/index.md'].fields.sections.items[1].fields.grid_items.items[2].fields.image.fields.url" data-sb-xpath="/html/body[1]/div[1]/div[1]/main[1]/section[2]/div[2]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/img[1]/@src" data-sb-path="1.0.0.1.1.1.0.2.0.0.0.0.0" data-sb-type="attribute"></div></div></div></div></div><div class="cell-12 cell-md-6 cell-lg-4 cell-xl-3 my-2"><div class="item"><div class="flex flex-column"><div><div class="item__media"><img src="/images/logo-4.svg" alt="Sanity logo" class="mx-auto sb-outline-node" data-sb-field-path="['content/pages/index.md'].fields.sections.items[1].fields.grid_items.items[3].fields.image.fields.url" data-sb-xpath="/html/body[1]/div[1]/div[1]/main[1]/section[2]/div[2]/div[1]/div[4]/div[1]/div[1]/div[1]/div[1]/img[1]/@src" data-sb-path="1.0.0.1.1.1.0.3.0.0.0.0.0" data-sb-type="attribute"></div></div></div></div></div><div class="cell-12 cell-md-6 cell-lg-4 cell-xl-3 my-2"><div class="item"><div class="flex flex-column"><div><div class="item__media"><img src="/images/logo-5.svg" alt="DatoCMS logo" class="mx-auto sb-outline-node" data-sb-field-path="['content/pages/index.md'].fields.sections.items[1].fields.grid_items.items[4].fields.image.fields.url" data-sb-xpath="/html/body[1]/div[1]/div[1]/main[1]/section[2]/div[2]/div[1]/div[5]/div[1]/div[1]/div[1]/div[1]/img[1]/@src" data-sb-path="1.0.0.1.1.1.0.4.0.0.0.0.0" data-sb-type="attribute"></div></div></div></div></div><div class="cell-12 cell-md-6 cell-lg-4 cell-xl-3 my-2"><div class="item"><div class="flex flex-column"><div><div class="item__media"><img src="/images/logo-6.svg" alt="Next.js logo" class="mx-auto sb-outline-node" data-sb-field-path="['content/pages/index.md'].fields.sections.items[1].fields.grid_items.items[5].fields.image.fields.url" data-sb-xpath="/html/body[1]/div[1]/div[1]/main[1]/section[2]/div[2]/div[1]/div[6]/div[1]/div[1]/div[1]/div[1]/img[1]/@src" data-sb-path="1.0.0.1.1.1.0.5.0.0.0.0.0" data-sb-type="attribute"></div></div></div></div></div><div class="cell-12 cell-md-6 cell-lg-4 cell-xl-3 my-2"><div class="item"><div class="flex flex-column"><div><div class="item__media"><img src="/images/logo-7.svg" alt="Gridsome logo" class="mx-auto sb-outline-node" data-sb-field-path="['content/pages/index.md'].fields.sections.items[1].fields.grid_items.items[6].fields.image.fields.url" data-sb-xpath="/html/body[1]/div[1]/div[1]/main[1]/section[2]/div[2]/div[1]/div[7]/div[1]/div[1]/div[1]/div[1]/img[1]/@src" data-sb-path="1.0.0.1.1.1.0.6.0.0.0.0.0" data-sb-type="attribute"></div></div></div></div></div><div class="cell-12 cell-md-6 cell-lg-4 cell-xl-3 my-2"><div class="item"><div class="flex flex-column"><div><div class="item__media"><img src="/images/logo-8.svg" alt="Git logo" class="mx-auto sb-outline-node" data-sb-field-path="['content/pages/index.md'].fields.sections.items[1].fields.grid_items.items[7].fields.image.fields.url" data-sb-xpath="/html/body[1]/div[1]/div[1]/main[1]/section[2]/div[2]/div[1]/div[8]/div[1]/div[1]/div[1]/div[1]/img[1]/@src" data-sb-path="1.0.0.1.1.1.0.7.0.0.0.0.0" data-sb-type="attribute"></div></div></div></div></div></div></div></section>
                  </main>
                  <Footer {...this.props} />
                </div>
            </React.Fragment>
        );
    }
}
