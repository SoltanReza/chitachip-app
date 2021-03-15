/**
 * Component Generator
 */

import { Actions, PlopGenerator } from 'node-plop';
import path from 'path';

import { containerExists } from '../utils';

export enum ContainerProptNames {
  'ComponentName' = 'ComponentName',
  'wantMemo' = 'wantMemo',
  'wantHeaders' = 'wantHeaders',
  'wantSlice' = 'wantSlice',
  'wantSaga' = 'wantSaga',
  'wantStyledComponents' = 'wantStyledComponents',
  'wantTranslations' = 'wantTranslations',
  'wantLoadable' = 'wantLoadable',
  'wantTests' = 'wantTests',
}

const containersPath = path.join(__dirname, '../../../src/app/containers');
const rootStatePath = path.join(__dirname, '../../../src/types/RootState.ts');

function renamePage(name: string): string {
  return (
    name
      .split(/[_\- ]+/g)
      .map(item => item[0].toUpperCase() + item.substr(1))
      .join('')
      .replace(/[_\- ]/g, '')
      .replace(/page$/i, '') + 'Page'
  );
}

export const containerGenerator: PlopGenerator = {
  description: 'Add a container component',
  prompts: [
    {
      type: 'input',
      name: ContainerProptNames.ComponentName,
      message: 'Name?',
      default: 'Form',
      validate: value => {
        if (/.+/.test(value)) {
          return containerExists(value)
            ? 'A container with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
    {
      type: 'confirm',
      name: ContainerProptNames.wantSlice,
      default: true,
      message: 'redux slice(actions/selectors/reducer)?',
    },
    {
      type: 'confirm',
      name: ContainerProptNames.wantSaga,
      default: true,
      message: 'saga? (e.g. fetching data)',
    },
    {
      type: 'confirm',
      name: ContainerProptNames.wantStyledComponents,
      default: true,
      message: 'styled-components?',
    },
    {
      type: 'confirm',
      name: ContainerProptNames.wantHeaders,
      default: true,
      message: 'headers for SEO?',
    },
    {
      type: 'confirm',
      name: ContainerProptNames.wantTranslations,
      default: true,
      message: 'i18n translations?',
    },
    {
      type: 'confirm',
      name: ContainerProptNames.wantLoadable,
      default: true,
      message: 'loadable?',
    },
    {
      type: 'confirm',
      name: ContainerProptNames.wantMemo,
      default: false,
      message: 'memo?',
    },
    {
      type: 'confirm',
      name: ContainerProptNames.wantTests,
      default: false,
      message: 'tests?',
    },
  ],
  actions: (data: { [P in ContainerProptNames]: string }) => {
    data.ComponentName = renamePage(data.ComponentName);

    const containerPath = `${containersPath}/{{properCase ${ContainerProptNames.ComponentName}}}`;

    const actions: Actions = [
      {
        type: 'add',
        path: `${containerPath}/index.tsx`,
        templateFile: './container/index.tsx.hbs',
        abortOnFail: true,
      },
    ];

    if (data.wantStyledComponents) {
      actions.push({
        type: 'add',
        path: `${containerPath}/styles.ts`,
        templateFile: './container/styles.ts.hbs',
        abortOnFail: true,
      });
    }

    if (data.wantSlice) {
      actions.push({
        type: 'add',
        path: `${containerPath}/slice.ts`,
        templateFile: './container/slice.ts.hbs',
        abortOnFail: true,
      });
      actions.push({
        type: 'add',
        path: `${containerPath}/selectors.ts`,
        templateFile: './container/selectors.ts.hbs',
        abortOnFail: true,
      });
      actions.push({
        type: 'add',
        path: `${containerPath}/types.ts`,
        templateFile: './container/types.ts.hbs',
        abortOnFail: true,
      });
      actions.push({
        type: 'modify',
        path: `${rootStatePath}`,
        pattern: new RegExp(/.*\/\/.*\[IMPORT NEW CONTAINERSTATE ABOVE\].+\n/),
        templateFile: './container/importContainerState.hbs',
        abortOnFail: true,
      });
      actions.push({
        type: 'modify',
        path: `${rootStatePath}`,
        pattern: new RegExp(/.*\/\/.*\[INSERT NEW REDUCER KEY ABOVE\].+\n/),
        templateFile: './container/appendRootState.hbs',
        abortOnFail: true,
      });
    }
    if (data.wantSaga) {
      actions.push({
        type: 'add',
        path: `${containerPath}/saga.ts`,
        templateFile: './container/saga.ts.hbs',
        abortOnFail: true,
      });
    }
    if (data.wantLoadable) {
      actions.push({
        type: 'add',
        path: `${containerPath}/Loadable.ts`,
        templateFile: './container/loadable.ts.hbs',
        abortOnFail: true,
      });
    }

    if (data.wantTests) {
      actions.push({
        type: 'add',
        path: `${containerPath}/__tests__/index.test.tsx`,
        templateFile: './container/index.test.tsx.hbs',
        abortOnFail: true,
      });
    }

    actions.push({
      type: 'prettify',
      data: { path: `${containersPath}/${data.ComponentName}/**` },
    });

    return actions;
  },
};
