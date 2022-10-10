import React from 'react';

import MultipleTab from 'component/MultipleTab';
import Page from 'views/A';

function Tab() {
  const menu = [
    {
      id: 1,
      name: 'A tab',
      query: 'a-tab',
    },
    {
      id: 2,
      name: 'B tab',
      query: 'b-tab',
    },
    {
      id: 3,
      name: 'C tab',
      query: 'c-tab',
    },
  ];
  return (
    <MultipleTab.Container menu={menu}>
      <MultipleTab.Page name="a-tab" initialData={{ data: 'a-tab-data' }}>
        <Page />
      </MultipleTab.Page>

      <MultipleTab.Page name="b-tab" initialData={{ data: 'a-tab-data' }}>
        <Page />
      </MultipleTab.Page>

      <MultipleTab.Page name="c-tab" initialData={{ data: 'a-tab-data' }}>
        <Page />
      </MultipleTab.Page>
    </MultipleTab.Container>
  );
}

export default Tab;
