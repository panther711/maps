import React from 'react';
import ReactDOM from 'react-dom/client';
import { MapsApp } from './MapsApp';

import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiamVhbmR2IiwiYSI6ImNsN21raGh5cTFzcWEzb3FwNDZhcXp2aGoifQ.qq444J3nJ_eV7pFJ_yjW8Q';

if (!navigator.geolocation) {
  alert('Tu navegador no tiene opción de Geolocation.')
  throw new Error('Tu navegador no tiene opción de Geolocation.')
}


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);