export interface Session {
  users: UserSessionData[];
  documentId: string;
  playerLimit: number;
}

export interface UserSessionData {
  name: string;
  points: number;
}

export interface Document {
  id: string;
  filePath: string;
}

export interface MetadataField {
  id: "title" | "description" | "indexPoint" | "socialMarker" | "date";
  displayName: string;
  value: string;
  inputType?: string;
  placeholder?: string;
}
