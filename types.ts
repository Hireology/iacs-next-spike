export interface Media {
  // url for the image
  image: string;
  // optional alt text
  alt?: string;
}

// details for community section
export interface Detail {
  title: string;
  description: string;
}

export interface Award {
  logo: string;
  name: string;
}

export interface Route {
  // name of the route, also used for appending to the url
  name: string;
  layout: {
    data: {
      general: {
        title: string;
        description: string;
        media?: Media[];
      };
      awards?: {
        title: string;
        list: Award[];
      };
      community?: {
        title: string;
        description: string;
        details: Detail[];
        image: string;
      };
    };
  };
}

export interface Site {
  name: string;
  styles: {
    brandColor: string;
    linkColor: string;
    textColor: string;
    backgroundColor: string;
  };
  baseURL: string;
  routes: Route[];
}
