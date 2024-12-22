/// <reference types="astro/client" />
interface ImportMetaEnv {
    readonly X_API_KEY: string;
    readonly SMALL_ID: string;
    readonly MEDIUM_ID: string;
    readonly LARGE_ID: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }