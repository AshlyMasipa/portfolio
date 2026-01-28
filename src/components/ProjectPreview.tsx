import type { Project } from '../data/projects';
import { useState } from 'react';

interface ProjectPreviewProps {
  project: Project;
}

export default function ProjectPreview({ project }: ProjectPreviewProps) {
  const [open, setOpen] = useState(false);

  if (!project.previewUrl) return null;

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-blue-500 hover:underline text-sm"
      >
        Preview
      </button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-4/5 h-4/5 p-4 relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 text-gray-700 font-bold"
            >
              ✕
            </button>
            <iframe
              src={project.previewUrl}
              className="w-full h-full border"
              title={project.title}
            />
          </div>
        </div>
      )}
    </>
  );
}
