import React, { useEffect, useRef } from 'react';
import { useOnScreen } from 'src/hooks/useOnScreen';

const isBrowser = typeof window !== 'undefined';

type CenterProps = {
  lat: number;
  lng: number;
};

type StylersProps = {
  color: string;
};

type StylesProps = {
  featureType?: string;
  elementType: string;
  stylers: StylersProps[];
};

type OptionsProps = {
  center: CenterProps;
  zoom: number;
  mapTypeControl: boolean;
  fullscreenControl: boolean;
  streetViewControl: boolean;
  styles: StylesProps[];
  zoomControl?: boolean;
};

type MapsProps = {
  id?: string;
  options: OptionsProps;
  onMapLoad: any;
  height?: string | undefined;
};

const Map: React.FC<MapsProps> = ({ id, options, onMapLoad, height }) => {
  const ref = useRef<HTMLInputElement>(null);
  const isVisible = useOnScreen(ref);
  useEffect(() => {
    const onScriptLoad = (): void => {
      if (isBrowser && window.google) {
        const map: google.maps.Map = new window.google.maps.Map(
          document.getElementById(id as string) as HTMLElement,
          options
        );
        onMapLoad(map);
      }
    };
    if (isVisible) {
      onScriptLoad();
    }
  }, [id, options, onMapLoad, isVisible]);

  return (
    <div
      ref={ref}
      style={{
        width: '100%',
        height: height || 'calc(100% - 76px)',
      }}
      id={id}
    />
  );
};

export default Map;
