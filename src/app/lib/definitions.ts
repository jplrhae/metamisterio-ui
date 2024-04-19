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

export const metadataFields: MetadataField[] = [
  {
    id: "title",
    displayName: "Título",
    value: "",
    inputType: "text",
    placeholder: "Digite o título",
  },
  {
    id: "description",
    displayName: "Descrição",
    value: "",
    inputType: "text",
    placeholder: "Digite a descrição",
  },
  {
    id: "indexPoint",
    displayName: "Pontos de índice",
    value: "",
    inputType: "text",
    placeholder: "Digite os pontos de índice",
  },
  {
    id: "socialMarker",
    displayName: "Marcador social",
    value: "",
    inputType: "text",
    placeholder: "Digite os marcadores sociais",
  },
  {
    id: "date",
    displayName: "Data",
    value: "",
    inputType: "date",
    placeholder: "Digite a data",
  },
];
