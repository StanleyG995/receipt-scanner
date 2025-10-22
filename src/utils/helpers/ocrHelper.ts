import { createWorker } from 'tesseract.js';

export const recognizeText = async (
  file: File,
  onProgress?: (progress: number) => void
): Promise<string> => {
  const worker: any = await createWorker();

  try {
    // przypisujemy logger na workerze w main thread
    if (onProgress) {
      worker.setLogger((m: any) => {
        if (m.status === "recognizing text") {
          onProgress(m.progress);
        }
      });
    }

    const { data } = await worker.recognize(file, { lang: 'pl' }); 

    return data.text;
  } finally {
    await worker.terminate();
  }
};
