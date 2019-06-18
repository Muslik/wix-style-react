/* eslint-disable no-console */
import React from 'react';
import {
  header,
  tabs,
  tab,
  description,
  importExample,
  title,
  columns,
  divider,
  code as baseCode,
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';
import SectionHelper from 'wix-style-react/SectionHelper';
import { Layout, Cell } from 'wix-style-react/Layout';

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';

import Stepper from '..';

const code = config =>
  baseCode({
    components: {
      Stepper,
      steps7: steps7,
      steps4: steps4,
      onClick,
      ...allComponents,
    },
    ...config,
  });

const steps7 = [
  { text: 'This is a long step name', type: 'completed' },
  { text: 'This is a long step name' },
  { text: 'This is a long step name', type: 'error' },
  { text: 'This is a long step name' },
  { text: 'This is a long step name', type: 'error' },
  { text: 'This is a long step name' },
  { text: 'This is a long step name', type: 'disabled' },
];

const steps4 = [
  { text: 'First step', type: 'completed' },
  { text: 'Second step' },
  { text: 'Third step', type: 'error' },
  { text: 'Forth step' },
];

const onClick = id => console.log(`step ${id} was clicked`);

export default {
  category: storySettings.category,
  storyName: 'Stepper',

  component: Stepper,
  componentPath: '..',

  componentProps: {
    buttonText: 'Hello World!',
  },

  exampleProps: {
    // Put here presets of props, for more info:
    // https://github.com/wix/wix-ui/blob/master/packages/wix-storybook-utils/docs/usage.md#using-list
  },

  sections: [
    header({
      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/Stepper/',
      component: (
        <Layout>
          <Cell span={6}>
            <SectionHelper title="Work in progress" appearance="danger">
              Component is currently in development and should not be used yet.
            </SectionHelper>
          </Cell>
        </Layout>
      ),
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          columns([
            description({
              title: 'Description',
              text: 'Stepper',
            }),
          ]),

          columns([
            importExample("import Stepper from 'wix-style-react/Stepper';"),
          ]),

          divider(),

          title('Examples'),

          code({
            title: 'Stepper',
            compact: true,
            source: `<div style={{padding: "20px 20px", backgroundColor: "white"}}>
              <Stepper activeStep={2} steps={steps7} onClick={onClick}/>
              </div>`,
          }),

          code({
            title: 'Stepper',
            compact: true,
            source: `<div style={{padding: "20px 20px", backgroundColor: "white"}}>
              <Stepper activeStep={1} steps={steps4} onClick={onClick} />
              </div>`,
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