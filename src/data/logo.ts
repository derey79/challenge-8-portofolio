import type { BrandLogo } from '../types';

import AdobeLogo from '@/assets/adobe-logo.png';
import UpworkLogo from '@/assets/upwork-logo.png';
import ZoomLogo from '@/assets/zoom-logo.png';
import PostmanLogo from '@/assets/postman-logo.png';
import DatabricksLogo from '@/assets/databricks-logo.png';
import AirbnbLogo from '@/assets/airbnb-logo.png';
import DropboxLogo from '@/assets/drobbox-logo.png';
import Paypal from '@/assets/paypal-logo.png';
import Netflix from '@/assets/netflix-logo.png';

export const logos: BrandLogo[] = [
  { src: AdobeLogo, alt: 'Adobe Logo' },
  { src: UpworkLogo, alt: 'Upwork Logo' },
  { src: ZoomLogo, alt: 'Zoom Logo' },
  { src: PostmanLogo, alt: 'Postman Logo' },
  { src: DatabricksLogo, alt: 'Databricks Logo' },
  { src: AirbnbLogo, alt: 'Airbnb Logo' },
  { src: DropboxLogo, alt: 'Dropbox Logo' },
  { src: Paypal, alt: 'Paypal Logo' },
  { src: Netflix, alt: 'Netflix Logo' },
];

export const doubleLogos: BrandLogo[] = [...logos, ...logos];
