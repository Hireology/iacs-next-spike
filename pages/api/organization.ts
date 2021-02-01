// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// Stubbed API route to fetch an organization
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default (req, res) => {
  res.statusCode = 200;
  res.json({
    organization: {
      name: 'anytimefitnessstaugustinefl',
      styles: {
        brandColor: '#6bebeb',
        linkColor: '#4a4a4a',
        textColor: '#677078',
        backgroundColor: '#f7f9f9',
      },
      baseURL: 'anytimefitnessstaugustinefl',
      routes: [
        {
          name: 'home',
          layout: {
            data: {
              general: {
                title: 'Home page',
                description:
                  'People, Purpose, Profits, Play. \n At Anytime Fitness, we feel that true success is not measured only in dollars and cents. We believe that real profits are gained through a return on emotional investment. We invest in people so they can continue to discover better health, together. We want to be alongside you when you search for enriched purpose. And of course, we want to be your partners in crime when it comes time to play!',
              },
              media: [{ image: 'https://picsum.photos/200/300' }],
            },
          },
        },
        {
          name: 'about',
          layout: {
            data: {
              general: {
                title: 'Building a Legacy',
                description:
                  'People, Purpose, Profits, Play. \n\n At Anytime Fitness, we feel that true success is not measured only in dollars and cents. We believe that real profits are gained through a return on emotional investment. We invest in people so they can continue to discover better health, together. We want to be alongside you when you search for enriched purpose. And of course, we want to be your partners in crime when it comes time to play!',
                media: [{ image: 'https://picsum.photos/200/300' }],
              },
            },
          },
        },
        {
          name: 'jobs',
          layout: {
            data: {
              general: {
                title: 'Current Positions',
                description:
                  'People, Purpose, Profits, Play. \n At Anytime Fitness, we feel that true success is not measured only in dollars and cents. We believe that real profits are gained through a return on emotional investment. We invest in people so they can continue to discover better health, together. We want to be alongside you when you search for enriched purpose. And of course, we want to be your partners in crime when it comes time to play!',
                media: [{ image: 'https://picsum.photos/200/300' }],
              },
            },
          },
        },
        {
          name: 'company',
          layout: {
            data: {
              general: {
                title: 'Our Values to Success',
                description:
                  'People, Purpose, Profits, Play. \n At Anytime Fitness, we feel that true success is not measured only in dollars and cents. We believe that real profits are gained through a return on emotional investment. We invest in people so they can continue to discover better health, together. We want to be alongside you when you search for enriched purpose. And of course, we want to be your partners in crime when it comes time to play!',
              },
              media: [{ image: 'https://picsum.photos/200/300' }],
            },
          },
        },
      ],
    },
  });
};
