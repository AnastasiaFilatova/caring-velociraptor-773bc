import React from 'react';
import _ from 'lodash';

import {getData, getPages} from '../utils';
import BlogFeedItemFilter from './BlogFeedItemFilter';

export default class BlogFeedSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        let section_author = false;
        let section_category = false;
        let posts_all = getPages(this.props.pageContext.pages, '/blog');
        let posts_sorted = _.orderBy(posts_all, 'frontmatter.date', 'desc');
        let show_recent = _.get(section, 'show_recent', null);
        let recent_count = _.get(section, 'recent_count', null);
        let post_count = 0;
        if (_.get(section, 'author', null)) {
             section_author = getData(this.props.pageContext.site.data, _.get(section, 'author', null));
        }
        if (_.get(section, 'category', null)) {
             section_category = getData(this.props.pageContext.site.data, _.get(section, 'category', null));
        }
        return (
            <section className="section section--posts">
              {_.get(section, 'title', null) && (
              <div className="container container--md align-center">
                <h2 className="section__title">{_.get(section, 'title', null)}</h2>
              </div>
              )}
              <div className="container container--lg">
                <div className="flex flex--col-3">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/PI9lU9jDlE8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/t6ZKhY0-_cA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/1UJdzpEr3rg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/hvQeWJSDwkE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/JpkJDvhXkrE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>
            </section>
        );
    }
}
