import { atom } from 'jotai';

type Location = {
  lat: number | null;
  lng: number | null;
};

export const pointedLocation = atom<Location>({
  lat: null,
  lng: null,
});
