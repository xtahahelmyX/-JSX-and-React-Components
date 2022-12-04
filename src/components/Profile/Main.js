import React from 'react'
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Address } from './Address';
import { FullName } from './FullName';
import { ProfilePhoto } from './ProfilePhoto'

export const Main = () => {
  return (
    <main>
      <header>
        <ProfilePhoto />
        <section>
          <FullName />
          <Address />
        </section>
      </header>
    </main>
  );
}
