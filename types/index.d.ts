// types/index.d.ts

declare module '*.mdx' {
  import React from 'react';
  const MDXComponent: React.FC<React.ComponentProps<'div'>>;
  export default MDXComponent;
}

interface Settings {
  contacts: {
    phone: string;
    email: string;
  };
  address: string;
  hours: {
    weekdays: string;
    weekends: string;
  };
  social: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
  };
  booking: {
    url: string;
    enabled: boolean;
  };
  analytics: {
    googleAnalyticsId?: string;
    schemaEnabled: boolean;
  };
}

declare module 'settings' {
  const settings: Settings;
  export default settings;
}