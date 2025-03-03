import type { FC } from "react";


export interface NoteRendererProps {
  id: string;
}

const NoteRenderer: FC<NoteRendererProps> = () => {
  return (
    <div>
      <canvas />
    </div>
  );
};


export default NoteRenderer;
