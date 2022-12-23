import React from 'react';
import Produtores from './components/Produtores';
import Topo from './components/Topo';

export default function Home() {
  return (
    <>
      <Produtores topo={Topo} />
    </>
  );
}
