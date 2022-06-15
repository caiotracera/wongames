export type GalleryImageProps = {
  src: string;
  label: string;
};

export type GalleryProps = {
  items: GalleryImageProps[];
  color?: 'white' | 'black';
};

export type ModalProps = {
  isOpen: boolean;
};
