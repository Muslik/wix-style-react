import React from 'react';
import {
  header,
  tabs,
  tab,
  description,
  importExample,
  title,
  divider,
  example as baseExample,
  code as baseCode,
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';
import * as examples from './examples';

import StarsRatingBar from '..';

const example = config => baseExample({ components: allComponents, ...config });
const code = config => baseCode({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: StarsRatingBar,
  componentPath: '..',

  componentProps: {
    PrimaryProp: 'Hello World!',
  },

  exampleProps: {
    // Put here presets of props, for more info:
    // https://github.com/wix/wix-ui/blob/master/packages/wix-storybook-utils/docs/usage.md#using-list
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${StarsRatingBar.displayName}/`,
      component: <StarsRatingBar value={3} />,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text:
              'This component let the users the ability to share their opinion about any requested subject on a 1-5 scale.',
          }),

          importExample(),

          divider(),

          title('Examples'),

          example({
            title: 'Simple Usage',
            text: 'A simple examples',
            source: examples.basicExample,
          }),

          example({
            title: 'readOnly',
            text:
              'Stars rating bar has 2 modes: readOnly and interactive. This is an example for the readOnly mode.',
            source: examples.readOnlyExample,
          }),

          example({
            title: 'Sizes for interactive mode',
            text:
              'Stars rating bar has 2 modes: readOnly and interactive. This is an example for the interactive mode. The only size for this mode is large (default).',
            source: examples.interactiveModeSizesExample,
          }),

          example({
            title: 'Sizes for read only mode',
            text: 'There are 4 sizes: tiny, small , medium (default) and large',
            source: examples.readOnlyModeSizesExample,
          }),

          example({
            title: 'With rate captions',
            text:
              'Stars rating bar can show a rating caption which represent the rate value label. Supported only in the interactive mode.',
            source: examples.rateCaptionsExample,
          }),

          example({
            title: 'Additional info',
            text:
              'Stars rating bar can show a rating caption which represent the rate value label. Supported only in the interactive mode.',
            source: examples.additionalInfoExample,
          }),

          example({
            title: 'Required',
            text: 'You can add an asterisk if the field is required.',
            source: examples.requiredExample,
          }),

          example({
            title: 'Label Position',
            text:
              'StarsRatingBar’s label can be position on top, left or can be hidden. Additional properties behave accordingly.',
            source: examples.labelPositionExample,
          }),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'Testkit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};
