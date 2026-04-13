// src/utils/iconMap.ts

// 1. This grabs every .svg file in your icons folder
const iconFiles = import.meta.glob('../assets/icons/*.svg', { query: '?raw', eager: true });

// 2. We extract the filename to use as the key
export const iconMap: Record<string, string> = {};

for (const path in iconFiles) {
  const fileName = path.split('/').pop()?.replace('.svg', '');
  if (fileName) {
    iconMap[fileName] = (iconFiles[path] as any).default;
  }
}

// 3. This type now supports ANY icon file you drop into the folder
export type IconName = keyof typeof iconMap;