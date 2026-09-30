export interface ICharacter {
  id: string;
  attributes: {
    name: string;
    image: string | null;
    nationality: string | null;
    blood_status: string | null;
    house: string | null;
    wiki: string;
  };
}

export interface ICharacterResponse {
  data: ICharacter[];
}

export interface ICharacterFilter {
  name_cont: string | null;
  nationality_eq: string | null;
  blood_status_cont: string | null;
  house_eq: string | null;
}



