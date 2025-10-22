import { createWorker } from 'tesseract.js';
export const recognizeText = async (
  file: File,
  onProgress?: (progress: number) => void
): Promise<string> => {

  const workerPromise = (createWorker as any)({
    logger: (m: any) => {
      if (onProgress && m.status === 'recognizing text') {
        onProgress(m.progress);
      }
    },
  });

  let worker: any;
  try {
    worker = await workerPromise;
    await worker.load();
    await worker.loadLanguage('pl');
    await worker.initialize('pl');

    const { data } = await worker.recognize(file);
    return data.text;
  } finally {
    if (worker) await worker.terminate();
  }
};
