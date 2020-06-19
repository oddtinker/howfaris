import bed from './assets/images/bed.svg';
import bicycle from './assets/images/bicycle.svg';
import trolley from './assets/images/trolley.svg';
import escooter from './assets/images/escooter.svg';
import warriorPose from './assets/images/warriorPose.svg';
import railwayTrackGauge from './assets/images/railwayTrackGauge.svg';
import door from './assets/images/door.svg';

const images1 = [
  {
    id: 'bicycle1',
    file: bicycle,
    title: 'Average bicycle\'s wheelbase',
  },
  {
    id: 'escooter1',
    file: escooter,
    title: 'Electric ride-share scooter',
    actualLength: '1.07 m',
  },
  {
    id: 'trolley1',
    file: trolley,
    title: 'Average shopping cart',
  },
];

const images15 = [
  {
    id: 'railwayTrackGauge15',
    file: railwayTrackGauge,
    title: 'Standard-gauge railway, in use in Europe, North America and Australia',
    actualLength: '1.43 m',
  },
  {
    id: 'warriorPose15',
    file: warriorPose,
    title: 'Two outstretched arms',
  },
];

const images2 = [
  {
    id: 'bed2',
    file: bed,
    title: 'Standard bed\'s length',
  },
  {
    id: 'door2',
    file: door,
    title: 'Standard door\'s height',
  },
];

export { images1, images15, images2 };