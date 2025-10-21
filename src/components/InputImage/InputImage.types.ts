export interface InputImageProps {
    onImageSelect: (file: File | null) => void;
    className?: string
    previewWidth?: number
    previewHeight?: number
}