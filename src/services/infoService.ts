export interface Message {
  id: number;
  text: string;
  date: string;
}

export interface Memory {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
}

export interface InfoData {
  loveMessages: Message[];
  specialMemories: Memory[];
  romanticImages: string[];
}

export async function getInfoData(): Promise<InfoData> {
  const response = await fetch('/info.json');
  if (!response.ok) throw new Error('No se pudo cargar info.json');
  return response.json();
}
