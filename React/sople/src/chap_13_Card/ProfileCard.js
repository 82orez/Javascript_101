import React from 'react';
import Card from './Card';

function ProfileCard(props) {
  return (
    <Card title={'TG'} backgroundColor={'#4ea04e'}>
      <p>Hello, I'm TG.</p>
      <p>I'm using React!</p>
    </Card>
  );
}

export default ProfileCard;
