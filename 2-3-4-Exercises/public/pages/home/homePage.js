import {buttonGroupNode} from '../../common/buttonGroupNode.js';
import {jsonToTable} from '../../common/jsonToTable.js';

import {h, iconPerson, iconDataTransferDownload} from '/js/src/index.js';

export default ({homeModel}) =>
  h('.text-center.p4.g4.flex-column', [
    buttonGroupNode([
      {
        title: 'Home',
        labelContent: ['Person ', iconPerson()],
        onclick: () => homeModel.userName = 'DemoUser',
        classList: ['btn-primary']
      },
      {
        title: 'Get some data',
        labelContent: [iconDataTransferDownload()],
        onclick: homeModel.fetchData.bind(homeModel),
        classList: ['btn-primary']
      },
    ]),

    h('.w-100', homeModel.userName),
    homeModel.data.match({
      NotAsked: () => h('.warning', 'Data? What Data?'),
      Loading: () => h('', 'Loading'),
      Success: (data) => jsonToTable(data),
      Failure: (error) => h('.danger', error),
    })
  ]);
