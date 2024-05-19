import type { Schema, Attribute } from '@strapi/strapi';

export interface PageSection extends Schema.Component {
  collectionName: 'components_page_sections';
  info: {
    displayName: 'Section';
    description: '';
  };
  attributes: {
    SectionTitle: Attribute.String;
    SectionText: Attribute.Text;
    sectionRichText: Attribute.RichText;
    SectionRecommendation: Attribute.String;
    Table: Attribute.JSON;
    SectionNote: Attribute.String;
  };
}

export interface SidebarLinks extends Schema.Component {
  collectionName: 'components_sidebar_links';
  info: {
    displayName: 'links';
    icon: 'link';
  };
  attributes: {
    Label: Attribute.String;
    URL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'page.section': PageSection;
      'sidebar.links': SidebarLinks;
    }
  }
}
